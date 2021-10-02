<template>
  <div class="rock-checkbox">
    <div class="rock-checkbox__wrapper-input">
      <div
        class="rock-checkbox__fake-input"
        :class="{
          'rock-checkbox__fake-input--disabled': disabled,
          'rock-checkbox__fake-input--active': field,
          'rock-checkbox__fake-input--disabled-active': field && disabled,
        }"
      >
        <img
          v-if="field"
          class="rock-checkbox__fake-input-icon"
          src="../assets/icons/tick.svg"
          alt="tick"
        />
      </div>

      <input
        :disabled="disabled"
        v-model="field"
        type="checkbox"
        class="rock-checkbox__input"
        :class="{ 'rock-checkbox__input--disabled': disabled }"
        @change="onChange"
      />
      <label
        v-if="title"
        class="rock-checkbox__label"
        for="accept"
      >
        {{ title }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    default: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      field: false,
    };
  },
  methods: {
    onChange() {
      this.$emit('input', this.field);
    },
  },
  created() {
    this.field = this.default;
  },
};
</script>

<style lang="scss">
.rock-checkbox {
  &__wrapper-input {
    position: relative;
    min-height: 1.2rem;
  }

  &__fake-input {
    top: calc(50% - .6rem);
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    border: .1rem solid $dark_gray;
    border-radius: .1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &--active {
      background-color: $success;
      border: none;
    }

    &--disabled {
      border-color: $medium_gray;
      cursor: not-allowed;
    }

    &--disabled-active {
      background-color: $medium_gray;
      border-color: $medium_gray;
      cursor: not-allowed;
    }

    &-icon {
      width: .6rem;
      height: .5rem;
    }
  }

  &__input {
    opacity: 0;
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    cursor: pointer;

    &--disabled {
      cursor: not-allowed;
    }
  }

  &__label {
    display: block;
    width: 100%;
    height: 1.2rem;
    padding-left: 2rem;
    line-height: 1.2rem;
  }
}
</style>
