<template>
  <div class="loader" />
</template>

<script>
const UNITS = {
  line: 'rem',
  size: 'rem',
  speed: 's',
};

export default {
  name: 'RockLoader',
  props: {
    line: {
      type: [Number, String],
      default: 0.4,
    },
    size: {
      type: [Number, String],
      default: 2,
    },
    speed: {
      type: [Number, String],
      default: 1.1,
    },
  },
  created() {
    const root = document.documentElement;

    if (!root) {
      return;
    }

    Object
      .keys(this.$props)
      .forEach((prop) => {
        if (!this.$props[prop] || !UNITS[prop]) {
          return;
        }

        root.style.setProperty(
          `--${prop}`,
          `${this.$props[prop]}${UNITS[prop]}`,
        );
      });
  },
};
</script>

<style lang="scss">
:root {
  --size: 2rem;
  --line: .4rem;
  --speed: 1.1s;
}

.loader,
.loader:after {
  border-radius: 50%;
  width: var(--size);
  height: var(--size);
}
.loader {
  position: relative;
  text-indent: -9999em;
  border-top: var(--line) solid $light_gray;
  border-right: var(--line) solid $light_gray;
  border-bottom: var(--line) solid $light_gray;
  border-left: var(--line) solid $medium_gray;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 var(--speed) infinite linear;
  animation: load8 var(--speed) infinite linear;
}

@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
