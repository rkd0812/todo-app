import boardList from '../data/data.json'

const actions = {
  LOGIN({ commit }, { email, password }) {
    console.log(`email : ${email} : password: ${password}`)
    commit('LOGIN', { accessToken: 'dsfakljasdlkjasdflkj'})
  },
  FETCH_BOARD_LIST({ commit }) {
    commit('SET_BOARD_LIST', boardList)
  },
  FETCH_BOARD({ commit }, id) {
    let item;
    boardList.forEach( e => {
      if(e.id === id) item = e;
    });
    commit('SET_BOARD', { item });
  },
  ADD_BOARD (_, title) {
    boardList.push({id: 99, title: title, bgColor: 'rgb(0, 121, 191)'})
  },
  UPDATE_BOARD (_, { id, title, bgColor}) {
    //TODO: Backend 작업시 수정
    console.log(id);
    console.log(title);
    console.log(bgColor);
  },
  DELETE_BOARD(_, id) {
    console.log(id);
  },
  ADD_LIST(_, { title, boardId, pos }) {
    console.log({ title, boardId, pos });
  },
  UPDATE_LIST(_, { id, pos, title}) {
    console.log({ id, pos, title});
  },
  DELETE_LIST(_, { id, pos, title }) {
    console.log({ id, pos, title});
  },
  FETCH_CARD ({ commit }, id) {
    let data;
    boardList.forEach(e => {
      e.lists.forEach( list =>  {
        list.cards.forEach( card => {
          if (card.id === id) data = card
        })
      })
    })
    commit('SET_CARD', data);
  },
  ADD_CARD(_, { title, pos, listId }) {
    console.log({ title, pos, listId });
  },
  UPDATE_CARD(_, { id, pos, title, description, listId }) {
    console.log({ id, pos, title, description, listId });
  },
  DELETE_CARD(_, id) {
    console.log(id);
  }
}

export default actions