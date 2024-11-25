<template>
  <div id="app">
    <main class="containerTodo" data-test="containerTodo">
      <HeaderTodo />
      <TaskList />
      <FooterTodo />
    </main>
    <img
      src="./assets/backgroundTaskSVG.png"
      alt=""
      class="svgBack"
      data-test="svgBack"
    />
  </div>
</template>

<script>
import FooterTodo from "./components/footer/FooterTodo.vue";
import HeaderTodo from "./components/header/HeaderTodo.vue";
import TaskList from "./components/taskList/TaskList.vue";

export default {
  name: "App",
  components: { HeaderTodo, TaskList, FooterTodo },
};
</script>

<style lang="scss" scoped>
@import "./App.module.scss";
</style>
