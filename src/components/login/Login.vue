<template>
<div class="login-wrapper">
        <div class="login">
          <div class="login-header">
            <div class="logo">
              <img src="static/img/bluemoon-lg.png" alt="Bluemoon Admin Dashboard Logo"/>
            </div>
            <div v-if="profile">
            <h5>You signed in as {{profile.getEmail()}}.</h5>            
            </div>
            <div v-else>
            <h5>Login to access to your Bluemoon admin dashboard.</h5>
            </div>
          </div>
          <div class="login-body" v-if="profile">
          <router-link to="profile/profile">Launch </router-link>
            <button type="button" class="btn btn-success" @click="launchApp"> Launch Application</button>
          </div>
          <div class="login-body" v-else>
            <div class="form-group">
              <label for="emailID">Google Authentication</label>
            </div>
            <div class="form-group">
             <g-signin-button
              :params="googleSignInParams"
              @success="onSignInSuccess"
              @error="onSignInError">
              Sign in with Google
            </g-signin-button>
            </div>
          </div>
        </div>
             <router-view></router-view>
</div>
</template>
<script>
import Vue from 'vue'
import GSignInButton from 'vue-google-signin-button'

Vue.use(GSignInButton)
export default {
  name: 'login',
  data () {
    return {
      initButton: 'Sigin-in with Google',
      profile: '',
      googleSignInParams: {
        client_id: '390353700930-mg7mm9q4k7lmvr7h0a9kj1evit37c2q8.apps.googleusercontent.com'
      }
    }
  },
  methods: {
// When the user clicks sign-in this methods get called
    onSignInSuccess (googleUser) {
      this.profile = googleUser.getBasicProfile()
      this.$store.commit('addProfile', this.profile)
    },
// When user is ready to launchThe app this will get triggered
    launchApp () {
      if (this.$store.state.profile.getId()) {
       // this.$router.push('profile')
        this.$router.push({ path: 'profile' })
      } else {
        this.$router.push('home')
      }
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
}
</script>
<style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style> 