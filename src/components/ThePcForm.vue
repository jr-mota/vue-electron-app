<template>
  <form class="pc-form" @submit.prevent="submit">
    <app-select
      class="pc-form__select"
      v-model="os"
      :placeholder="'ОС'"
      :options="[
        { type: 'windows', name: 'Windows 10 / 7' },
        { type: 'macos', name: 'Mac OS (>Sierra)' },
      ]"
    />
    <app-select
      class="pc-form__select"
      v-model="cpu"
      :placeholder="'Процессор'"
      :options="[
        { type: 'intel', name: 'Intel' },
        { type: 'amd', name: 'AMD' },
      ]"
    />
    <app-select
      class="pc-form__select"
      v-model="gpu"
      :placeholder="'Видеокарта'"
      :options="[
        { type: 'nvidia', name: 'Nvidia' },
        { type: 'amdradeon', name: 'AMD Radeon' },
      ]"
    />
    <app-button class="pc-form__btn" :disabled="process">
      {{ btnText }}
    </app-button>
  </form>
</template>

<script>
import AppSelect from "@/components/AppSelect.vue";
import AppButton from "@/components/AppButton.vue";

export default {
  components: {
    AppSelect,
    AppButton,
  },
  data: () => ({
    os: "",
    cpu: "",
    gpu: "",
    btnText: "START",
    process: false,
  }),
  methods: {
    submit(e) {
      if (this.os && this.cpu && this.gpu) {
        this.process = setTimeout(this.processMethod.bind(this), 3000);

        this.os = "";
        this.cpu = "";
        this.gpu = "";
        this.btnText = "Процесс...";

        this.$store.commit("setPopupText", "Процесс запущен");
        this.$store.commit("activatePopup");
      } else {
        this.$store.commit("setPopupText", "Заполните данные!");
        this.$store.commit("activatePopup");
      }
    },
    processMethod() {
      this.process = false;
      this.btnText = "START";

      this.$store.commit("setPopupText", "Процесс завершен");
      this.$store.commit("activatePopup");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";

.pc-form {
  min-width: 300px;

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

    &:first-child {
      margin-top: 0;
    }
  }

  &__btn {
    margin-top: 20px;
  }
}
</style>
