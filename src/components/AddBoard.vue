<template>
  <modal>
    <div slot="header">
      <h2>
        Create new board
        <a href="" class="modal-default-button"
           @click.prevent=""></a>
      </h2>
    </div>
    <div slot="body">
      <form id="add-board-form"
            @submit.prevent="">
        <input class="form-control" type="text" v-model="inputBoardTitle" ref="inputBoardTitle">
      </form>
    </div>
    <div slot="footer">
      <button class="btn"
              :class="{ 'btn-success': isValidInput }"
              type="submit"
              form="add-board-form"
              :disabled="!isValidInput">
        Create Board
      </button>
    </div>
  </modal>
</template>

<script>
  import Modal from "./Modal";

  export default {
    name: "AddBoard",
    components: {
      Modal,
    },
    data() {
      return {
        inputBoardTitle: '',
        isValidInput: false,
      }
    },
    methods: {
      onSubmitCreateBoard() {

      }
    }
  }
</script>

<style scoped>

</style>