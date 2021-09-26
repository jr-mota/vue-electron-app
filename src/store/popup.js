export default {
  state: () => ({
    popupActive: false,
    popupText: "",
  }),
  mutations: {
    activatePopup(state) {
      state.popupActive = true;
    },
    closePopup(state) {
      state.popupActive = false;
    },
    setPopupText(state, text) {
      state.popupText = text;
    },
  },
  getters: {
    getPopupActive: (state) => state.popupActive,
    getPopupText: (state) => state.popupText,
  },
};
