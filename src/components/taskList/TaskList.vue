<template>
  <div :class="styles.containerCenter" data-test="containerCenter">
    <div :class="styles.containerTask" data-test="containerTask">
      <div v-if="!hasTasks" :class="styles.noTasks" data-test="noTasks">
        No tasks available
      </div>
      <div
        v-else
        :class="styles.containerListTask"
        data-test="containerListTask"
      >
        <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
      </div>
      <AddTaskButton />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddTaskButton from "./buttons/AddTaskButton.vue";
import TaskItem from "./TaskItem.vue";
import styles from "./TaskList.module.scss";

export default {
  name: "TaskList",
  components: { TaskItem, AddTaskButton },
  computed: {
    ...mapGetters(["filteredTasks", "hasTasks"]),
    tasks() {
      return this.filteredTasks;
    },
    styles() {
      return styles;
    },
  },
};
</script>
