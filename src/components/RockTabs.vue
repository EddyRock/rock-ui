<template>
<div class="tabs">
  <span
    v-for="tab in tabs"
    :key="tab.value"
    :class="{
      'tabs__item--disabled': tab.disabled
    }"
    class="tabs__item"
    @click="onSelectTab(tab)"
  >
    {{ tab.name }}
    <div
      v-if="isSelectedtab(tab)"
      class="tabs__indicator"
      :class="{
        'tabs__indicator--disabled': tab.disabled
      }"
    />
  </span>
</div>
</template>

<script>
export default {
  name: 'RockTabs',
  watch: {
    value() {
      this.$emit('input', this.value);
    },
  },
  props: {
    tabs: {
      type: Array,
      default: () => ([]),
    },
  },
  data: () => ({
    value: null,
  }),
  methods: {
    onSelectTab(tab) {
      if (tab.disabled) {
        return;
      }

      this.value = tab.value;
    },
    isSelectedtab(tab) {
      return this.value === tab.value;
    },
    setDefaultValue() {
      const activeItem = this.tabs.find((button) => button.active);
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
  .tabs {
    display: inline-flex;
    border-bottom: .2rem solid $medium_gray;
    min-height: 2.1rem;

    &__item {
      position: relative;
      margin-left: 1rem;
      user-select: none;
      cursor: pointer;
      &--disabled {
        color: $medium_gray;
        cursor: not-allowed;
      }
      &:first-child {
        margin-left: 1.25rem;
      }
      &:last-child {
        margin-right: 1.25rem;
      }
    }

    &__indicator {
      position: absolute;
      height: .2rem;
      background: $black;
      width: 100%;
      bottom: -.2rem;
      &--disabled {
        background: $dark_gray;
        cursor: not-allowed;
      }
    }
  }
</style>
