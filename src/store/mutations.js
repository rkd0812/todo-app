const mutations = {
  LOGIN(state, { accessToken }) {
    if (!accessToken) return
    state.accessToken = accessToken
    localStorage.accessToken = accessToken;
  },
  LOGOUT(state) {
    state.accessToken = null
    delete localStorage.accessToken
  }
}

export default mutations