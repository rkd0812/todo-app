<template>
  <div class="list" :data-list-id="list.id" :data-list-pos="list.pos">
    <div class="list-header">
      <input class="form-control input-title"
             v-if="isEditTitle"
             type="text"
             v-model="inputTitle"
             ref="inputTitle"
             @keyup.enter="onTitleSubmit"
             @blur="onTitleSubmit" />
      <div v-else class="list-header-title" @click="onClickTitle">{{ list.title }}</div>
      <a class="delete-list-btn" href="" @click.prevent="onDeleteList">&times;</a>
    </div>
    <div class="card-list" :data-list-id="list.id">
      <div v-show="!list.cards.length" class="empty-card-item"></div>
      <card-item v-for="card in list.cards" :key="`${list.id}-${card.pos}`"
                 :card="card" :boardId="list.boardId"></card-item>
    </div>
    <div v-if="isAddCard">
      <add-card :pos="lastCardPos" :listId="list.id" @close="isAddCard = false"></add-card>
    </div>
    <a v-else class="add-card-btn" href="" @click.prevent="isAddCard = true">
      &plus; Add a card...
    </a>

  </div>
</template>

<script>
  import CardItem from "./CardItem";
  import AddCard from "./AddCard";
  import { mapActions } from 'vuex'

  export default {
    name: "List",
    components: {
      CardItem,
      AddCard
    },
    props: [ 'list' ],
    data() {
      return {
        isAddCard: false,
        isEditTitle: false,
        inputTitle: '',
      }
    },
    created() {
      this.inputTitle = this.list.title
    },
    computed: {
      lastCardPos() {
        const lastCard = this.list.cards[this.list.card.length - 1]
        let pos = 65535
        if (lastCard) pos = lastCard.pos + pos
        return pos
      }
    },
    methods: {
      ...mapActions([
        'UPDATE_LIST',
        'DELETE_LIST'
      ]),
      onClickTitle() {
        this.isEditTitle = true
        this.$nextTick( () => this.$ref.inputTitle.focus())
      },
      onTitleSubmit() {
        this.inputTitle = this.inputTitle.trim()
        if (!this.inputTitle) return
        const id =  this.list.id
        const title = this.inputTitle

        if(title === this.list.title ) return this.isEditTitle = false
        this.UPDATE_LIST({ id, title })
            .then( () => (this.isEditTitle = false))
      },
      onDeleteList() {
        if (!confirm(`Delete ${this.list.title} list ?`)) return
        this.DELETE_LIST({ id: this.list.id })
      }
    }
  }
</script>

<style scoped>

</style>