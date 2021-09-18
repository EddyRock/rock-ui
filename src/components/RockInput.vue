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
  props: {
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
    error: {
      type: String,
      default: '',
    },
    warning: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    field: '',
  }),

  watch: {
    value() {
      this.field = this.value;
    },
  },

  methods: {
    onInput() {
      this.$emit('input', this.field);
    },

    onChange() {
      this.$emit('change', this.field);
    },
  },

  created() {
    this.field = this.value || '';
  },
};
</script>

<style lang="scss">
.rock-input {
  display: flex;
  flex-direction: column;

  &__subtitle {
    @extend %subtitle_default;
  }

  &__field {
    &--error {
      @extend %error_default;
    }

    &--warning {
      @extend %warning_default;
    }

    &--disabled {
      @extend %disabled_default;
    }

    &:focus {
        @extend %focus_default;
    }

    &::placeholder {
      color: $dark_gray;
    }

    @extend %field_default;

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
  }

  &__error {
    @extend %invalid;
  }

  &__tip {
    color: $medium_gray;
    margin-top: $margin_step;
    font-size: .8rem;
  }
}
</style>
