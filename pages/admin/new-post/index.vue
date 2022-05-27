<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <h1>NEW POST</h1>
      <admin-form @submit="createPost"></admin-form>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import AdminPostForm from "@/components/admin/AdminPostForm.vue";

export default {
  layout: 'admin',
  emits: [],
  components: {
    'admin-form': AdminPostForm,
  },
  props: [],
  watch: {},
  computed: {},
  methods: {
    createPost(editedPost) {
      axios.post('https://vue-http-demo-6ee07-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', {
        authorId: '1',
        author: editedPost.author,
        title: editedPost.title,
        content: editedPost.content,
        thumbnail: editedPost.thumbnail
      }).then(result => {
        console.log(result);
      }).catch(
        e => console.log(e)
      );
    }
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.admin-new-post-page {
  margin: 0 auto;
  width: 1024px;
  background-color: rgba(0, 0, 0, 0.7);
  padding-top: 5px;
  padding-bottom: 20px;
}

.new-post-form {
  margin: 40px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>