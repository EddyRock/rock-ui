<template>
  <button
    class="rock-button"
    :class="{
      'rock-button--disabled': disabled,
      'rock-button--secondary': secondary,
    }"
    :disabled="disabled"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'RockButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
  .rock-button {
    outline: none;
    border: none;
    background: $success;
    border-radius: 2px;
    padding: 8px 16px;
    color: $white;
    cursor: pointer;
    font-size: 14px;
    &:not([disabled]):hover {
      background: lighten($success, 1%);
    }
    &:not([disabled]):active {
      background: darken($success, 1%);
    }
    &--secondary {
      background-color: transparent !important;
      color: $success;
      border: 1px solid $success;
      &:not([disabled]):hover {
        border-color: lighten($success, 1%);
      }
      &:not([disabled]):active {
        border-color: darken($success, 1%);
      }
      &.rock-button--disabled {
        color: $medium_gray;
      }
    }

    &--disabled {
      background-color: $medium_gray;
      cursor: not-allowed;
      border: 1px solid $medium_gray;
    }
  }
</style>
