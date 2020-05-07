<template>
  <div class="login">
    <h2>Login to KGURU-TODO</h2>
    <form>
      <div>
        <label for="email">Email</label>
        <input
            class="form-control"
            type="text"
            id="email"
            name="email"
            autofocus
            placeholder="email"
            v-model="email"/>
      </div>
      <div>
        <label for="password">Password</label>
        <input
            class="form-control"
            type="password"
            id="password"
            v-model="password"/>
      </div>
      <button class="btn" :class="{'btn-success': !invalidForm}" type="submit" :disabled="invalidForm">Log In</button>
    </form>
    <p class="error" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        email: '',
        password: '',
        returnPath: '',
        error: '',
      }
    },
    computed: {
      invalidForm() {
        return !this.email || !this.password
      }
    }
  }
</script>

<style scoped>

</style>