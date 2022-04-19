<template>
  <main>
    <div>
        <h1 class="text-uppercase text-center mt-3">Elenco dei post</h1>
        <div class="container">
            <div class="row">
                <!--Stampo in delle card tutti i post con un ciclo V-for-->
                <div class="col-4 py-2" v-for="post in posts" :key="post.id">
                    <Post
                    :title="post.title"
                    :content="post.content"
                    :slug="post.slug"
                    :category="post.category"
                    :tags="post.tags"
                    :author="post.author"
                    />
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <nav>
                <ul class="pagination ">
                    <li class="page-item" :class="(currentPage == 1)? 'disabled':''"><span class="page-link" @click="getPosts(currentPage - 1)">Previous</span></li>
                    <li class="page-item" :class="(currentPage == lastPage)? 'disabled':''"><span class="page-link" @click="getPosts(currentPage + 1)">Next</span></li>
                </ul>
            </nav>
        </div>
    </div>
  </main>
</template>

<script>
import Post from '../components/Post'
export default {
  name: "Posts",
  components: {
        Post
  },
  data() {
    return {
      posts: [],
      currentPage: 1,
      lastPage: null
    };
  },
  methods: {
    getPosts(apiPage) {
      axios.get("/api/posts", {
          'params': {
              'page': apiPage
          }
      })
      .then((response) => {
        this.currentPage = response.data.results.current_page;
        this.posts = response.data.results.data;
        this.lastPage = response.data.results.last_page;
      });
    },
  },
  created() {
      this.getPosts(this.currentPage);
  },
};
</script>

<style>
</style>