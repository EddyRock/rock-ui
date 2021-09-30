<template>
  <form @submit.prevent="handleSubmit" class="rock-checkbox">
    <div class="rock-checkbox__wrapper-input">
      <div
				class="rock-checkbox__fake-input"
			>
				<img
					v-if="field"
					src="../assets/icons/tick.svg"
					alt="tick"
				>
			</div>

      <input type="checkbox" v-model="field" class="rock-checkbox__input" />
      <label class="rock-checkbox__label" for="accept">
        Accept terms and conditions {{ field }}
      </label>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      field: false,
    };
  },
  methods: {
    handleSubmit(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss">
.rock-checkbox {
  outline: 1px solid red;
  &__wrapper-input {
    position: relative;
		min-height: 20px;
  }

  &__fake-input {
		top: calc(50% - 10px);
		position: absolute;
    width: 20px;
    height: 20px;
    background: $success;
    border-radius: 2px;
		display: flex;
		align-items: center;
		justify-content: center;

		& img {
			width: 10px;
			height: 8px;
		}
  }

  &__input {
    opacity: 0;
		position: absolute;
		width: 20px;
    height: 20px;
		cursor: pointer;
  }

	&__label {
		display: block;
		width: 100%;
		height: 20px;
		padding-left: 32px;
		line-height: 20px;
	}
}
</style>
