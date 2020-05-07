const mutations = {
  LOGIN(state, { accessToken }) {
    if (!accessToken) return
    state.accessToken = accessToken
    localStorage.accessToken = accessToken;
  }
}

export default mutations