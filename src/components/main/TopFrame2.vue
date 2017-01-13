<!-- Navbar starts -->
<template>
<nav class="navbar navbar-default"  v-show="showNow">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-navbar" aria-expanded="false">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
  </div>

  <!-- Collect the nav links, forms, and other content for toggling -->
  <div class="collapse navbar-collapse" id="collapse-navbar"  v-show="showNow">
    <ul class="nav navbar-nav">
      <li>
        <a href="index.html"><i class="icon-blur_on"></i>Dashboard</a>
      </li>
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="icon-business_center"></i> Pages <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li>
            <router-link to="profile">Profile</router-link>
          </li>
          <li>
            <a href='tasks.html'>Tasks</a>
          </li>
          <li>
            <a href="calendar.html">Calendar</a>
          </li>
          <li>
            <a href='invoice.html'>Invoice</a>
          </li>
          <li>
            <a href="pricing.html">Pricing</a>
          </li>
          <li>
            <a href='blog.html'>Blog</a>
          </li>
          <li>
            <a href="gallery.html">Gallery</a>
          </li>
          <li>
            <a href='default.html'>Default Layout</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="widgets.html"><i class="icon-widgets"></i>Widgets</a>
      </li>
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="icon-terrain"></i>Graphs <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li>
            <a href='c3-graphs.html'>C3 Graphs</a>
          </li>
          <li>
            <a href='maps.html'>Vector Maps</a>
          </li>
        </ul>
      </li>
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="icon-subtitles"></i>Forms <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li>
            <a href='form-inputs.html'>Form Inputs</a>
          </li>
          <li>
            <a href="validations.html">Form Validations</a>
          </li>
          <li>
            <a href="treeview.html">Tree View</a>
          </li>
          <li>
            <a href="colorpicker.html">Colorpicker</a>
          </li>
          <li>
            <a href='editor.html'>WYSIWYG Editor</a>
          </li>
        </ul>
      </li>
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="icon-palette2"></i>UI Elements <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li>
            <a href='buttons.html'>Buttons</a>
          </li>
          <li>
            <a href='badges.html'>Badges</a>
          </li>
          <li>
            <a href="loading.html">Loading</a>
          </li>
          <li>
            <a href='components.html'>Components</a>
          </li>
          <li>
            <a href='modals.html'>Modals</a>
          </li>
          <li>
            <a href='progressbars.html'>Progress Bars</a>
          </li>
          <li>
            <a href='notifications.html'>Notifications</a>
          </li>
          <li>
            <a href='icons.html'>Icons</a>
          </li>
          <li>
            <a href='typography.html'>Typography</a>
          </li>
        </ul>
      </li>
      <li class="dropdown active">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="icon-view_week"></i>Tables <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li>
            <a href='tables.html'>Tables</a>
          </li>
          <li>
            <a href="data-tables.html">Data Tables</a>
          </li>
        </ul>
      </li>
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="icon-add_alert"></i>Error <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li>
            <a href='login.html'>Login</a>
          </li>
          <li>
            <a href='signup.html'>SignUp</a>
          </li>
          <li>
            <a href='lock-screen.html'>Lock Screen</a>
          </li>
          <li>
            <a href='forgot-pwd.html'>Forgot Password</a>
          </li>
          <li>
            <a href='error.html'>Page Not Found</a>
          </li>
          <li>
            <a href='maintenance.html'>Maintenance</a>
          </li>
          <li>
            <a href='coming-soon.html'>Coming Soon</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
</template>
<!-- Navbar ends -->
<script>
export default {
  name: 'topframe2',
  data () {
    return {
      profile: this.$store.state.profile
    }
  },
  computed: {
    showNow: function () {
      console.log(this.profile)
      this.profile = this.$store.state.profile
      return this.profile
    }
  }
}
</script>
