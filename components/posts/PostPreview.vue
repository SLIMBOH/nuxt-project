<template>
  <nuxt-link :to="postLink" class="post-preview">
    <article>
      <div
        class="post-thumbnail"
        :style="{ backgroundImage: 'url(images/' + thumbnail + ')' }"
      ></div>
      <div class="post-content">
        <h1>{{ title }}</h1>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  emits: [],
  components: {},
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    previewText: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  watch: {},
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id;
    }
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.post-preview {
  margin: 30px 20px;
  border: 2px solid lime;
  box-shadow: 0 2px 2px lime;
  background-color: black;
  width: 70%;
}

p {
  text-align: center;
}

a {
  text-decoration: none;
  color: white;
}

@media (min-width: 850px) {
  .post-preview {
    width: 24%;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: white;
  color: black;
  transition-duration: 0.5s;
}
</style>