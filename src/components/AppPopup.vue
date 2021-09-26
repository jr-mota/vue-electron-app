<template>
  <div class="popup" :class="{ 'popup-active': active }">
    <div class="popup__body" :class="{ 'popup-body-active': active }">
      <span class="popup__text">
        {{ text }}
      </span>
      <app-button class="popup__btn" @click="closePopup">
        Ок
      </app-button>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

export default {
  components: {
    AppButton,
  },
  methods: {
    closePopup() {
      this.$store.commit("closePopup");
    },
  },
  computed: {
    active() {
      return this.$store.getters.getPopupActive;
    },
    text() {
      return this.$store.getters.getPopupText;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";

.popup {
  visibility: hidden;

  opacity: 0;

  -webkit-transition: visibility 0s linear 0.3s, opacity 0.3s linear;
  -o-transition: visibility 0s linear 0.3s, opacity 0.3s linear;
  transition: visibility 0s linear 0.3s, opacity 0.3s linear;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 9999;

  width: 100%;
  height: 100%;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.7);

  &__body {
    visibility: hidden;

    opacity: 0;

    -webkit-transition: visibility 0s linear 0.3s, opacity 0.3s linear;
    -o-transition: visibility 0s linear 0.3s, opacity 0.3s linear;
    transition: visibility 0s linear 0.3s, opacity 0.3s linear;

    margin: 0 14px;
    padding: 20px 40px;

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
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    border-radius: 15px;

    background-color: $color-2;
  }

  &__text {
    font-weight: 600;
    font-size: 16px;

    text-align: center;
  }

  &__btn {
    margin-top: 15px;
  }
}

.popup-active {
  opacity: 1;

  visibility: visible;

  transition-delay: 0s;
}

.popup-body-active {
  opacity: 1;

  visibility: visible;

  transition-delay: 0s;
}
</style>
