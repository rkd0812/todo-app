<template>
  <div class="login">
    <h2>Login to KGURU-TODO</h2>
    <form @submit.prevent="onSubmit">
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
      <button class="btn" type="submit" :class="{'btn-success': !invalidForm}" :disabled="invalidForm">Log In</button>
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
    },
    created() {
      this.returnPath = this.$route.query.returnPath || '/'
    },
    methods: {
      onSubmit () {
        const { email, password } = this
        this.$store.dispatch('LOGIN', { email, password })
          .then(() => {
            this.$router.push(this.returnPath)
          })
          .catch(() => {
            //TODO: error
          })
      }
    }
  }
</script>

<style scoped>

</style>