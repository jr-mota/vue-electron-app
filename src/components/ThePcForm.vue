<template>
  <form class="pc-form">
    <app-select
      v-model="selectedOption"
      :placeholder="'ОС'"
      :options="[
        { type: 'windows', name: 'Windows 10 / 7' },
        { type: 'macos', name: 'Mac OS (>Sierra)' },
      ]"
    />
    <app-select />
    <app-select />
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";

.pc-form {
  padding: 60px;

  background-color: $color-3;

  border-radius: 10px;
}
</style>
