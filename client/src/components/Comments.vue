<script setup>
import Comment from "./Comment.vue";
import { socket } from "../socket.js";
import { ref } from "vue";

let comments = ref([]);
let commentLimit = ref(3);

fetch("http://localhost:5000/comments", {
  method: "get",
  headers: { "Content-type": "application/json" },
})
  .then((res) => res.json())
  .then((data) => {
    comments.value = data;
  });

socket.on("newComment", (data) => {
  comments.value = [data, ...comments.value];
});
</script>
<template>
  <div>
    <TransitionGroup name="list">
      <Comment
        v-for="comment in comments.slice(0, commentLimit)"
        :key="comment.id"
        :data="comment"
    /></TransitionGroup>

    <button
      class="btn"
      v-if="commentLimit < comments.length"
      @click="commentLimit += 3"
    >
      Показать еще отзывы
    </button>
  </div>
</template>
