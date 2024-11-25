<template>
  <div :class="styles.containerTop" data-test="containerTop">
    <p :class="styles.textTop" data-test="textTop">to do list</p>
  </div>
</template>

<script>
import styles from "./HeaderTodo.module.scss";

export default {
  name: "HeaderTodo",
  data() {
    return {
      styles,
    };
  },
};
</script>
