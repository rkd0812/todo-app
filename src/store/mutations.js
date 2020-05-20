const mutations = {
  LOGIN(state, { accessToken }) {
    if (!accessToken) return;
    state.accessToken = accessToken;
    localStorage.accessToken = accessToken;
  },
  LOGOUT(state) {
    state.accessToken = null
    delete localStorage.accessToken;
  },
  SET_BOARD_LIST(state, list) {
    state.boardList = list.map(board => board)
  },
  SET_BOARD(state, { item }) {
    state.board = item;
  },
  SET_IS_ADD_BOARD (state, toggle) {
    state.isAddBoard = toggle;
  },
  SET_CARD(state, card) {
    state.card = card;
  },
  SET_IS_SHOW_BOARD_MENU(state, toggle) {
    state.isShowBoardMenu = toggle;
  },
  SET_THEME (state, color) {
    state.bodyColor = color;
    state.navbarColor = color ? 'rgba(0,0,0,0.15)': '#026aa7';
  }

}

export default mutations