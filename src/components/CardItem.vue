<template>
  <div class="card-item" :data-card-id="card.id" :data-card-pos="card.pos">
    <router-link :to="`/board/${boardId}/card/${card.id}`">
      <div>{{ card.title }}</div>
      <div class="card-item-meta" v-if="card.description">&equiv;</div>
    </router-link>
    <a class="delete-card-btn" href="" @click.prevent="onClickDelete">&times;</a>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: "CardItem",
    props: [
      'card',
      'boardId',
    ],
    methods: {
      ...mapActions([
        'DELETE_CARD',
      ]),
      onClickDelete() {
        if(!window.confirm('Delte this card?')) return
        this.DELETE_CARD(this.card.id)
      }
    }
  }
</script>

<style scoped>

</style>