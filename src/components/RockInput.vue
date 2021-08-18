<template>
  <div class="rock-input">
    <span
      v-if="subtitle"
      class="rock-input__subtitle"
    >
      {{ subtitle }}
    </span>
    <div class="rock-input__field-wrapper">
      <input
        v-model="field"
        :class="{
          'rock-input__field--error': error,
          'rock-input__field--disabled': disabled,
          'rock-input__field--warning': warning,
          'rock-input__field--small': small,
          'rock-input__field--medium': medium,
          'rock-input__field--large': large,
        }"
        :placeholder="placeholder"
        :disabled="disabled"
        :type="type"
        class="rock-input__field"
        @input="onInput"
        @change="onChange"
      >
    </div>

    <span
      v-if="error"
      class="rock-input__error"
    >
      {{ error }}
    </span>

    <span
      v-if="tip"
      class="rock-input__tip"
    >
      {{ tip }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'RockInput',
  components: {},
  props: {
    warning: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    medium: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    tip: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    field: '',
  }),

  methods: {
    onInput() {
      this.$emit('input', this.field);
    },

    onChange() {
      this.$emit('change', this.field);
    },
  },
};
</script>

<style lang="scss">
.rock-input {
  display: flex;
  flex-direction: column;

  &__subtitle {
    margin-bottom: .5rem;
  }

  &__field {
    width: 100%;
    padding: .6rem .5rem;
    border: .1rem solid $medium_gray;
    border-radius: .1rem;
    &-wrapper {
      position: relative;
    }

    &--small {
      padding: .4rem .5em;
      font-size: .8rem;
    }

    &--medium {
      padding: .7rem .6rem;
      font-size: 1.1rem;
    }

    &--large {
      padding: .8rem .7rem;
      font-size: 1.3rem;
    }

    &--error {
      border-color: $danger;
    }

    &--warning {
      border-color: $orange;
    }

    &--disabled {
      opacity: .5;
      cursor: not-allowed;
    }

    &:focus {
      outline: none;
      border-color: $blue_link;
    }

    &::placeholder {
      color: $dark_gray;
    }
  }

  &__error {
    color: $danger;
    margin-top: .5rem;
  }

  &__tip {
    color: $medium_gray;
    margin-top: .5rem;
    font-size: .8rem;
  }
}
</style>
