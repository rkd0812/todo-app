<template>
  <div>
    <div class="home-title">ToDo Board</div>
    <div class="board-list">

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
  import { mapState, mapMutations } from 'vuex'
  import AddBoard from "../components/AddBoard";

  export default {
    name: "Home",
    components: {AddBoard},
    computed: {
      ...mapState({
        isAddBoard: 'isAddBoard',
      })
    },
    methods: {
      ...mapMutations([
        'SET_IS_ADD_BOARD',
      ]),
      onClickCreateBoard() {
        this.SET_IS_ADD_BOARD(true)
      }
    }
  }
</script>

<style scoped>

</style>