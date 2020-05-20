<template>
  <div>
    <div class="home-title">ToDo Board</div>
    <div class="board-list">
      <div class="board-item" v-for="(board, i) in boardList" :key="i" :data-bgcolor="board.bgColor">
        <router-link :to="`/board/${board.id}`">
          <div class="board-item-title">{{ board.title }}</div>
        </router-link>
      </div>
    </div>
    <div class="board-item">
      <a class="new-board-btn" href="" @click.prevent="onClickCreateBoard">
        Create new board...
      </a>
    </div>
    <AddBoard v-if="isAddBoard" />
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  import AddBoard from "../components/AddBoard";

  export default {
    name: "Home",
    components: {AddBoard},
    computed: {
      ...mapState({
        isAddBoard: 'isAddBoard',
        boardList: 'boardList',
      })
    },
    created() {
      this.FETCH_BOARD_LIST();
      this.SET_THEME();
    },
    mounted() {
      Array.from(document.querySelectorAll('.board-item')).forEach( el => {{
        el.style.backgroundColor = el.dataset.bgcolor || '#ddd'
      }})

    },
    methods: {
      ...mapMutations([
        'SET_IS_ADD_BOARD',
        'SET_THEME',
      ]),
      ...mapActions([
        'FETCH_BOARD_LIST',
      ]),
      onClickCreateBoard() {
        this.SET_IS_ADD_BOARD(true)
      }
    }
  }
</script>

<style scoped>

</style>