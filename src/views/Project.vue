<template>
  <div>
    <v-container>
      <v-row class="flex-column">
        <v-col
          v-for="(img, idx) in project.images"
          :key="idx"
          cols="6"
          offset="3"
        >
          <v-img :src="img" @click="selectedImg = img"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-overlay v-if="selectedImg">
      <v-img :src="selectedImg" v-click-outside="closeOverlay"></v-img>
    </v-overlay>
  </div>
</template>

<script>
import { projects } from "../plugins/projects.js";

export default {
  name: "Project",
  data: () => ({
    selectedImg: null,
  }),
  methods: {
    closeOverlay() {
      this.selectedImg = null;
    },
  },
  computed: {
    project() {
      return projects.filter(
        (p) => p.name === this.$route.params.projectName
      )[0];
    },
  },
};
</script>

<style lang="scss" scoped></style>
