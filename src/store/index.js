import { createStore } from "vuex";

import user from "@/store/user.js";
import popup from "@/store/popup.js";

export default createStore({
  modules: { user, popup },
});
