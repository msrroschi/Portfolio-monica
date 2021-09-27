<template>
  <v-card>
    <v-card-title class="justify-center"> <h1>Dimonica</h1> </v-card-title>
    <v-container>
      <v-row>
        <v-col
          class="rounded-circle"
          border="top"
          cols="3"
          v-for="(project, idx) in projects"
          :key="idx"
        >
          {{ project.name }}
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    projects: [
      { name: "MUEBLES VAGABUNDO" },
      { name: "MI NEUROPATIA" },
      { name: "CAN MATA" },
      { name: "CAN MATA ESTAMPADOS" },
      { name: "LA HISTORIA EN EL CUERPO DE LA MENTE" },
      { name: "EDITORIAL PULP FICTION" },
      { name: "LAS PIELES DE GHIBLI" },
      { name: "SUTURA" },
      { name: "EL MONSSTRUO DE LAS DROGAS" },
      { name: "AWARE" },
      { name: "Kiribati" },
      { name: "Kiribati Editorial" },
    ],
  }),
};
</script>

<style scoped>
/* .project {
  border-color: black !important;
  border-width: 2px !important;
} */
</style>
