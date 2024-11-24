<template>
  <div :class="styles.containerBottom">
    <div :class="styles.leftText">
      <p :class="styles.textPages">1/3</p>
      <p :class="styles.textAction">left</p>
    </div>
    <div :class="styles.rightText">
      <p :class="styles.textButtonAll">All</p>
      <p :class="styles.textActiveButton">Active</p>
      <p :class="styles.textCompletedButton">Completed</p>
    </div>
  </div>
</template>

<script>
import styles from "./FooterTodo.module.scss";

export default {
  name: "FooterTodo",
  data() {
    return {
      styles,
    };
  },
};
</script>
