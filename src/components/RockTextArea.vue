<template>
  <div class="rock-text-area">
    <span
      v-if="subtitle"
      class="rock-text-area__subtitle"
    >
      {{ subtitle }}
    </span>

    <textarea
      v-model="field"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="{
        'rock-text-area__textarea--disabled': disabled,
        'rock-text-area__textarea--error': error,
        'rock-text-area__textarea--warning': warning,
      }"
      class="rock-text-area__textarea"
      @input="onInput"
      @change="onChange"
    />

    <span
      v-if="error"
      class="rock-input__error"
    >
      {{ error }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'RockTextArea',
  props: {
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
.rock-text-area {
  display: flex;
  flex-direction: column;

  &__subtitle {
    @extend %subtitle_default;
  }

  &__textarea {
    @extend %field_default;

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

    &__error {
      @extend %invalid;
    }
  }
}
</style>
