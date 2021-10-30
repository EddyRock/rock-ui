<template>
  <div class="rock-paginator">

    <button
      v-if="isShortVersion"
      class="rock-paginator__button"
      :class="{ 'rock-paginator__button--disabled': value === 1 }"
      @click="clickHandler(1)"
    >
      <img
        class="rock-paginator__chevron-left"
        src="../assets/icons/chevron_double.svg"
      >
    </button>

    <button
      :class="{ 'rock-paginator__button--disabled': value === 1 }"
      class="rock-paginator__button"
      @click="move(false)"
    >
      <img
        class="rock-paginator__chevron-left"
        src="../assets/icons/chevron.svg"
      >
    </button>

    <template v-if="!isShortVersion">
      <button
        v-for="(item, index) in items"
        :key="index"
        :class="{ 'rock-paginator__button--active': item === value }"
        class="rock-paginator__button"
        @click="clickHandler(item)"
      >
        {{ item }}
      </button>
    </template>

    <template v-else>
      <div class="rock-paginator__button rock-paginator__button--readonly">
        {{ value }}
      </div>
    </template>

    <button
      :class="{ 'rock-paginator__button--disabled': nextButtonDisabled }"
      class="rock-paginator__button"
      @click="move(true)"
    >
      <img
        class="rock-paginator__chevron"
        src="../assets/icons/chevron.svg"
      >
    </button>

  </div>
</template>

<script>
export default {
  name: 'RockPaginator',

  props: {
    value: {
      type: Number,
      default: 1,
    },
    length: {
      type: Number,
      default: 10,
    },
    totalVisible: {
      type: Number,
      default: 7,
    },
    isShortVersion: {
      type: Boolean,
      default: false,
    },
    hasNextPage: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    items() {
      if (this.isShortVersion) {
        return [];
      }

      const totalVisible = parseInt(this.totalVisible, 10);

      const maxLength = Math.min(
        Math.max(0, totalVisible) ||
        this.length,
        this.length,
      );

      if (this.length <= maxLength) {
        return this.range(1, this.length);
      }

      const even = maxLength % 2 === 0 ? 1 : 0;
      const left = Math.floor(maxLength / 2);
      const right = this.length - left + 1 + even;

      if (this.value > left && this.value < right) {
        const start = this.value - left + 2;
        const end = this.value + left - 2 - even;

        return [1, '...', ...this.range(start, end), '...', this.length];
      } if (this.value === left) {
        const end = this.value + left - 1 - even;

        return [...this.range(1, end), '...', this.length];
      } if (this.value === right) {
        const start = this.value - left + 1;

        return [1, '...', ...this.range(start, this.length)];
      }
      return [...this.range(1, left), '...', ...this.range(right, this.length)];
    },

    nextButtonDisabled() {
      return this.isShortVersion ? !this.hasNextPage : this.value === this.length;
    },
  },

  methods: {
    clickHandler(item) {
      if (item !== '...' && item !== this.value) {
        this.$emit('input', item);
      }
    },

    range(from, to) {
      const range = [];
      const fromNew = from > 0 ? from : 1;

      for (let i = fromNew; i <= to; i++) {
        range.push(i);
      }

      return range;
    },

    move(direction) {
      if (direction) {
        if ((this.length !== undefined && this.value !== this.length) || this.hasNextPage) {
          this.$emit('input', this.value + 1);
        }
      } else if (this.value !== 1) {
        this.$emit('input', this.value - 1);
      }
    },

  },
};
</script>

<style lang="scss" scoped>
.rock-paginator {
  display: inline-flex;
  background-color: $white;

  &__arrow {
    transform: rotate(90deg);
  }

  &__chevron-left {
    transform: rotate(180deg);
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    min-width: 2.4rem;
    height: 2.5rem;
    padding: 0.4rem;
    line-height: 1.2rem;
    font-size: .8rem;
    font-weight: 400;
    border-width: .155rem .06rem .155rem .06rem;
    border-style: solid;
    border-color: $medium_gray;
    color: $black;
    background: $white;
    cursor: pointer;
    transition: border-color 0.22s;

    &--active {
      color: $white;
      background-color: $blue_link;
      border-color: $blue_link;
    }

    &--readonly {
      pointer-events: none;
    }

    &--disabled {
      cursor: not-allowed;
      color: $dark_gray;
      opacity: 0.6;
      border-color: $medium_gray;
      &:hover {
        border-color: $medium_gray;
      }
    }

    &:hover {
      border-color: $dark_gray;
    }

    &:first-child {
      border-radius: .15rem 0 0 .15rem;
      border-width: .15rem  .06rem .15rem .15rem;
      min-width: 2.4rem;
    }

    &:last-child {
      border-radius: 0 .15rem .15rem 0;
      border-width: .15rem .15rem .15rem .06rem;
      min-width: 2.4rem;
    }
  }
}
</style>
