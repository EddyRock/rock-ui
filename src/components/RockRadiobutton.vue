<template>
<div class="rock-radiobutton">
  <div
    v-for="radio in buttons"
    :key="radio.value"
    class="rock-radiobutton__radio"
  >
    <div
      class="rock-radiobutton__fake-input"
      :class="{
        'rock-radiobutton__fake-input--active' : isSelected(radio.value) || radio.active,
        'rock-radiobutton__fake-input--disabled' : radio.disabled,
      }"
    >
      <div
        class="rock-radiobutton__active-indicator"
        :class="{
        'rock-radiobutton__active-indicator--active' : isSelected(radio.value),
        'rock-radiobutton__active-indicator--disabled' : radio.disabled,
      }"
      />
    </div>

    <input
      class="rock-radiobutton__input"
      :class="{
        'rock-radiobutton__input--disabled' : radio.disabled
      }"
      type="radio"
      :disabled="radio.disabled"
      :value="radio.value"
      v-model="value"
    >
    <label class="rock-radiobutton__label">{{ radio.name }}</label>
  </div>
</div>
</template>

<script>
export default {
  name: 'RockRadiobutton',
  watch: {
    value() {
      this.$emit('input', this.value);
    },
  },
  props: {
    buttons: {
      type: Array,
      default: () => ([]),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    value: '',
  }),
  methods: {
    isSelected(value) {
      return this.value === value;
    },
    setDefaultValue() {
      const activeItem = this.buttons.find((button) => button.active);
      if (!activeItem) {
        return;
      }

      this.value = activeItem.value;
    },
  },

  created() {
    this.setDefaultValue();
  },
};
</script>

<style lang="scss">
  .rock-radiobutton {
    &__radio {
      position: relative;
      min-height: 1.5rem;
    }

    &__input {
      opacity: 0;
      width: 1.25rem;
      height: 1.25rem;
      position: absolute;
      margin: 0;
      cursor: pointer;

      &--disabled {
        cursor: not-allowed;
      }
    }

    &__fake-input {
      position: absolute;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      border: .1rem solid $dark_gray;
      display: flex;
      align-items: center;
      justify-content: center;

      &--active {
        border-color: $success;
      }

      &--disabled {
        border-color: $medium_gray;
        cursor: not-allowed;
      }
    }

    &__active-indicator {
      display: none;
      border-radius: 50%;
      width: .75rem;
      height: .75rem;
      background-color: $success;

      &--disabled {
        background-color: $medium_gray;
      }

      &--active {
        display: block;
      }
    }

    &__label {
      margin-left: 2.1rem;
    }
  }
</style>
