<script setup>
import { reactive, ref } from "vue";
import Rating from "./Rating.vue";
import { socket } from "../socket.js";

const { setStatusForm } = defineProps(["setStatusForm"]);

const data = reactive({
  text: "",
  star: { kitchen: null, service: null, interior: null },
});

function submit(e) {
  e.preventDefault();
  if (
    data.star.kitchen !== null &&
    data.star.service !== null &&
    data.star.interior !== null
  ) {
    socket.emit("newComment", data);
    setStatusForm("submited");
  } else {
    alert("Укажите рейтинг!");
  }
}
</script>

<template>
  <form @submit="submit" action="submit">
    <div class="form">
      <div class="flex-space-between">
        <h2>Напишите отзыв:</h2>
        <img
          style="cursor: pointer"
          src="../assets/close.svg"
          @click="setStatusForm(false)"
        />
      </div>
      <textarea v-model="data.text" cols="70" rows="10"></textarea>
      <div class="rating-cont">
        <div class="flex-space-between">
          <p class="rating-title">Кухня:</p>
          <p class="rating-star">{{ data.star.kitchen || "Нет оценки" }}</p>
        </div>

        <Rating
          :name="'kitchen'"
          :setStar="(star) => (data.star.kitchen = star)"
          :star="data.star.kitchen"
        />
      </div>
      <div class="rating-cont">
        <div class="flex-space-between">
          <p class="rating-title">Сервис:</p>
          <p class="rating-star">{{ data.star.service || "Нет оценки" }}</p>
        </div>

        <Rating
          :name="'service'"
          :setStar="(star) => (data.star.service = star)"
          :star="data.star.service"
        />
      </div>
      <div class="rating-cont">
        <div class="flex-space-between">
          <p class="rating-title">Интерьер:</p>
          <p class="rating-star">{{ data.star.interior || "Нет оценки" }}</p>
        </div>

        <Rating
          :name="'interior'"
          :setStar="(star) => (data.star.interior = star)"
          :star="data.star.interior"
        />
      </div>
    </div>
    <button class="submit-btn" type="submit">Опубликовать отзыв</button>
  </form>
</template>
