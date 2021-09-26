<template>
  <form class="account-form" @submit.prevent="submit">
    <input v-model.trim="nick" class="account-form__code" type="text" />
  </form>
</template>

<script>
export default {
  data: () => ({
    nick: "",
  }),
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";
</style>
