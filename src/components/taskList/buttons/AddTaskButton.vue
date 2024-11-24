<template>
  <div :class="styles.buttonAddTask" @click="addTaskWithIncrement">
    <div :class="styles.taskAddItem">
      <p :class="styles.taskAddText">Add a new task</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import styles from "./AddTaskButton.module.scss";

export default {
  name: "AddTaskButton",
  methods: {
    ...mapActions(["addTaskWithIncrement"]),
  },
  data() {
    return {
      styles,
    };
  },
};
</script>
