export const CLOSE_KEY_CODE = 'Escape';
export const LABEL_ARR = [
  { id: 1, color: 'blue' },
  { id: 2, color: 'pink' },
  { id: 3, color: 'green' },
  { id: 4, color: 'gray' },
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
    top: '-100vh',
    transition: { type: 'spring' },
  },
  isOpen: { top: '0' },
  exit: {
    top: '-100vh',
  },
};

export const TOASTER_CONFIG = { className: 'themed_toaster' };
