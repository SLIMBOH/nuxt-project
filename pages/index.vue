<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <post-list :posts="loadedPosts"></post-list>
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList.vue";

export default {
  emits: [],
  components: {
    PostList: PostList,
  },
  props: [],
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: "1",
            title: "Musou Orochi Z",
            previewText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
            thumbnail: "image1@2x.png",
          },
          {
            id: "2",
            title: "Sanngoku Musou",
            previewText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
            thumbnail: "image2@2x.png",
          },
          {
            id: "3",
            title: "Senngoku Musou",
            previewText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
            thumbnail: "image3@2x.png",
          },
          {
            id: "4",
            title: "Musou Orochi 2 Ultimate",
            previewText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
            thumbnail: "image4@2x.png",
          },
          {
            id: "5",
            title: "Multi Raider",
            previewText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
            thumbnail: "image5@2x.png",
          },
          {
            id: "6",
            title: "Kaizoku Musou",
            previewText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
            thumbnail: "image6@2x.png",
          },
          {
            id: "7",
            title: "Berserker Musou",
            previewText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
            thumbnail: "image7@2x.png",
          },
          {
            id: "8",
            title: "Sanngoku Musou",
            previewText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
            thumbnail: "image8@2x.png",
          },
          {
            id: "9",
            title: "Senngoku Basara",
            previewText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
            thumbnail: "image9@2x.png",
          },
        ],
      });
    }, 1500);
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
.intro {
  height: 200px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
}

.intro h1 {
  text-align: center;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: lime;
  background-color: black;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px lime;
  box-sizing: border-box;
  border: 3px solid lime;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
