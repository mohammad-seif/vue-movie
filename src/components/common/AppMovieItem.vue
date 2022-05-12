<template>
  <div class="movie-item-card">
    <div class="movie-item-image">
      <img src="" alt="">
    </div>
    <div class="movie-item-info">
      <div
        class="movie-item-info-list"
        v-for="(item, index) in 10"
        :key="index"
      >
        <div class="key">
          {{index}}
        </div>
        <div class="value">
          {{index + 1}}
        </div>
      </div>
    </div>
  </div>
  <div class="movie-item-desc">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus, accusantium alias, commodi doloribus eius eligendi ex ipsum laboriosam magnam modi, mollitia natus nihil officia quis similique sunt totam voluptatem!
  </div>
  <div class="movie-item-credit">
    <h1 class="movie-item-credit-title">
      Credit:
    </h1>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aspernatur at dolorum earum est fugit inventore ipsa, iusto, libero officiis, praesentium provident quae quibusdam repellendus sit tempore ullam velit.
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
})
</script>


<style scoped>
li {
  text-decoration: none;
  list-style: none;
}
.movie-item-info-list .key {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
}
.movie-item-info-list .value {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
.movie-item-info-list {
  display: flex;
  justify-content: space-between;
  padding: 18px;
}
.movie-item-card {
  width: 100%;
  display: flex;
}
.movie-item-image {
  flex: .3;
  background: red;
}
.movie-item-info {
  flex: .7;
  background: green;
}
.movie-item-desc {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin-top: 53px;
}
.movie-item-credit {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}
.movie-item-credit-title {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-top: 80px;
}
</style>
