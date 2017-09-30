<template>
  <div class="container" v-if="this.$store.state.user.displayName">
    <h4>Welcome {{this.$store.state.user.displayName}}! What's happening?</h4>
    <br>
    <div class="form-group">
      <input type="text" class="form-control" id="title" placeholder="Title">
    </div>
    <div class="form-group">
      <textarea class="form-control" id="body" rows="5" placeholder="Write your thoughts here...">
      </textarea>
    </div>
    <button class="btn btn-primary" @click="addPost()">Post!</button>
  </div>
  <div v-else>
    <router-link to="/login"><button class="btn btn-primary">Login!</button></router-link>
  </div>
</template>

<script>
export default {
  // import { mapGetters } from 'vuex';

  methods: {
    addPost() {
      this.$store.dispatch('addPost', this.$store.state.posts)
    }
  },
  mounted() {
    this.$store.dispatch('getPosts')
    this.$store.dispatch('getUser')
  },
}
</script>
