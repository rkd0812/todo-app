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
  export default {
    name: "NavBar",
    computed: {
      isAuthenticated() {
        return this.$store.getters.isAuthenticated
      }
    },
    methods: {
      logout() {
        this.$store.commit('LOGOUT')
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>

</style>