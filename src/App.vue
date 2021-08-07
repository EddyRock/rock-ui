<template>
  <div class="main">
    <div class="main__cover">
      <h1>Rock UI</h1>

      <div class="main__colors">
        <div
          v-for="color in colors"
          :key="color.hex"
          class="main__color-wrapper"
        >
          <div
            class="main__color-item"
            :class="`main__color-item--${color.class}`"
          >*</div>
          <div class="main__color-description">
            <h3>{{ color.title }}</h3>
            <p class="main__color-subtitle">{{ color.subtitle }}</p>
            <p class="main__color-hex">{{ color.hex }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: () => {
    return {
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
          title: 'Dark Gray',
          subtitle: 'Background, strokes, and dividers',
          hex: '#000000',
          class: 'black',
        },
        {
          title: 'Black',
          subtitle: 'Text, Icons',
          hex: '#000000',
          class: 'black',
        },
        {
          title: 'Black',
          subtitle: 'Text, Icons',
          hex: '#000000',
          class: 'black',
        },
        {
          title: 'Black',
          subtitle: 'Text, Icons',
          hex: '#000000',
          class: 'black',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .main {
    width: 100vw;
    height: 100vh;
    background-color: $medium_gray;

    &__cover {
      padding: 4rem;
      width: 100%;
      max-width: 91rem;
      margin: auto;
      height: 100vh;
      background-color: $light_gray;
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

    &__color {
      &-item {
        border-radius: 50%;
        width: 5rem;
        height: 5rem;
        padding: 2.2rem;
        text-align: center;
        &--black {
          background-color: $black;
          color: $white;
        }
        &--dark-grey {
          background-color: $dark_gray;
          color: $white;
        }
        &--medium-grey {
          background-color: $medium_gray;
          color: $black;
        }
        &--light-grey {
          background-color: $light_gray;
          color: $black;
        }
        &--orange {
          background-color: $orange;
          color: $white;
        }
        &--succes {
          background-color: $success;
          color: $white;
        }
        &--blue-link {
          background-color: $blue_link;
          color: $white;
        }
        &--danger {
          background-color: $danger;
          color: $white;
        }
        &--yellow {
          background-color: $yellow;
          color: $black;
        }
        &--violet {
          background-color: $violet;
          color: $black;
        }
      }

      &-subtitle {
        color: $black;
        margin-bottom: .5rem;
      }

      &-hex {
        color: $dark_gray;
      }
      &-description {
        display: flex;
        flex-direction: column;
        margin-left: 1.2rem;
        & h3 {
          margin-bottom: .5rem;
        }

      }
    }
  }
</style>
