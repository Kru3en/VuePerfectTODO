<template>
  <div :class="styles.taskItem" data-test="taskItem">
    <label :class="styles.checkBox" data-test="checkBox">
      <input
        type="checkbox"
        :checked="task.completed"
        @change="toggleTaskCompletion(task.id)"
        :class="styles.checkBoxInput"
        data-test="checkBoxInput"
      />
      <span :class="styles.checkBoxSpan" data-test="checkBoxSpan"></span>
    </label>
    <p :class="styles.nameTask" data-test="nameTask">{{ task.name }}</p>
    <button
      @click="deleteTask(task.id)"
      :class="styles.closeTaskButton"
      data-test="closeTaskButton"
    >
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
