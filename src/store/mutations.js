const mutations = {
  LOGIN(state, { accessToken }) {
    if (!accessToken) return
    state.accessToken = accessToken
    localStorage.accessToken = accessToken;
  },
  LOGOUT(state) {
    state.accessToken = null
    delete localStorage.accessToken
  },
  SET_IS_ADD_BOARD (state, toggle) {
    state.isAddBoard = toggle
  }
}

export default mutations