<template>
  <v-card height="100%" class="d-flex flex-column">
    <v-card-title class="justify-center">
      <h1>Monica Alemany i Esteve</h1>
    </v-card-title>
    <v-container fill-height>
      <v-row class="projectRow">
        <v-col
          cols="6"
          md="3"
          v-for="(project, idx) in projects"
          :key="idx"
          class="projectCol d-flex justify-center align-center"
        >
          <router-link
            :to="{ path: '/project/' + project.name }"
            class="iconContainer"
          >
            <v-img
              :src="project.icon"
              :alt="project.name"
              class="rounded-lg"
            ></v-img>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { projects } from "../plugins/projects.js";

export default {
  name: "Home",
  data: () => ({
    projects,
  }),
};
</script>

<style scoped>
.projectRow {
  /* border: 1px solid black; */
  height: 100%;
  width: 100%;
}
.projectCol {
  /* border: 1px solid red; */
  width: 50%;
}
.iconContainer {
  height: 95%;
  width: 95%;
  max-height: 350px;
  max-width: 350px;
}

.projectCol:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
</style>
