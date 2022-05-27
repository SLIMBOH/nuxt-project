<template>
  <div class="error-page">
    <h1>Oops, something went wrong!</h1>
    <p>Back to <a href="/">safety</a>!</p>
  </div>
</template>

<style scoped>
.error-page {
  max-width: 1024px;
  padding: 30px 50px;
  margin: 100px auto;
  text-align: center;
  font-size: 1.3rem;
  background-color: rgba(220, 20, 60, 0.745);
}

.error-page a {
  font-size: 1.5rem;
  text-decoration: none;
  color: limegreen;
}

.error-page a:hover,
.error-page a:active {
  color: lime;
}
</style>
