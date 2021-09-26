<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";

.button {
  padding: 10px 60px;

  border: none;
  outline: none;
  border-radius: 10px;

  font-weight: 700;
  font-size: 16px;

  color: $color-1;
  background-color: $color-5;

  cursor: pointer;

  position: relative;

  -webkit-transition: top 0.3s linear, opacity 0.3s linear;
  -o-transition: top 0.3s linear, opacity 0.3s linear;
  transition: top 0.3s linear, opacity 0.3s linear;

  &:active {
    top: 1px;
  }

  &:disabled {
    opacity: 0.5;
  }
}
</style>
