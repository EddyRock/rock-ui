<template>
  <div
    tabindex="0"
    @focus="!disabled && onChangeState(true)"
    @focusout="!disabled && onChangeState(false)"
    ref="rock-select"
    class="rock-select"
    :class="{
      'rock-select--disabled': disabled,
      'rock-select--error': error,
      'rock-select--warning': warning,
    }"
  >
    <span
      v-if="subtitle"
      class="rock-select__subtitle"
    >
      {{ subtitle }}
    </span>

    <div class="rock-select__input">
      <div class="rock-select__input-value">{{ selectedLabel }}</div>
      <img
        class="rock-select__input-icon"
        src="../assets/icons/arrow.svg"
      >
    </div>

    <span
      v-if="error"
      class="rock-select__error"
    >
      {{ error }}
    </span>

    <div
      v-if="isOpen"
      class="rock-select__dropdown"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="rock-select__dropdown-item"
        @click="!disabled && selectItem(item)"
      >
        <span class="rock-select__dropdown-item-value"> {{ item[fieldLabel] }} </span>
        <img
          v-if="isSelectedItem(item)"
          class="rock-select__dropdown-item-icon"
          src="../assets/icons/checked.svg"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RockSelect',
  props: {
    subtitle: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => ([]),
    },
    fieldLabel: {
      type: String,
      default: 'title',
    },
    placeholder: {
      type: String,
      default: 'Placeholder',
    },
    unselect: {
      type: Boolean,
      default: false,
    },
    unblur: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Object,
      default: () => ({}),
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
    isOpen: false,
    field: null,
  }),
  watch: {
    disabled() {
      this.onChangeDisabled();
    },
  },
  computed: {
    labels() {
      return this.items.map((item) => item[this.fieldLabel]);
    },

    selectedLabel() {
      return (this.field && this.field[this.fieldLabel]) || this.placeholder;
    },
  },
  methods: {
    isSelectedItem(item) {
      return this.field && this.field[this.fieldLabel] === item[[this.fieldLabel]];
    },

    onChangeDisabled() {
      if (this.disabled) {
        this.$refs['rock-select'].removeAttribute('tabindex');
      } else {
        this.$refs['rock-select'].setAttribute('tabindex', '0');
      }
    },

    onInput() {
      this.$emit('input', this.field);
    },

    onChangeState(open = false) {
      this.isOpen = open;
    },

    selectItem(item) {
      if (!this.unblur) {
        this.$refs['rock-select'].blur();
        this.isOpen = false;
      }

      if (this.unselect && this.field === item) {
        this.field = null;
      } else {
        this.field = item;
      }

      this.onInput();
    },
  },

  created() {
    if (!this.value) {
      return;
    }

    this.field = this.value;
  },

  mounted() {
    this.onChangeDisabled();
  },
};
</script>

<style lang="scss">
  .rock-select {
    position: relative;
    cursor: pointer;

    &__error {
      position: absolute;
      @extend %invalid;
    }

    &--error {
      & .rock-select__input {
        @extend %error_default;
      }
    }

    &--warning {
      & .rock-select__input {
        @extend %warning_default;
      }
    }

    &--disabled {
      @extend %disabled_default;
    }

    &:focus {
      outline: none;
      & .rock-select__input-icon {
        transform: rotate(180deg);
      }
      & .rock-select__input {
        @extend %focus_default;
      }
    }

    &__subtitle {
      @extend %subtitle_default;
    }

    &__input {
      @extend %field_default;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-value {
        color: $black;
        font-size: .8rem;
      }
    }

    &__dropdown {
      position: absolute;
      height: 13rem;
      width: 100%;
      background: $white;
      border: 0.06rem solid $medium_gray;
      border-top: none;
      box-sizing: border-box;
      box-shadow: 0rem .2rem .7rem rgba(0, 0, 0, 0.08);
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      &-value {
        display: block;
      }
      &-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .8rem .5rem;
        cursor: pointer;
        min-height: 2.8rem;
        &:hover {
          background: $light_gray;
        }
      }
    }
  }
</style>
