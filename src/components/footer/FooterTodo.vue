<template>
  <div :class="styles.containerBottom">
    <div :class="styles.leftText">
      <p :class="styles.textPages">1/{{ totalPages }}</p>
      <p :class="styles.textAction">tasks left</p>
    </div>
    <div :class="styles.rightText">
      <button
        @click="setFilter('all')"
        :class="[styles.textButton, filter === 'all' ? styles.active : '']"
      >
        All
      </button>
      <button
        @click="setFilter('active')"
        :class="[styles.textButton, filter === 'active' ? styles.active : '']"
      >
        Active
      </button>
      <button
        @click="setFilter('completed')"
        :class="[
          styles.textButton,
          filter === 'completed' ? styles.active : '',
        ]"
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
