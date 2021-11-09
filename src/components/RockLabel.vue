<template>
  <div
    class="rock-label"
    :class="{
      'rock-label--dark-gray': theme === 'dark-gray',
      'rock-label--medium-gray': theme === 'medium-gray',
      'rock-label--light-gray': theme === 'light-gray',
      'rock-label--orange': theme === 'orange',
      'rock-label--success': theme === 'success',
      'rock-label--blue-link': theme === 'blue-link',
      'rock-label--danger': theme === 'danger',
      'rock-label--yellow': theme === 'yellow',
      'rock-label--violet': theme === 'violet',
    }"
  >
    {{ label }}
  </div>
</template>

<script>
export default {
  name: 'RockLabel',
  props: {
    theme: {
      type: String,
      default: 'black',
    },
    label: {
      type: String,
      default: '',
    },
  },
};

</script>

<style lang="scss">
.rock-label {
  display: inline-block;
  padding: .1rem .6rem;
  border-radius: 1.3rem;
  background: $black;
  color: $white;
  font-size: .7rem;

  &--dark-gray {
    background-color: $dark_gray;
  }
  &--medium-gray {
    background-color: $medium_gray;
  }
  &--light-gray {
    background-color: $light_gray;
    color: $black;
  }
  &--orange {
    background-color: $orange;
  }
  &--success {
    background-color: $success;
  }
  &--blue-link {
    background-color: $blue_link;
  }
  &--danger {
    background-color: $danger;
  }
  &--yellow {
    background-color: $yellow;
    color: $dark_gray;
  }
  &--violet {
    background-color: $violet;
  }
}
</style>
