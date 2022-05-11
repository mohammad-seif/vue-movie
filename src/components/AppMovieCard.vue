<template>
  <div class="movie-card">
    <div class="movie-card-image">
      <img src="" alt="">
    </div>
    <div class="movie-card-info">
      <h1 class="title">Title</h1>
      <div class="date">Date</div>
      <div class="genre">Genre</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {}
})
</script>


<style scoped>
.movie-card {
  width: 33%;
  height: 195px;
  border-radius: 6px;
  background: #F1F1F1;
  border: solid 1px rgba(196, 196, 196, 1);
  display: flex;
  flex-flow: nowrap row;
  margin-bottom: 35px;
}
.movie-card-image {
  flex: .4;
  background: yellow;
}
.title {
  font-size: 16px;
  font-weight: 700
}
.genre,
.date {
  font-size: 12px;
  font-weight: 400
}
.movie-card-info {
  flex: .6;
  background: red;
  display: flex;
  flex-flow: nowrap column;
  justify-content: space-around;
  padding: 16px 0 0 11px;
}
</style>
