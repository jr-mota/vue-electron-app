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
      :class="{ select__selected_option: selectedOption }"
    >
      {{ option }}
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
    options: Array,
  },
  data: () => ({
    selectedOption: "",
    dropActive: false,
  }),
  methods: {
    toggleSelect() {
      this.dropActive = !this.dropActive;
    },
    selectOption(option) {
      this.selectedOption = option;
    },
  },
  computed: {
    option() {
      if (this.selectedOption) {
        return this.selectedOption;
      } else {
        return "ОС";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";

.select {
  position: relative;

  padding: 20px 25px;

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

      padding: 20px;

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

      padding: 20px;

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

    &:hover {
      color: $text-color-1;
    }
  }
}
</style>
