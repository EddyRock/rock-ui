<template>
    <div class="rock-select">
      <span
        class="rock-select__subtitle"
      >
        subtitle
      </span>

      <div
        tabindex="0"
        class="rock-select__input"
      >
        <div class="rock-select__input-value">Select</div>
        <img class="rock-select__input-icon" src="../assets/icons/arrow.svg">
      </div>

      <div class="rock-select__dropdown">

      </div>
    </div>
</template>

<script>
export default {
  name: 'RockSelect',
  data: () => ({
    name: 'asdasd',
  }),
};
</script>

<style lang="scss">
  .rock-select {
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
      }

      /*&-icon {*/
      /*  */
      /*}*/

      &:focus {
        @extend %focus_default;
        & .rock-select__input-icon {
          transform: rotate(180deg);
        }
      }
    }

    &__dropdown {
      min-height: 215px;
      background: #FFFFFF;
      border: 1px solid #C9CED1;
      border-top: none;
      box-sizing: border-box;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
    }
  }
</style>
