<template>
  <div class="flex h-screen items-center justify-center">
    <form ref="loginform" @submit.prevent="userLogin()" class="w-1/4 mx-auto p-4">
      <h1 class="font-semibold mb-2 text-xl">
        Login
      </h1>
      <div class="mb-4">
        <label for="email" class="block mb-1 text-sm">Email</label>
        <input
          type="email"
          v-model="login.email"
          class="w-full border rounded px-3 py-2"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block mb-1 text-sm">Password</label>
        <input
          type="password"
         v-model="login.password"
          class="w-full border rounded px-3 py-2"
        />
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-white font-semibold py-2 px-10 w-full rounded"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
     async userLogin() {
      try 
      {
        this.$auth.loginWith('local', { data: this.login })
        this.$router.push('/')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>