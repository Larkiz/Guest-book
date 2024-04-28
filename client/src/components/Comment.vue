<script setup>
const { data } = defineProps(["data"]);

const generalStar = (
  (data.star.kitchen + data.star.interior + data.star.service) /
  3
).toFixed(1);
</script>

<template>
  <div class="comment">
    <h2>Аноним</h2>
    <div class="stars">
      <p class="green-star star">{{ generalStar }}</p>

      <p>Кухня: {{ data.star.kitchen }}</p>
      <p>Интерьер: {{ data.star.interior }}</p>
      <p>Сервис: {{ data.star.service }}</p>
    </div>
    <p class="comment-text">{{ data.text }}</p>

    <p class="date">{{ data.date }}</p>
  </div>
</template>
