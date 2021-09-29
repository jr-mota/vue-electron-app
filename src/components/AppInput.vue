<template>
  <div class="input">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input__input"
      id="input"
      type="text"
      :placeholder="placeholder"
    />
    <label class="input__label" for="input"></label>
  </div>
</template>

<script>
export default {
  props: ["modelValue", "placeholder"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";

.input {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  &__input {
    padding: 18px 15px;

    border: none;
    outline: none;
    border-radius: 10px 0px 0px 10px;

    font-weight: 600;
    font-size: 16px;

    color: $text-color-1;
    background-color: $color-2;

    &::placeholder {
      color: $text-color-2;

      font-weight: 600;
      font-size: 16px;
    }
  }

  &__label {
    position: relative;

    display: block;

    padding: 20px 18px;

    border-radius: 0px 10px 10px 0px;

    background-color: $color-2;

    &:before {
      content: "";

      position: absolute;
      top: 15%;
      right: 30%;

      padding: 18px;

      border-radius: 10px;

      background-color: $color-1;

      background-image: url("../assets/svg/lock.svg");
      background-repeat: no-repeat;
      background-size: 20px 22px;
      background-position: center center;
    }
  }
}
</style>
