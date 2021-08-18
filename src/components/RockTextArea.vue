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
  components: {},
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
//TODO: make a mixin + add to vraibles some css

.rock-text-area {
  display: flex;
  flex-direction: column;

  &__subtitle {
    margin-bottom: .5rem;
  }

  &__textarea {
    width: 100%;
    padding: .6rem .5rem;
    border: .1rem solid $medium_gray;

    &__error {
      color: $danger;
      margin-top: .5rem;
    }

    &--disabled {
      opacity: .5;
      cursor: not-allowed;
    }

    &--error {
      border-color: $danger;
    }

    &--warning {
      border-color: $orange;
    }

    &:focus {
      outline: none;
      border-color: $blue_link;
    }

    &::placeholder {
      color: $dark_gray;
    }
  }
}
</style>
