<template>
  <div :class="styles.buttonAddTask">
    <div :class="styles.taskAddItem">
      <p :class="styles.taskAddText">Add a new task</p>
    </div>
  </div>
</template>

<script>
import styles from "./AddTaskButton.module.scss";

export default {
  name: "AddTaskButton",
  data() {
    return {
      styles,
    };
  },
};
</script>
