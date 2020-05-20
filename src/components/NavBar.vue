<template>
  <nav class="header">
    <div class="header-logo">
      <router-link to="/">ToDo</router-link>
    </div>
    <div class="header-auth">
      <a v-if="isAuthenticated" href="" @click.prevent="logout">Logout</a>
      <router-link v-else to="/login">Login</router-link>
    </div>
  </nav>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: "NavBar",
    computed: {
      ...mapState({
        navbarColor: 'navbarColor',
        bodyColor: 'bodyColor'
      }),
      isAuthenticated() {
        return this.$store.getters.isAuthenticated
      }
    },
    watch: {
      bodyColor: 'updateTheme',
    },
    mounted() {
      this.updateTheme();
    },
    methods: {
      updateTheme() {
        this.$el.style.backgroundColor = this.navbarColor
        const body = document.querySelector('body')
        if (!body) return
        body.style.backgroundColor = this.backgroundColor
      },
      logout() {
        this.$store.commit('LOGOUT')
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>

</style>