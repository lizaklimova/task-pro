const ENDPOINTS = Object.freeze({
  auth: {
    register: 'auth/register',
    login: 'auth/login',
    logout: 'auth/logout',
  },
  users: {
    current: 'users/current',
  },
  backgrounds: '/api/backgrounds',
  boards: {
    allBoards: 'api/boards',
    oneBoard: boardId => `api/boards/${boardId}`,
  },
  columns: {
    allColumns: 'api/columns',
    oneColumn: columnId => `api/columns/${columnId}`,
  },
  cards: {
    allCards: 'api/cards',
    oneCard: cardId => `api/cards/${cardId}`,
  },
});

export default ENDPOINTS;
