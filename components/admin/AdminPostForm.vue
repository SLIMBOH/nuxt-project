<template>
  <form @submit.prevent="submitForm">
    <app-input v-model="editedPost.author">Author Name</app-input>

    <app-input v-model="editedPost.title">Title</app-input>

    <app-input v-model="editedPost.thumbnail">Thumbnail Link</app-input>

    <app-input control-type="textarea" v-model="editedPost.content"
      >Content</app-input
    >

    <app-input control-type="textarea" v-model="editedPost.previewText"
      >Preview Text</app-input
    >

    <app-button type="submit">Save</app-button>

    <app-button
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</app-button
    >
  </form>
</template>

<script>
import AppButton from "~/components/ui/AppButton.vue";
import AppControllInput from "~/components/ui/AppControlInput.vue";

export default {
  emits: [],
  components: {
    "app-button": AppButton,
    "app-input": AppControllInput,
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      isFormValid: true,
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            previewText: "",
            content: "",
            thumbnail: "",
          },
    };
  },
  watch: {},
  computed: {},
  methods: {
    validation() {},
    onCancel() {
      this.$router.push("/admin");
    },
    clearAll() {
      this.editedPost.author = "";
      this.editedPost.title = "";
      this.editedPost.content = "";
      this.editedPost.thumbnail = "";
    },
    submitForm() {
      this.validation();
      if (this.isFormValid) {
        this.$emit("submit", this.editedPost);
      }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>