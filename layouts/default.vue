<template>
  <div>
    <the-header class="fix" @sidenavToggle="displaySidenav = !displaySidenav">
    </the-header>
    <the-sidenav :show="displaySidenav"
    @close="displaySidenav = false">

    </the-sidenav>
    <nuxt />
  </div>
</template>

<script>
import TheHeader from "@/components/navigation/TheHeader.vue";
import TheSidenav from "@/components/navigation/TheSidenav.vue";

export default {
  components: {
    'the-header': TheHeader,
    'the-sidenav': TheSidenav,
  },
  data() {
    return {
      displaySidenav: false,
    };
  }
};
</script>

<style>
.fix {
  position: sticky;
  z-index: 1;
}

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
