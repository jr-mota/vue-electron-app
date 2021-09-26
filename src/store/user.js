export default {
  state: {
    userSigned: false,
  },
  mutations: {
    setUserSigned(state, sign) {
      if (typeof sign === "boolean") {
        state.userSigned = sign;
      }
    },
  },
  getters: {
    getUserSigned: (state) => state.userSigned,
  },
};
