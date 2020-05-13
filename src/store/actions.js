const actions = {
  LOGIN({ commit }, { email, password }) {
    console.log(`email : ${email} : password: ${password}`)
    commit('LOGIN', { accessToken: 'dsfakljasdlkjasdflkj'})
  }
}

export default actions