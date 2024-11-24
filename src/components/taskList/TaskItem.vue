<template>
  <div :class="styles.taskItem">
    <label :class="styles.checkBox">
      <input
        type="checkbox"
        :checked="task.completed"
        @change="toggleTaskCompletion(task.id)"
        :class="styles.checkBoxInput"
      />
      <span :class="styles.checkBoxSpan"></span>
    </label>
    <p :class="styles.nameTask">{{ task.name }}</p>
    <button @click="deleteTask(task.id)" :class="styles.closeTaskButton">
      ✖
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import styles from "./TaskItem.module.scss";

export default {
  name: "TaskItem",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["toggleTaskCompletion", "deleteTask"]),
  },
  data() {
    return {
      styles,
    };
  },
};
</script>
