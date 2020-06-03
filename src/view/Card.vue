<template>
  <modal class="modal-card">
    <div slot="header" class="modal-card-header">
      <div class="modal-card-header-title">
        <input class="form-control"
               type="text"
               :value="card.title"
               :readonly="!toggleTitle"
               @click.prevent="toggleTitle = !toggleTitle"
               @blur="onBlurTitle"
               ref="inputTitle">
      </div>
      <a class="modal-close-btn" href="" @click.prevent="onClickClose"></a>
    </div>
    <div slot="body">
      <h3>Description</h3>
      <textarea class="form-control"
                cols="30"
                rows="3"
                placeholder="Add a more detailed description..."
                :readonly="!toggleDesc"
                @click.prevent="toggleDesc = !toggleDesc"
                @blur="onBlurInputDesc"
                ref="inputDesc"
                v-model="card.description"></textarea>
    </div>
  </modal>
</template>

<script>
  import Modal from "../components/Modal";
  import { mapState, mapActions } from 'vuex'

  export default {
    name: "Card",
    components: {Modal},
    props: [ 'boardId'],
    data() {
      return {
        toggleTitle: false,
        toggleDesc: false
      }
    },
    computed: {
      ...mapState({
        card: 'card'
      })
    },
    created() {
      this.FETCH_CARD(this.$router.param.cid)
    },
    methods: {
      ...mapActions([
        'FETCH_CARD', 'UPDATE_CARD'
      ]),
      onClickClose() {
        this.$router.push(`/board/${this.boardId}`)
      },
      onBlurTitle() {
        this.toggleTitle = !this.toggleTitle
        const title = this.$refs.inputTitle.value.trim()
        if (!title) return
        this.UPDATE_CARD({id: this.card.id, title})
      },
      onBlurInputDesc() {
        this.toggleDesc = !this.toggleDesc
        const description = this.$refs.inputDesc.value.trim()
        if (!description) return
        this.UPDATE_CARD({id: this.card.id, description})
      }
    }
  }
</script>

<style scoped>

</style>