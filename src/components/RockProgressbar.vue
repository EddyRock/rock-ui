<template>
  <div
    class="rock-progressbar"
    :style="{
      width: `${value}%`,
    }"
  />
</template>

<script>
export default {
  name: 'RockProgressbar',
  props: {
    value: {
      type: [String, Number],
      default: 0,
    },
  },
};
</script>

<style lang="scss">
  .rock-progressbar {
    background: $success;
    height: .5rem;
    border-radius: .15rem;
    width: 100%;
  }
</style>
