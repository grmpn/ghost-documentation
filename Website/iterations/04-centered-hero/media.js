// Sources are relative to this iteration. Retain originals in project Assets/.
// Hero eye location is calibrated in hero.css for this image. Recheck alignment
// when replacing it; the same source feeds the dim shell and bright eye layers.
window.GHOST_MEDIA = {
  hero: {
    src: 'assets/ghost-front.webp',
    alt: 'User-supplied temporary front reference image of the Destiny Ghost. Final build photography is pending.',
    caption: 'Temporary reference image · final build photography pending.',
    placeholder: true,
    fit: 'contain',
    position: '50% 50%'
  },
  demo: {
    src: null,
    poster: null,
    captions: null,
    caption: 'Capture follows the final shell revision and supervised routine validation.'
  },
  packaging: {
    src: null,
    alt: 'Exploded CAD view of the shell, mechanisms, servo housing, main PCB, and lighting assembly.',
    caption: 'Final CAD view pending.',
    placeholder: true,
    fit: 'contain',
    position: '50% 50%'
  },
  rear: {
    src: null,
    alt: 'Rear shell at left, center, and right positions.',
    caption: 'Final shell validation and capture pending.',
    placeholder: true,
    fit: 'contain',
    position: '50% 50%'
  }
};
