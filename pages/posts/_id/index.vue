<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on {{ loadedPost.updatedDate }}</div>
        <div class="post-detail">Writtern by {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a href="mailto:feedback@my-awesome-domain.com"
          >feedback@my-awesome-domain.com</a
        >
        .
      </p>
    </section>
  </div>
</template>

<script>
export default {
  emits: [],
  components: {},
  props: [],
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: '1',
          title: "First Post (ID: " + context.route.params.id + ")",
          previewText: "This is my first post!",
          author: 'Hao Su',
          updatedDate: new Date(),
          content: "Some dummy text which is definitely not the preview text, through!",
          thumbnailLink: "images/image7@2x.png",
        },
      });
    }, 1000);
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.single-post-page {
  margin: 50px auto;
  max-width: 1024px;
  padding: 40px 40px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px 0;
  box-sizing: border-box;
  border-bottom: 3px solid lime;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: orange;
  margin: 0 10px;
}

.post-feedback a {
  color: lightseagreen;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: aquamarine;
}
</style>