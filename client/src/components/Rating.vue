<script setup>
const { setStar, name, star } = defineProps(["name", "setStar", "star"]);
</script>

<template>
  <div class="stars-cont">
    <div
      v-for="key in 10"
      type="radio"
      @name="name"
      :class="{
        'red-star': star >= 1 && key < 5 && key <= star,
        'yellow-star': star >= 5 && key < 8 && key <= star,
        'green-star': star >= 8 && key <= star,
      }"
      :id="key"
      :value="key"
      @click="setStar(key)"
    ></div>
  </div>
</template>
