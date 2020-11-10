export const strict = false;

export const state = () => ({
  companys: [],
  company: null,
  targetData: null,
  index: null,
  loading: true,
  categorys: [],
  category: null,
  targetCategoryData: null,
});

export const getters = {
  companys: (state) => state.companys,
  company: (state) => state.company,
  targetData: (state) => state.targetData,
  index: (state) => state.index,
  loading: (state) => state.loading,
  categorys: (state) => state.categorys,
  category: (state) => state.category,
  targetCategoryData: (state) => state.targetCategoryData,
};

export const mutations = {
  setCompanys(state, { companys }) {
    state.companys = companys;
  },
  setCompany(state, { company }) {
    state.company = company;
  },
  setTargetData(state, { targetData }) {
    state.targetData = targetData;
  },
  setIndex(state, { index }) {
    state.index = index;
  },
  setLoading(state, { loading }) {
    state.loading = loading;
  },
  setCategorys(state, { categorys }) {
    state.categorys = categorys;
  },
  setCategory(state, { category }) {
    state.category = category;
  },
  setTargetCategoryData(state, { targetData }) {
    state.targetCategoryData = targetData;
  },
};

export const actions = {
  // traning
  async fetchCompanys({ commit }) {
    const res = await this.$axios.get("/api/get");
    // console.info(res);
    const companys = res.data;
    commit("setCompanys", { companys });
    const loading = false;
    commit("setLoading", { loading });
  },
  async registCompany({ commit }) {
    const targetData = this.getters["targetData"];
    await this.$axios.post("/api/regist", targetData);
  },
  async updateCompany({ commit }) {
    const targetData = this.getters["targetData"];
    const index = this.getters["index"];
    await this.$axios.post("api/update", [targetData, index]);
  },
  async deleteCompany({ commit }, { index }) {
    await this.$axios.post("/api/delete", index);
    const res = await this.$axios.get("/api/get");
    const companys = res.data;
    commit("setCompanys", { companys });
  },
  fetchCompany({ commit }, { index }) {
    const company = this.getters["companys"][index];
    commit("setCompany", { company });
    commit("setIndex", { index });
  },
  createTargetData({ commit }, { company }) {
    const targetData = company;
    commit("setTargetData", { targetData });
  },
  clearCompany({ commit }) {
    const company = null;
    const targetData = null;
    const index = null;
    commit("setCompany", { company });
    commit("setTargetData", { targetData });
    commit("setIndex", { index });
  },

  // traningCategory
  async fetchCategorys({ commit }) {
    const res = await this.$axios.get("api/getC");
    const categorys = res.data;
    commit("setCategorys", { categorys });
    const loading = false;
    commit("setLoading", { loading });
  },
  async registCategory({ commit }) {
    const targetData = this.getters["targetCategoryData"];
    await this.$axios.post("/api/registC", targetData);
  },
  async updateCategory({ commit }) {
    const targetData = this.getters["targetCategoryData"];
    const index = this.getters["index"];
    await this.$axios.post("api/updateC", [targetData, index]);
  },
  async deleteCategory({ commit }, { index }) {
    await this.$axios.post("/api/deleteC", index);
    const res = await this.$axios.get("/api/getC");
    const categorys = res.data;
    commit("setCategorys", { categorys });
  },
  fetchCategory({ commit }, { index }) {
    const category = this.getters["categorys"][index];
    commit("setCategory", { category });
    commit("setIndex", { index });
  },
  createTargetCategoryData({ commit }, { category }) {
    const targetData = category;
    commit("setTargetCategoryData", { targetData });
  },
  clearCategory({ commit }) {
    const category = null;
    const targetData = null;
    const index = null;
    commit("setCategory", { category });
    commit("setTargetCategoryData", { targetData });
    commit("setIndex", { index });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
