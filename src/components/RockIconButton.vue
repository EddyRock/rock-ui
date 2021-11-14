<template>
  <button
    class="rock-icon-button"
    :class="{
      'rock-icon-button--disabled': disabled,
    }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'RockIconButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
  .rock-icon-button {
    outline: none;
    border: none;
    background-color: $light_gray;
    border-radius: 50%;
    padding: 0;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    &:not([disabled]):hover {
      background: lighten($light_gray, 1%);
    }
    &--disabled {
      background-color: $medium_gray;
      cursor: not-allowed;
    }
  }
</style>
