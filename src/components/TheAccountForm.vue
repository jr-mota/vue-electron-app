<template>
  <form class="account-form" @submit.prevent="submit">
    <app-input v-model="nick" :placeholder="'Ник аккаунта'" />
    <app-select
      :options="[
        { type: 'windows', name: 'Windows 10 / 7' },
        { type: 'macos', name: 'Mac OS (>Sierra)' },
      ]"
      class="account-form__select"
    />
  </form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import AppSelect from "@/components/AppSelect.vue";

export default {
  components: {
    AppInput,
    AppSelect,
  },
  data: () => ({
    nick: "",
  }),
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";

.account-form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  padding: 60px;

  background-color: $color-3;

  border-radius: 10px;

  &__select {
    margin-top: 20px;
  }

  &__btn {
    margin-top: 20px;
  }
}
</style>
