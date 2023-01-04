import { defineStore } from "pinia";

export const baseStore = defineStore("base", {
  state: () => {
    return {
      system_name: "Vue3+Vite+Ts+MicroApp 从零开始搭建",
    };
  },
  getters: {
    stress: (state) => state.system_name + state.system_name,
  },
  actions: {
    getSystemNameLength() {
      return this.system_name.length;
    },
  },
});
