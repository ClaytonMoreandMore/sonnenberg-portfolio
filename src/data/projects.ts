export interface Project {
  slug: string;
  num: string;
  title: string;
  sub: string;
  year: string;
  video: string;
  summary: string;
  steps: [string, string][];
  software: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: 'delorean', num: '01', title: 'DeLorean',
    sub: 'CG car integrated into live action footage', year: '2026', video: 'gUr7wS3ZM0E',
    summary: 'A CG DeLorean drives through my actual back alley, passing behind the fence posts and trash bins that are really there.',
    steps: [
      ['Plate', 'Shot the alley on a locked-off camera, late afternoon.'],
      ['Scene rebuild', 'Rebuilt the alley in Maya to scale so the car sits on the real ground.'],
      ['Lighting', 'Shadow-catcher ground plane, an artificial sun matched to the plate, and a proxy model of the pine tree outside so it casts real shadows on the car.'],
      ['Holdouts', 'Rotoscoped the fence posts and trash bins in Nuke so the car passes behind them.'],
      ['Comp', 'Colour-matched the render to the plate in Nuke.'],
      ['Finish', 'Sound, camera shake and motion blur in Premiere.'],
    ],
    software: ['Maya', 'Nuke', 'Premiere'],
  },
  {
    slug: 'ufo', num: '02', title: 'UFO',
    sub: 'CG elements altered to fit the live action environment', year: '2025', video: 'OEESXj5XVG0',
    summary: 'A CG element integrated into live-action footage, using the same pipeline as the DeLorean shot.',
    steps: [
      ['Plate', 'Live-action footage, locked off.'],
      ['Scene rebuild', 'Matched the ground and key geometry in Maya.'],
      ['Lighting', 'Shadow catcher and an artificial sun matched to the plate.'],
      ['Comp', 'Holdouts and colour match in Nuke.'],
      ['Finish', 'Sound, shake and motion blur in Premiere.'],
    ],
    software: ['Maya', 'Nuke', 'Premiere'],
  },
  {
    slug: 'pokeball', num: '03', title: 'Pok\u00e9ball',
    sub: 'A test of nailing real physics within an animation', year: '2026', video: 'lSvTkJ_39bg',
    summary: 'A CG ball shot finished in about a week, right before deadlines. The hardest part was painting my dog Lynk out of the plate.',
    steps: [
      ['Plate', 'Shot the plate. Lynk wandered in.'],
      ['Paint', 'Painted Lynk out of the plate. Most of the week went here.'],
      ['CG', 'Modelled, lit and rendered the ball in Maya.'],
      ['Comp', 'Shadow, contact and colour match in Nuke.'],
      ['Sound effects', 'Sound added in Premiere.'],
    ],
    software: ['Maya', 'Nuke', 'Premiere'],
  },
  {
    slug: 'spider-man', num: '04', title: 'Spider-Man',
    sub: 'Mixing live action footage with CG elements', year: '2026', video: '_R56Bh_6NmQ',
    summary: 'I integrated myself into a fully 3D modelled city and meshed myself with a digi double.',
    steps: [
      ['Green screen', 'Shot myself on green screen and keyed the footage in Nuke.'],
      ['Animation', 'Animated the digi double in Maya to mesh with my live-action performance.'],
      ['Scene building', 'Built the fully 3D modelled city in Maya.'],
      ['Lighting', 'Lit the city and digi double in Maya to sit with the keyed footage.'],
      ['Compositing', 'Combined the keyed plate, digi double and city renders in Nuke.'],
      ['Sound effects', 'Sound added in Premiere.'],
      ['Colour grading', 'Final colour grade in Premiere.'],
    ],
    software: ['Maya', 'Premiere Pro', 'Nuke', 'Photoshop'],
  },
];

export const REEL_ID = 'mlVbGVEO6SA';

export const YT_CHANNEL = 'https://www.youtube.com/@CH1L1D0GS/videos';

export const EDITS = [
  { title: 'Siren Head Stranded (Full Playthrough)', video: 'OTnCfQNOCTc' },
  { title: 'The Cursed Meal | Longplay', video: '8XJle5-KSyg' },
  { title: 'Sewer Call', video: 'Lq_3cE3w4CE' },
];

export const EMAIL = 'gabriel.sonnenberg007@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/gabriel-sonnenberg-72b687248/';
export const INSTAGRAM = 'https://www.instagram.com/chilidog_studios';
