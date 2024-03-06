const ENDPOINTS = Object.freeze({
  auth: {
    register: 'auth/register',
    login: 'auth/login',
    logout: 'auth/logout',
  },
  users: {
    current: 'users/current', 
    theme: 'users/current/theme',
  },
  
  backgrounds: '/api/backgrounds',
  boards: {
    allBoards: 'api/boards',
    oneBoard: boardId => `api/boards/${boardId}`,
    boardFilter: boardId => `api/boards/${boardId}/filter`,
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
