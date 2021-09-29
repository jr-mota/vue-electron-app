<template>
  <div
    @click="toggleSelect"
    class="select"
    :class="{
      'select_before-down': dropActive,
      'select_before-up': !dropActive,
    }"
  >
    <div
      class="select__selected"
      :class="{ select__selected_option: modelValue }"
    >
      {{ modelValue || placeholder }}
    </div>
    <div class="select__drop" :class="{ select__drop_active: dropActive }">
      <div
        @click="selectOption(option.name)"
        v-for="(option, idx) of options"
        :key="idx"
        class="select__option"
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    options: Array,
    placeholder: String,
  },
  data: () => ({
    update: "",
    dropActive: false,
  }),
  methods: {
    toggleSelect() {
      this.dropActive = !this.dropActive;
    },
    selectOption(option) {
      this.selectedOption = option;

      this.$emit("update:modelValue", option);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";

.select {
  min-width: 280px;

  position: relative;

  padding: 15px 25px;

  border-radius: 10px;

  font-weight: 600;
  font-size: 16px;

  color: $text-color-1;
  background-color: $color-2;

  cursor: pointer;

  &:before {
    -webkit-transition: background 0.3s linear;
    -o-transition: background 0.3s linear;
    transition: background 0.3s linear;
  }

  &::placeholder {
    font-weight: 600;
    font-size: 16px;
  }

  &_before-down {
    &:before {
      content: "";

      display: block;

      position: absolute;
      top: 16%;
      right: 3%;

      padding: 18px;

      background-image: url("../assets/svg/chevron-down.svg");
      background-repeat: no-repeat;
      background-size: 32px 32px;
      background-position: center center;
    }
  }

  &_before-up {
    &:before {
      content: "";

      display: block;

      position: absolute;
      top: 16%;
      right: 3%;

      padding: 18px;

      background-image: url("../assets/svg/chevron-up.svg");
      background-repeat: no-repeat;
      background-size: 32px 32px;
      background-position: center center;
    }
  }

  &__selected {
    color: $text-color-2;

    &_option {
      color: $text-color-1;
    }
  }

  &__drop {
    position: absolute;
    left: 0;
    bottom: -130px;

    z-index: 100;

    visibility: hidden;

    opacity: 0;

    width: 100%;

    padding: 20px 25px;

    border-radius: 10px;

    font-weight: 600;
    font-size: 16px;

    color: $text-color-1;
    background-color: $color-2;

    -webkit-transition: opacity 0.3s linear, visibility 0.3s linear;
    -o-transition: opacity 0.3s linear, visibility 0.3s linear;
    transition: opacity 0.3s linear, visibility 0.3s linear;

    &_active {
      opacity: 1;
      visibility: visible;
    }
  }

  &__option {
    color: $text-color-2;

    padding: 10px;

    -webkit-transition: color 0.3s linear;
    -o-transition: color 0.3s linear;
    transition: color 0.3s linear;

    &:hover {
      color: $text-color-1;
    }
  }
}
</style>
