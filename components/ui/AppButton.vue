<template>
  <button
    class="button"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"><slot /></button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>


<style scoped>
.button {
  box-shadow: 1px 1px 2px black;
  border-radius: 5px;
  font: inherit;
  background-color: black;
  box-shadow: 1px 1px 3px white;
  color: lime;
  padding: 5px;
  cursor: pointer;
  border: 2px solid lime;
}

.button:hover,
.button:active {
  background-color: white;
  border: 2px solid black;
  color: black;
}

.inverted {
  background-color: lime;
  color: black;
  border: 2px solid black;
}

.inverted:hover,
.inverted:active {
  color: white;
  background-color: black;
  border: 2px solid white;
}

.cancel {
  background-color: crimson;
  color: black;
  border: 2px solid black;
}

.cancel:hover,
.cancel:active {
  background-color: black;
  border: 2px solid crimson;
  color: crimson;
}
</style>
