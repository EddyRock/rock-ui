<template>
  <div class="main">
    <div class="main__cover">
      <h1>Rock UI</h1>

      <div class="main__colors">
        <div v-for="color in colors" :key="color.hex" class="main__color-wrapper">
          <div class="main__color-item" :class="`main__color-item--${color.class}`">*</div>
          <div class="main__color-description">
            <h3>{{ color.title }}</h3>
            <p class="main__color-subtitle">{{ color.subtitle }}</p>
            <p class="main__color-hex">{{ color.hex }}</p>
          </div>
        </div>
      </div>

      <rock-text-area
        v-model="field"
        class="main__textarea"
        subtitle="Text Area"
      />

      <rock-input
        v-model="field"
        subtitle="Input"
        class="main__input"
      />

      {{ fieldSelect }}

      <rock-select
        v-model="fieldSelect"
        class="main__select"
        :items="colors"
      />

    </div>
  </div>
</template>

<script>
import RockInput from './components/RockInput.vue';
import RockTextArea from './components/RockTextArea.vue';
import RockSelect from './components/RockSelect.vue';

export default {
  name: 'App',
  components: {
    RockInput,
    RockTextArea,
    RockSelect,
  },
  data: () => ({
    colors: [
      {
        title: 'Black',
        subtitle: 'Text, Icons',
        hex: '#000000',
        class: 'black',
      },
      {
        title: 'Dark Gray',
        subtitle: 'Secondary text',
        hex: '#7F8285',
        class: 'dark-grey',
      },
      {
        title: 'Medium Gray',
        subtitle: 'Background, strokes, and dividers',
        hex: '#C9CED1',
        class: 'medium-grey',
      },
      {
        title: 'Light Gray',
        subtitle: 'Hover',
        hex: '#F5F6F7',
        class: 'light-grey',
      },
      {
        title: 'Orange',
        subtitle: 'Additional',
        hex: '#FF9900',
        class: 'orange',
      },
      {
        title: 'Success',
        subtitle: 'Positive result',
        hex: '#01C293',
        class: 'success',
      },
      {
        title: 'Blue Link',
        subtitle: 'Interactive elements',
        hex: '#0E7EE4',
        class: 'blue-link',
      },
      {
        title: 'Danger',
        subtitle: 'Error',
        hex: '#E5243F',
        class: 'danger',
      },
      {
        title: 'Yellow',
        subtitle: 'Warnings',
        hex: '#FFD966',
        class: 'yellow',
      },
      {
        title: 'Violet',
        subtitle: 'Additional',
        hex: '#996699',
        class: 'violet',
      },
    ],
    field: 'asdasd',
    fieldSelect: {
      title: 'Violet',
      subtitle: 'Additional',
      hex: '#996699',
      class: 'violet',
    },
  }),
};
</script>

<style lang="scss">
.main {
  width: 100vw;
  background-color: $medium_gray;

  &__cover {
    padding: 4rem;
    width: 100%;
    max-width: 91rem;
    margin: auto;
    background-color: $white;
    min-height: 100vh;
  }

  &__colors {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border-radius: 8px;
    border: 3px solid $medium_gray;
    padding: 2rem;
    margin-top: 4rem;
  }

  &__color-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 250px;
    margin-top: 1rem;
  }

  &__inputs {
    margin-top: 32px;
  }

  &__input {
    margin-top: 16px;
    max-width: 250px;

    &-title {
      padding-top: 2rem;
      margin-top: 1rem;
      padding: 0;
      font-weight: 700;
    }
  }

  &__textarea {
    margin-top: 16px;
    max-width: 250px;

    &-title {
      padding-top: 2rem;
      margin-top: 1rem;
      padding: 0;
      font-weight: 700;
    }
  }

  &__select {
    margin-top: 16px;
    max-width: 250px;
  }

  &__color {
    &-item {
      border-radius: 50%;
      width: 5rem;
      height: 5rem;
      padding: 2.2rem;
      text-align: center;

      $colors: (
        "black": $black,
        "dark-grey": $dark_gray,
        "medium-grey": $medium_gray,
        "light-grey": $light_gray,
        "orange": $orange,
        "success": $success,
        "blue-link": $blue_link,
        "danger": $danger,
        "yellow": $yellow,
        "violet": $violet
      );

      @each $name, $color in $colors {
        &--#{$name} {
          background-color: $color;
          color: white;
          @if $color ==
            $medium_gray or
            $color ==
            $light_gray or
            $color ==
            $yellow or
            $color ==
            $violet
          {
            color: $black;
          }
        }
      }
    }

    &-subtitle {
      color: $black;
      margin-bottom: 0.5rem;
      line-height: 140%;
    }

    &-hex {
      color: $dark_gray;
    }

    &-description {
      display: flex;
      flex-direction: column;
      margin-left: 1.2rem;
      padding-right: 0.5rem;
      font-size: 0.9rem;
      & h3 {
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>
