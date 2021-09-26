export default {
  state: {
    userSigned: true,
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
