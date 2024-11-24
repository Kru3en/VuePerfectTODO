<template>
  <div :class="styles.containerCenter">
    <div :class="styles.containerTask">
      <div :class="styles.containerListTask">
        <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
      </div>
      <AddTaskButton />
    </div>
  </div>
</template>

<script>
import AddTaskButton from "./buttons/AddTaskButton.vue";
import TaskItem from "./TaskItem.vue";
import styles from "./TaskList.module.scss";

export default {
  name: "TaskList",
  components: { TaskItem, AddTaskButton },
  data() {
    return {
      tasks: [
        { id: 1, name: "Task 1", completed: false },
        { id: 2, name: "Task 2", completed: true },
      ],
      styles,
    };
  },
};
</script>
