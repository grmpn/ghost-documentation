(() => {
  'use strict';
  history.scrollRestoration = 'manual';
  const nav = document.querySelector('#primary-nav');
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.menu-toggle');
  menu.hidden = false;
  nav.classList.add('js-nav');
  const closeMenu = () => {
    nav.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
  };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  const wideScreen = matchMedia('(min-width: 601px)');
  wideScreen.addEventListener('change', closeMenu);

  const navLinks = [...nav.querySelectorAll('a')];
  const main = document.querySelector('main');
  const hero = document.querySelector('#hero');
  const stage = hero.querySelector('.hero-stage');
  const details = hero.querySelector('.hero-details');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = value => Math.min(1, Math.max(0, value));
  const smooth = (start, end, value) => {
    const t = clamp((value - start) / (end - start));
    return t * t * (3 - 2 * t);
  };
  // One stationary viewport, with every chapter laid out along the horizontal axis.
  const viewport = document.createElement('div');
  viewport.className = 'story-viewport';
  const track = document.createElement('div');
  track.className = 'story-track';
  const sections = [...main.querySelectorAll(':scope > section')];
  const extraPanel = (section, selector, title, id) => {
    const content = section.querySelector(selector);
    if (!content) return;
    const panel = document.createElement('div');
    panel.className = 'story-panel continuation';
    panel.id = id;
    if (id === 'reflection-details') panel.dataset.reading = 'short';
    const heading = document.createElement('div');
    heading.className = 'section-heading';
    const label = document.createElement('p');
    label.className = 'eyebrow';
    label.textContent = section.querySelector('.eyebrow').textContent;
    const h2 = document.createElement('h2');
    h2.textContent = title;
    heading.append(label, h2);
    panel.append(heading, content);
    section.append(panel);
  };
  for (const section of sections) {
    if (section === hero) { track.append(section); continue; }
    const first = document.createElement('div');
    first.className = 'story-panel';
    first.append(...section.childNodes);
    section.append(first);
    if (section.id === 'mechanical') extraPanel(section, '.paired-details', 'Packaging & support.', 'packaging-details');
    if (section.id === 'electronics') {
      first.classList.add('electronics-panel');
    }
    if (section.id === 'results') extraPanel(section, '.reflection', 'Design the interfaces with the parts.', 'reflection-details');
    track.append(section);
  }
  const footer = document.querySelector('.site-footer');
  footer.classList.add('story-panel');
  footer.dataset.reading = 'short';
  track.append(footer);
  viewport.append(track);
  main.append(viewport);
  const indicator = document.createElement('div');
  indicator.className = 'story-progress';
  indicator.setAttribute('aria-hidden', 'true');
  indicator.innerHTML = '<span>SCROLL TO EXPLORE →</span><div><i></i></div>';
  document.body.append(indicator);
  const horizontalGain = 1.2;
  let revealDistance = 0;
  let horizontalDistance = 0;
  let scheduled = false;
  function measure() {
    document.documentElement.classList.add('horizontal-story');
    document.documentElement.classList.toggle('hero-motion', !reducedMotion.matches);
    revealDistance = reducedMotion.matches ? 0 : window.innerWidth * .58;
    horizontalDistance = Math.max(0, track.scrollWidth - window.innerWidth);
    main.style.height = `${window.innerHeight + revealDistance + horizontalDistance / horizontalGain}px`;
    updateStory();
  }
  function updateStory() {
    const scroll = Math.max(0, -main.getBoundingClientRect().top);
    const progress = revealDistance ? clamp(scroll / revealDistance) : 1;
    const x = Math.min(horizontalDistance, Math.max(0, (scroll - revealDistance) * horizontalGain));
    track.style.transform = `translate3d(${-x}px, 0, 0)`;
    const move = smooth(0, .90, progress);
    const reveal = smooth(.06, .86, progress);
    const intro = 1 - smooth(0, .60, progress);
    const specs = smooth(.45, 1, progress);
    const exit = reducedMotion.matches ? 0 : smooth(0, window.innerWidth * .8, x);
    stage.style.setProperty('--travel', move.toFixed(5));
    stage.style.setProperty('--intro-shift', `${-18 * smooth(0, .65, progress)}vw`);
    stage.style.setProperty('--shell-opacity', reveal.toFixed(5));
    stage.style.setProperty('--eye-opacity', (1 - reveal).toFixed(5));
    stage.style.setProperty('--intro-opacity', intro.toFixed(5));
    stage.style.setProperty('--specs-opacity', specs.toFixed(5));
    stage.style.setProperty('--art-opacity', (1 - exit).toFixed(5));
    stage.style.setProperty('--exit-lift', '0px');
    details.style.pointerEvents = specs > .1 ? '' : 'none';
    let current = sections[0].id;
    for (const section of sections) if (section.offsetLeft <= x + window.innerWidth * .4) current = section.id;
    const groups = { architecture: 'brief', integration: 'results', future: 'results' };
    current = groups[current] || current;
    for (const link of navLinks) {
      if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    indicator.querySelector('i').style.transform = `scaleX(${clamp(scroll / Math.max(1, revealDistance + horizontalDistance / horizontalGain))})`;
    scheduled = false;
  }
  const scheduleUpdate = () => {
    if (!scheduled) { requestAnimationFrame(updateStory); scheduled = true; }
  };
  const destination = element => {
    if (element.id === 'hero') return 0;
    if (element.id === 'introduction') return revealDistance;
    const panel = element.closest('.story-panel') || element;
    // Relative geometry is stable even between a scroll event and its animation frame.
    return revealDistance + (panel.getBoundingClientRect().left - track.getBoundingClientRect().left) / horizontalGain;
  };
  const goTo = (element, behavior = 'smooth') => {
    window.scrollTo({ top: destination(element), behavior: reducedMotion.matches ? 'instant' : behavior });
  };
  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    closeMenu();
    history.pushState(null, '', link.hash);
    goTo(target);
    if (target === details) details.focus({ preventScroll: true });
  }));
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', measure);
  reducedMotion.addEventListener('change', measure);
  window.addEventListener('hashchange', () => {
    const target = document.getElementById(location.hash.slice(1));
    if (target) goTo(target, 'instant');
  });
  // Support horizontal trackpads as well as ordinary vertical wheel/touch scrolling.
  window.addEventListener('wheel', event => {
    if (document.querySelector('dialog[open]') || event.ctrlKey || Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
    event.preventDefault();
    window.scrollBy({ top: event.deltaX, behavior: 'instant' });
  }, { passive: false });
  document.addEventListener('keydown', event => {
    if (document.querySelector('dialog[open]') || event.target.closest('button,input,textarea,select')) return;
    if (!['ArrowRight', 'ArrowLeft'].includes(event.key)) return;
    event.preventDefault();
    window.scrollBy({ top: window.innerWidth / horizontalGain * (event.key === 'ArrowRight' ? 1 : -1), behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  });
  track.addEventListener('focusin', event => {
    const panel = event.target.closest('.story-panel');
    if (!panel) return;
    const rect = panel.getBoundingClientRect();
    const focused = event.target.getBoundingClientRect();
    if (rect.width > window.innerWidth + 2) {
      if (focused.left < 0 || focused.right > window.innerWidth) {
        const offset = focused.left - track.getBoundingClientRect().left - window.innerWidth * .25;
        window.scrollTo({ top: revealDistance + offset / horizontalGain, behavior: 'instant' });
      }
    } else if (rect.left < -20 || rect.left > window.innerWidth * .5) goTo(panel, 'instant');
  });
  measure();
  // Fonts and late image layout must not change the horizontal travel distance.
  document.fonts.ready.then(measure);
  window.addEventListener('load', () => {
    measure();
    const target = document.getElementById(location.hash.slice(1));
    if (target) goTo(target, 'instant');
  });

  const poses = {
    closed: { src: 'assets/mechanism-closed.png', alt: 'CAD source frame showing the integrated spike and follower in the closed pose, above the orange cam and servo.' },
    mid: { src: 'assets/mechanism-mid.png', alt: 'CAD source frame showing the spike and integrated follower at intermediate travel, with the blue torsion spring at the hinge.' },
    open: { src: 'assets/mechanism-open.png', alt: 'CAD source frame showing the spike and integrated follower in the open pose on the selected equation-defined cam.' }
  };
  const mechanismImage = document.querySelector('#mechanism-image');
  document.querySelectorAll('[data-pose]').forEach(button => button.addEventListener('click', () => {
    Object.assign(mechanismImage, poses[button.dataset.pose]);
    document.querySelectorAll('[data-pose]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  }));

  const boards = {
    front: { src: 'assets/main-pcb-v2-front.png', label: 'MAIN PCB / FRONT', alt: 'KiCad front render of the Revision 2 main PCB with four edge cutouts, central wiring opening, servo headers, and ESP32-S3 module.', caption: '93 mm profile, four mechanism cutouts, one central wire route.' },
    back: { src: 'assets/main-pcb-v2-back.png', label: 'MAIN PCB / BACK', alt: 'KiCad back render of the Revision 2 main PCB, showing rear-side routing and components around its mechanism-clearance cutouts.', caption: 'Routing and components on both faces preserve the compact footprint.' },
  };
  document.querySelectorAll('[data-board]').forEach(button => button.addEventListener('click', () => {
    const board = boards[button.dataset.board];
    Object.assign(document.querySelector('#pcb-image'), { src: board.src, alt: board.alt });
    document.querySelector('#pcb-label').textContent = board.label;
    document.querySelector('#pcb-caption').textContent = board.caption;
    const zoom = document.querySelector('#pcb-zoom');
    zoom.href = board.src;
    zoom.dataset.caption = `${board.label} — ${board.caption}`;
    document.querySelectorAll('[data-board]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  }));

  for (const [key, media] of Object.entries(window.GHOST_MEDIA || {})) {
    const figure = document.querySelector(`[data-media="${key}"]`);
    if (!figure) continue;
    if (media.caption) {
      figure.querySelector('figcaption').textContent = media.caption;
      if (key === 'hero') document.querySelector('[data-hero-caption]').textContent = media.caption;
    }
    if (key === 'demo') {
      if (!media.src) continue;
      const video = document.createElement('video');
      video.className = 'demo-video';
      video.src = media.src;
      video.controls = true;
      video.playsInline = true;
      video.preload = 'metadata';
      video.setAttribute('aria-label', 'Ghost integrated performance demonstration');
      if (media.poster) video.poster = media.poster;
      if (media.captions) {
        const track = document.createElement('track');
        Object.assign(track, { kind: 'captions', src: media.captions, srclang: 'en', label: 'English', default: true });
        video.append(track);
      }
      const fallback = document.createElement('a');
      fallback.href = media.src;
      fallback.textContent = 'Open demonstration video';
      video.append(fallback);
      figure.querySelector('[data-demo-stage]').replaceWith(video);
    } else if (media.src) {
      let img = figure.querySelector('img');
      if (!img) {
        img = document.createElement('img');
        img.loading = 'lazy';
        figure.querySelector('[data-media-stage]').replaceWith(img);
      }
      img.src = media.src;
      if (key === 'hero') {
        const eye = figure.querySelector('.hero-eye');
        eye.src = media.lightSrc || media.src;
        eye.style.objectFit = media.fit || 'contain';
        eye.style.objectPosition = media.position || '50% 50%';
      }
      img.alt = media.alt || '';
      img.style.objectFit = media.fit || 'contain';
      img.style.objectPosition = media.position || '50% 50%';
      if (!media.placeholder) figure.querySelector('.placeholder-tag')?.remove();
    }
  }

  const dialog = document.querySelector('.image-dialog');
  document.querySelectorAll('[data-zoom]').forEach(link => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    const caption = link.dataset.caption || 'Project figure';
    const img = document.querySelector('#dialog-image');
    img.src = link.href;
    img.alt = caption;
    document.querySelector('#dialog-caption').textContent = caption;
    dialog.dataset.light = String(link.href.endsWith('.svg'));
    dialog.dataset.crop = link.dataset.crop || '';
    dialog.showModal();
    document.body.classList.add('dialog-open');
  }));
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
})();
