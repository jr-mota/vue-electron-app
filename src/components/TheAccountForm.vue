<template>
  <form class="account-form" @submit.prevent="submit">
    <app-input v-model="nick" :placeholder="'Ник аккаунта'" />
    <app-select
      v-model="selectedOption"
      :options="[
        { type: 'windows', name: 'Windows 10 / 7' },
        { type: 'macos', name: 'Mac OS (>Sierra)' },
      ]"
      :placeholder="'ОС'"
      class="account-form__select"
    />
    <app-button class="account-form__btn">Отправить</app-button>
  </form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import AppSelect from "@/components/AppSelect.vue";
import AppButton from "@/components/AppButton.vue";

export default {
  components: {
    AppInput,
    AppSelect,
    AppButton,
  },
  data: () => ({
    nick: "",
    selectedOption: "",
  }),
  methods: {
    submit(e) {
      if (this.nick && this.selectedOption) {
        this.$store.commit("setPopupText", "Запрос отправлен");
        this.$store.commit("activatePopup");

        this.nick = "";
        this.selectedOption = "";
      } else {
        this.$store.commit("setPopupText", "Заполните данные!");
        this.$store.commit("activatePopup");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";

.account-form {
  min-width: 350px;

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

  padding: 30px;

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
