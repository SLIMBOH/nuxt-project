<template>
  <div class="posts-page">
    <post-list :posts="loadedPosts"></post-list>
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList.vue";

export default {
  emits: [],
  components: {
    "post-list": PostList,
  },
  props: [],
  data() {
    return {};
  },
  watch: {},
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
  methods: {},
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts);
  },
  mounted() {},
};
</script>
<style scoped>

.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>