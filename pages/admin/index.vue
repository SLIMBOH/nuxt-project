<template>
  <div class="admin-page">
    <section class="new-post">
      <app-button @click="$router.push('admin/new-post')">Create Post</app-button>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <post-list isAdmin></post-list>
    </section>
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList.vue';
import AppButton from '@/components/ui/AppButton.vue';

export default {
  layout: 'admin',
  emits: [],
  components: {
    'post-list': PostList,
    'app-button': AppButton,
  },
  props: [],
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>

.admin-page {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
}

.new-post {
  text-align: center;
  border-bottom: 2px solid lime;
  padding-bottom: 20px;
}

.existing-posts h1 {
  padding-top: 50px;
  text-align: center;
}

</style>