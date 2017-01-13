<template>
<div id="header-portion">
  <header>
        <!-- Logo starts -->
        <a href="index.html" class="logo">
          <img src="static/img/logo.png" alt="Bluemoon Admin" />
        </a>
        <!-- Logo ends -->
        <!-- Header actions starts -->
        <ul id="header-actions" class="clearfix" v-show="showNow">
          <li class="list-box hidden-xs dropdown">
            <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">
              <i class="icon-warning2"></i>
            </a>
            <span class="info-label blue-bg">5</span>
            <ul class="dropdown-menu imp-notify">
              <li class="dropdown-header">You have 3 notifications</li>
              <li>
                <div class="icon">
                  <img src="static/img/thumbs/user4.png" alt="Bluemoon Admin">
                </div>
                <div class="details">
                  <strong class="text-danger">Wilson</strong>
                  <p>The best Dashboard design I have seen ever.</p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <img v-bind:src="image" alt="Bluemoon Admin">
                </div>
                <div class="details">
                  <strong class="text-success">John Smith</strong>
                  <p>Jhonny sent you a message.</p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <img src="static/img/thumbs/user11.png" alt="Bluemoon Admin">
                </div>
                <div class="details">
                  <strong class="text-info">Justin Mezzell</strong>
                  <p>Stella, Added you as a Friend.</p>
                </div>
              </li>
              <li class="dropdown-footer">See all the notifications</li>
            </ul>
          </li>
          <li class="list-box hidden-xs dropdown">
            <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">
              <i class="icon-archive2"></i>
            </a>
            <span class="info-label red-bg">3</span>
            <ul class="dropdown-menu stats-widget clearfix">
              <li>
                <h5 class="text-success">$37895</h5>
                <p>Revenue <span class="text-success">+2%</span></p>
                <div class="progress">
                  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                    <span class="sr-only">40% Complete (success)</span>
                  </div>
                </div>
              </li>
              <li>
                <h5 class="text-warning">47,892</h5>
                <p>Downloads <span class="text-warning">+39%</span></p>
                <div class="progress">
                  <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                    <span class="sr-only">40% Complete (warning)</span>
                  </div>
                </div>
              </li>
              <li>
                <h5 class="text-danger">28214</h5>
                <p>Uploads <span class="text-danger">-7%</span></p>
                <div class="progress">
                  <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                    <span class="sr-only">40% Complete (danger)</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="list-box user-admin dropdown">
            <div class="admin-details">
              <div class="name">{{name}}</div>
              <div class="designation">Current User</div>
            </div>
            <a id="drop4" href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">
              <i class="icon-account_circle"></i>
            </a>
            <ul class="dropdown-menu sm">
              <li class="dropdown-content">
                <a href="#"><i class="icon-warning2"></i>Update Password<br><span>Your password will expire in 7 days.</span></a>
                <a href="profile.html">Edit Profile</a>
                <a href="forgot-pwd.html">Change Password</a>
                <a href="styled-inputs.html">Settings</a>
                <a href="login.html">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      <!-- Header actions ends 
      <div class="custom-search hidden-sm hidden-xs">
        <input type="text" class="search-query" placeholder="Search here ...">
        <i class="icon-search3"></i>
      </div>
      -->
    </header>
  </div>
</template>  
<script>
export default {
  name: 'topframe1',
  data () {
    return {
      profile: '',
      name: '',
      image: ''
    }
  },
  computed: {
    showNow: function () {
      this.profile = this.$store.state.profile
      if (this.profile !== '') {
        this.name = this.profile.getName()
        this.image = this.profile.getImageUrl()
      }
      return this.profile
    }
  }
}
</script>
