<template>
  <div :class="styles.containerBottom" data-test="containerBottom">
    <div :class="styles.leftText" data-test="leftText">
      <p :class="styles.textPages" data-test="textPages">1/{{ totalPages }}</p>
      <p :class="styles.textAction" data-test="textAction">tasks left</p>
    </div>
    <div :class="styles.rightText" data-test="rightText">
      <button
        @click="setFilter('all')"
        :class="[styles.textButton, filter === 'all' ? styles.active : '']"
        data-test="filterAll"
      >
        All
      </button>
      <button
        @click="setFilter('active')"
        :class="[styles.textButton, filter === 'active' ? styles.active : '']"
        data-test="filterActive"
      >
        Active
      </button>
      <button
        @click="setFilter('completed')"
        :class="[
          styles.textButton,
          filter === 'completed' ? styles.active : '',
        ]"
        data-test="filterCompleted"
      >
        Completed
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import styles from "./FooterTodo.module.scss";

export default {
  name: "FooterTodo",
  computed: {
    ...mapState(["filter", "tasks"]),
    totalPages() {
      return Math.ceil(this.tasks.length / 10);
    },
    styles() {
      return styles;
    },
  },
  methods: {
    ...mapActions(["setFilter"]),
  },
};
</script>
