<template>
  <div :class="styles.taskItem">
    <label :class="styles.checkBox">
      <input type="checkbox" name="option" :class="styles.checkBoxInput" />
      <span :class="styles.checkBoxSpan"></span>
    </label>
    <p :class="styles.nameTask">{{ task.name }}</p>
    <button :class="styles.closeTaskButton">✖</button>
  </div>
</template>

<script>
import styles from "./TaskItem.module.scss";

export default {
  name: "TaskItem",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      styles,
    };
  },
};
</script>
