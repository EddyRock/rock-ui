<template>
  <div class="rock-input">
    <span
      v-if="subtitle"
      class="rock-input__subtitle"
    >
      {{ subtitle }}
    </span>
    <div class="rock-input__field-wrapper">
      <div
        v-if="isLayoutVisible"
        class="rock-input__field-layout"
        :class="{
          'rock-input__field-layout--small': small,
          'rock-input__field-layout--medium': medium,
          'rock-input__field-layout--large': large,
        }"
      />
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
        class="rock-input__field"
        type="text"
        @keyup="onKeyEvent"
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
    isLayoutVisible: false,
    timeout: null,
  }),

  methods: {
    onKeyEvent(e) {
      if (e.key === 'Backspace' && !this.field) {
        this.isLayoutVisible = true;

        this.timeout = setTimeout(() => {
          this.isLayoutVisible = false;
        }, 50);
        clearTimeout(this.timeout);
      }
    },

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
  &__field {
    width: 100%;
    padding: .6rem .5rem;
    border: .1rem solid $medium_gray;
    border-radius: .1rem;
    &-wrapper {
      position: relative;
    }

    &-layout {
      position: absolute;
      width: 100%;
      height: 2.3rem;
      background-color: $blue_link;
      opacity: .3;
      &--small {
        height: 1.8rem;
      }

      &--medium {
        height: 2.8rem;
      }

      &--large {
        height: 3.2rem;
      }
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
