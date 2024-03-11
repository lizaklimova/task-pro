export const CLOSE_KEY_CODE = 'Escape';

export const LABEL_ARR = [
  { id: 0, priority: 'low', color: 'blue' },
  { id: 1, priority: 'medium', color: 'pink' },
  { id: 2, priority: 'high', color: 'green' },
  { id: 3, priority: 'without priority', color: 'gray' },
];

export const ICONS_ARRAY = [
  { id: 0, name: 'icon-board-fourCircles-1' },
  { id: 1, name: 'icon-board-star-2' },
  { id: 2, name: 'icon-board-loading-3' },
  { id: 3, name: 'icon-board-puzzle-4' },
  { id: 4, name: 'icon-board-box-5' },
  { id: 5, name: 'icon-board-lightning-6' },
  { id: 6, name: 'icon-board-colors-7' },
  { id: 7, name: 'icon-board-hexagon-8' },
];

export const BACKDROP_TRANSITION = {
  initial: { opacity: 0, transition: { type: 'spring' } },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};

export const MODAL_TRANSITION = {
  initial: {
    y: '-100vh',
    transition: { type: 'spring' },
  },
  isOpen: { y: '0' },
  exit: {
    top: '100vh',
    transition: { duration: 5 },
  },
};

export const TOASTER_CONFIG = { className: 'themed_toaster', duration: 1500 };

export const PROGRESS_BAR_COLORS = [
  '#dddddd9b',
  '#ff1900',
  '#f6b44d',
  '#99dab2',
  '#008d52',
];

export const DEFAULT_BACKGROUND_ID = '65e476ee9e0727c033dddb93';

export const MAX_DESCR_LENGTH = 80;
