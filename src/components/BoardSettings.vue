<template>
  <div class="board-menu">
    <div class="board-menu-header">
      <div class="header-title">Menu</div>
      <a class="header-close-btn" href="" @click.prevent="onClickClose">&times;</a>
    </div>
    <ul class="menu-list">
      <li>
        <a href="" @click.prevent="onClickDeleteBoard">Delete Board</a>
      </li>
      <li>
        Change Background
      </li>
      <div class="color-picker">
        <a href="" data-value="rgb(0, 121, 191)" @click.prevent="onClickChangeColor"></a>
        <a href="" data-value="rgb(210, 144, 52)" @click.prevent="onClickChangeColor"></a>
        <a href="" data-value="rgb(81, 152, 57)" @click.prevent="onClickChangeColor"></a>
        <a href="" data-value="rgb(176, 70, 50)" @click.prevent="onClickChangeColor"></a>
      </div>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'

  export default {
    name: "BoardSettings.vue",
    computed: {
      ...mapState({
        board: 'board'
      })
    },
    mounted() {
      Array.from(this.$el.querySelectorAll('.color-picker a')).forEach(el => {
        el.style.backgroundColor = el.dataset.value
      })
    },
    methods: {
      ...mapMutations([
        'SET_IS_SHOW_BOARD_MENU'
      ]),
      ...mapActions([
        'DELETE_BOARD',
        'UPDATE_BOARD'
      ]),
      onClickClose() {
        this.SET_IS_SHOW_BOARD_MENU(false)
      },
      onClickDeleteBoard() {
        if (!confirm(`Delete ${this.board.title} Board?`)) return
        this.DELETE_BOARD(this.board.id)
            .then(() => this.$router.push('/'))
      },
      onClickChangeColor(el) {
        const id = this.board.id
        const bgColor = el.target.dataset.value
        this.UPDATE_BOARD({ id, bgColor }).then(() => {
          document.querySelector('body').style.backgroundColor = this.board.bgColor
          document.querySelector('.header').style.backgroundColor = 'rgba(0,0,0,0.15)'
        })
      }
    }
  }
</script>

<style scoped>

</style>