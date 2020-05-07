<template>
  <nav class="header">
    <div class="header-logo">
      <router-link to="/">ToDo</router-link>
    </div>
    <div class="header-auth">
      <router-link to="/login">Login</router-link>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>

</style>