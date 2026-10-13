(() => {
  'use strict';
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
  const sections = [...document.querySelectorAll('main section[id]')];
  const hero = document.querySelector('#hero');
  const runway = hero.querySelector('.hero-runway');
  const stage = hero.querySelector('.hero-stage');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = value => Math.min(1, Math.max(0, value));
  const smooth = (start, end, value) => {
    const t = clamp((value - start) / (end - start));
    return t * t * (3 - 2 * t);
  };
  document.documentElement.classList.toggle('hero-motion', !reducedMotion.matches);
  let scheduled = false;
  function updateNavigation() {
    const distance = Math.max(1, runway.offsetHeight - stage.offsetHeight);
    const progress = clamp(-runway.getBoundingClientRect().top / distance);
    // Crossfade the complete source images; retain their colors, alpha and background glow.
    const titleFade = smooth(.08, .32, progress);
    const light = reducedMotion.matches ? 1 : smooth(.08, .20, progress);
    // The light is a passing layer: the full assembly arrives as the title disappears.
    const shell = reducedMotion.matches ? 1 : smooth(.14, .32, progress);
    stage.style.setProperty('--outline-opacity', (reducedMotion.matches ? 0 : 1 - titleFade).toFixed(4));
    stage.style.setProperty('--eye-opacity', (light * (1 - shell)).toFixed(4));
    stage.style.setProperty('--shell-opacity', shell.toFixed(4));
    stage.style.setProperty('--word-opacity', (reducedMotion.matches ? 1 : 1 - titleFade).toFixed(4));
    // Leave the opening uninterrupted; bring navigation in before the pinned stage releases.
    const visible = reducedMotion.matches ? window.scrollY > 80 : progress > .9;
    header.classList.toggle('is-visible', visible);
    header.inert = !visible;
    header.setAttribute('aria-hidden', String(!visible));
    if (!visible) closeMenu();
    let current = sections[0].id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 180) current = section.id;
    }
    const groups = { architecture: 'brief', integration: 'control', future: 'results' };
    current = groups[current] || current;
    for (const link of navLinks) {
      if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    scheduled = false;
  }
  const scheduleUpdate = () => {
    if (!scheduled) { requestAnimationFrame(updateNavigation); scheduled = true; }
  };
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  reducedMotion.addEventListener('change', () => {
    document.documentElement.classList.toggle('hero-motion', !reducedMotion.matches);
    scheduleUpdate();
  });
  updateNavigation();

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
    front: { src: 'assets/main-pcb-v2-front.png', label: 'MAIN PCB / REVISION 2 / FRONT', alt: 'KiCad front render of the Revision 2 main PCB with four edge cutouts, central wiring opening, servo headers, and ESP32-S3 module.', caption: '93 mm profile, four mechanism cutouts, one central wire route.' },
    back: { src: 'assets/main-pcb-v2-back.png', label: 'MAIN PCB / REVISION 2 / BACK', alt: 'KiCad back render of the Revision 2 main PCB, showing rear-side routing and components around its mechanism-clearance cutouts.', caption: 'Routing and components on both faces preserve the compact footprint.' },
    revision: { src: 'assets/main-pcb-v1-front.png', label: 'MAIN PCB / REVISION 1 / FRONT', alt: 'KiCad render of the preliminary Revision 1 main PCB. Any displayed LCD cable is representative geometry, not verified dimensions.', caption: 'Preliminary circuit-validation board. LCD cable geometry is representative.' }
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
