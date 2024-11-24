import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, name: "Task 1", completed: false },
      { id: 2, name: "Task 2", completed: true },
    ],
    filter: "all",
    taskCounter: 2,
  },
  getters: {
    filteredTasks(state) {
      if (state.filter === "all") return state.tasks;
      if (state.filter === "active")
        return state.tasks.filter((task) => !task.completed);
      if (state.filter === "completed")
        return state.tasks.filter((task) => task.completed);
    },
    hasTasks(state) {
      return state.tasks.length > 0;
    },
  },
  mutations: {
    setFilter(state, filter) {
      state.filter = filter;
    },
    addTask(state, taskName) {
      const newTask = { id: Date.now(), name: taskName, completed: false };
      state.tasks.push(newTask);
    },
    incrementTaskCounter(state) {
      state.taskCounter++;
    },

    toggleTaskCompletion(state, taskId) {
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) task.completed = !task.completed;
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
  },
  actions: {
    setFilter({ commit }, filter) {
      commit("setFilter", filter);
    },
    addTaskWithIncrement({ state, commit }) {
      const taskName = `Task ${state.taskCounter + 1}`;
      commit("addTask", taskName);
      commit("incrementTaskCounter");
    },
    toggleTaskCompletion({ commit }, taskId) {
      commit("toggleTaskCompletion", taskId);
    },
    deleteTask({ commit }, taskId) {
      commit("deleteTask", taskId);
    },
  },
  modules: {},
});
