<template>
  <div class="container">
    <div class="form-group">
      <input type="text" class="form-control" id="displayName" placeholder="Display name" v-model="displayName">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" id="username" placeholder="Username" v-model="username">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" id="email" placeholder="Email" v-model="email">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" id="password2" placeholder="Confirm password" v-model="password2">
    </div>
    <button class="btn btn-success" @click="registerUser">Register</button>
  </div>
</template>

<style scoped>
.btn-github {
  border: 0;
  background: #444;
  color: white;
}
.btn-github:hover {
  background: #2B2B2B;
  color: white;
}
</style>

<script>
export default {
  name: 'Register',
  data() {
    return {
      displayName: '',
      username: '',
      email: '',
      password: '',
      password2: ''
    };
  },
  methods: {
    registerUser(displayName,
                 username,
                 email,
                 password,
                 password2) {
      const newUser = {
        displayName: displayName,
        username: username,
        email: email,
        password: password,
        password2: password2
      }
      this.$store.dispatch('register', newUser)
    }
  }
}
</script>
