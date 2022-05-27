<template>
  <div class="admin-post-page">
    <section class="update-form">
      <h1>UPDATE POST</h1>
      <admin-form :post="loadedPost"></admin-form>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm.vue";

export default {
  layout: "admin",
  emits: [],
  components: {
    "admin-form": AdminPostForm,
  },
  props: [],
  data() {
    return {
      loadedPost: {
        author: "Hao",
        title: "Hao's title",
        content: "asdgadsufhiuadshfiouahdifg",
        thumbnailLink: "images/image7@2x.png",
      },
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.admin-post-page {
  margin: 0 auto;
  width: 1024px;
  background-color: rgba(0, 0, 0, 0.7);
  padding-top: 5px;
  padding-bottom: 20px;
}

.update-form {
  margin: 40px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>