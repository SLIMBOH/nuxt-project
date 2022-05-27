<template>
  <section class="post-list">
    <post-preview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :isAdmin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText"
    >
    </post-preview>
  </section>
</template>

<script>
import PostPreview from "@/components/posts/PostPreview.vue";

export default {
  emits: [],
  components: {
    "post-preview": PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    }
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
.post-list {
  margin: 50px auto;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>