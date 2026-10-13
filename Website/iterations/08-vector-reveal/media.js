// Sources are relative to this iteration. Retain originals in project Assets/.
// Crossfade the complete 3840 x 2160 sources with no website color treatment or masks.
window.GHOST_MEDIA = {
  hero: {
    src: 'assets/ghost-assembly-full.png',
    lightSrc: 'assets/ghost-assembly-light.png',
    alt: 'Front view of the assembled Ghost with four white spikes surrounding its illuminated blue diamond and circular center.',
    caption: 'Real assembly · illuminated front view.',
    placeholder: false,
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
