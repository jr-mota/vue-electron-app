<template>
  <form class="pc-form">
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
  </form>
</template>

<script>
import AppSelect from "@/components/AppSelect.vue";

export default {
  components: {
    AppSelect,
  },
  data: () => ({
    os: "",
    cpu: "",
    gpu: "",
  }),
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

  padding: 60px;

  background-color: $color-3;

  border-radius: 10px;

  &__select {
    margin-top: 20px;

    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
