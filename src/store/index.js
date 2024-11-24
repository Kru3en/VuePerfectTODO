import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const LOCAL_STORAGE_KEY = "tasks";

export default new Vuex.Store({
  state: {
    tasks: [],
    filter: "all",
    taskCounter: 0,
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
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    setTaskCounter(state, counter) {
      state.taskCounter = counter;
    },
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
    loadTasksFromStorage({ commit }) {
      const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (storedData) {
        commit("setTasks", storedData.tasks || []);
        commit("setTaskCounter", storedData.taskCounter || 0);
      }
    },
    saveTasksToStorage({ state }) {
      const dataToSave = {
        tasks: state.tasks,
        taskCounter: state.taskCounter,
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToSave));
    },
    setFilter({ commit, dispatch }, filter) {
      commit("setFilter", filter);
      dispatch("saveTasksToStorage");
    },
    addTaskWithIncrement({ state, commit, dispatch }) {
      const taskName = `Task ${state.taskCounter + 1}`;
      commit("addTask", taskName);
      commit("incrementTaskCounter");
      dispatch("saveTasksToStorage");
    },
    toggleTaskCompletion({ commit, dispatch }, taskId) {
      commit("toggleTaskCompletion", taskId);
      dispatch("saveTasksToStorage");
    },
    deleteTask({ commit, dispatch }, taskId) {
      commit("deleteTask", taskId);
      dispatch("saveTasksToStorage");
    },
  },
  modules: {},
});
