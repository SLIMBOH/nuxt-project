<template>
  <div>
    <!-- <the-header @sidenavToggle="displaySidenav = !displaySidenav">
    </the-header>
    <the-sidenav :show="displaySidenav"
    @close="displaySidenav = false">

    </the-sidenav> -->
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-weight: bolder;
  background: url("~/assets/backgroundImages/matrix.png");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}
</style>
