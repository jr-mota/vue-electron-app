<template>
  <form class="code-form" @submit.prevent="submit">
    <app-input v-model="code" :placeholder="'Введите код'" />
    <app-button class="code-form__btn">Подтвердить</app-button>
  </form>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import AppInput from "@/components/AppInput.vue";

export default {
  components: {
    AppButton,
    AppInput,
  },
  data: () => ({
    code: "",
  }),
  methods: {
    submit(e) {
      if (this.code === "PROATOM3") {
        this.$store.commit("setUserSigned", true);
      } else {
        this.$store.commit("setPopupText", "Код неверный");
        this.$store.commit("activatePopup");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";

.code-form {
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

  text-align: center;

  &__btn {
    margin-top: 20px;
  }
}
</style>
