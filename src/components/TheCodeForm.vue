<template>
  <form class="code-form" @submit.prevent="submit">
    <div class="code-form__code">
      <input
        v-model.trim="code"
        class="code-form__code-input"
        id="code-input"
        type="text"
        placeholder="Введите код"
      />
      <label class="code-form__code-label" for="code-input"></label>
    </div>
    <app-button class="code-form__btn">Подтвердить</app-button>
  </form>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import AppPopup from "@/components/AppPopup.vue";

export default {
  components: {
    AppButton,
    AppPopup,
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

  &__code {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  &__code-input {
    padding: 20px 25px;

    border: none;
    outline: none;
    border-radius: 10px 0px 0px 10px;

    font-weight: 600;
    font-size: 16px;

    color: $text-color-1;
    background-color: $color-2;

    &::placeholder {
      font-weight: 600;
      font-size: 16px;
    }
  }

  &__code-label {
    position: relative;

    display: block;

    padding: 20px 18px;

    border-radius: 0px 10px 10px 0px;

    background-color: $color-2;

    &:before {
      content: "";

      position: absolute;
      top: 15%;
      right: 24%;

      padding: 20px;

      border-radius: 10px;

      background-color: $color-1;

      background-image: url("../assets/svg/lock.svg");
      background-repeat: no-repeat;
      background-size: 20px 22px;
      background-position: center center;
    }
  }

  &__btn {
    margin-top: 20px;
  }
}
</style>
