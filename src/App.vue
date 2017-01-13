<template>
<div id="main">
<topframe1></topframe1>
    <div class="container-fluid">
     <topframe2></topframe2>  
     <login></login>
     </div>
</div>
</template>

<script>
import Login from './components/login/Login'
import TopFrame1 from './components/main/TopFrame1'
import TopFrame2 from './components/main/TopFrame2'

export default {
  name: 'app',
  components: {
    'login': Login,
    'topframe1': TopFrame1,
    'topframe2': TopFrame2
//    'topframe3': TopFrame3
  },
  data () {
    return {
      profile: this.$store.state.profile
    }
  },
  computed: {
    showMain: function () {
      this.profile = this.$store.state.profile
      return this.profile
    },
    showLogin: function () {
      this.profile = this.$store.state.profile
      if (this.profile !== '') {
        return false
      } else {
        return true
      }
    }
  }
}

</script>
