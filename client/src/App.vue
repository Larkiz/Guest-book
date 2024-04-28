<script setup>
import { ref } from "vue";
import Comments from "./components/Comments.vue";
import NewCommentForm from "./components/NewCommentForm.vue";
const show = ref(false);

function setStatusForm(status) {
  show.value = status;
}
</script>

<template>
  <div class="root">
    <div>
      <NewCommentForm v-if="show === true" :setStatusForm="setStatusForm" />
      <button
        class="submit-btn"
        v-else-if="show === false"
        @click="setStatusForm(true)"
      >
        Напишите свой отзыв
      </button>
      <p class="submited-title" v-else-if="show == 'submited'">
        Спасибо за ваш отзыв
      </p>
    </div>

    <Comments />
  </div>
</template>
