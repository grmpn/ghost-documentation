// Change source paths and captions here as final media arrives. Paths are relative
// to this iteration's index.html. Preserve the source masters in project Assets/.
window.GHOST_MEDIA = {
  hero: {
    src: 'assets/ghost-study.svg',
    alt: 'Illustrative layout placeholder: a faceted shell surrounding a cyan eye. This is not a photograph or an accurate CAD model of the build.',
    caption: 'Illustrative placeholder · replace with the powered-on hero photograph.',
    placeholder: true,
    fit: 'contain',
    position: '50% 50%'
  },
  demo: {
    src: null, // e.g. 'assets/ghost-demo.mp4'
    poster: null, // e.g. 'assets/ghost-demo-poster.jpg'
    captions: null, // optional WebVTT file
    caption: 'Final footage pending · 30–60 second portfolio cut after hardware validation.'
  },
  packaging: {
    src: null,
    alt: 'Exploded CAD view of the shell, mechanisms, servo housing, main board, and front lighting assembly.',
    caption: 'Exploded assembly / cutaway · final CAD visual pending.',
    placeholder: true,
    fit: 'contain',
    position: '50% 50%'
  },
  rear: {
    src: null,
    alt: 'Rear shell at left, center, and right positions.',
    caption: 'Rear-shell three-pose comparison · final validation and capture pending.',
    placeholder: true,
    fit: 'contain',
    position: '50% 50%'
  }
};
