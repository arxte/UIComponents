<template>
    <i class="st" :style="styleObject"></i>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  icon: String,
});

const styleObject = computed(() => {
  return {
    "-webkit-mask-image": `url(/icons/${props.icon}.svg)`,
    "mask-image": `url(/icons/${props.icon}.svg)`,
  };
});
</script>

<style scoped lang="scss">
.st {
  display: inline-block;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;

  background-color: black;
    
  transition: 0.2s;
  width: 24px;
  height: 24px;
}
</style>
