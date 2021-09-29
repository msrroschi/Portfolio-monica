<template>
  <v-card height="100%" class="d-flex flex-column">
    <v-card-title class="justify-center"> <h1>Dimonica</h1> </v-card-title>
    <v-container fill-height>
      <v-row class="projectRow">
        <v-col
          cols="6"
          md="3"
          v-for="(project, idx) in projects"
          :key="idx"
          class="projectCol d-flex justify-center align-center"
        >
          <router-link to="/" class="iconContainer">
            <v-img
              :src="project.img"
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
import MUEBLES_VAGABUNDOS from "../assets/icons/MUEBLES_VAGABUNDOS.png";
import MI_NEUROPATIA from "../assets/icons/MI_NEUROPATIA.png";
import CAN_MATA from "../assets/icons/CAN_MATA.png";
// import CAN_MATA_ESTAMPADOS from "../assets/icons/CAN_MATA_ESTAMPADOS.png";
import LA_HISTORIA_EN_EL_CUERPO_DE_LA_MUJER from "../assets/icons/LA_HISTORIA_EN_EL_CUERPO_DE_LA_MUJER.png";
import EDITORIAL_PULP_FICTION from "../assets/icons/EDITORIAL_PULP_FICTION.png";
import LAS_PIELES_DE_GHIBLI from "../assets/icons/LAS_PIELES_DE_GHIBLI.png";
import SUTURA from "../assets/icons/SUTURA.png";
import EL_MONSTRUO_DE_LAS_DROGAS from "../assets/icons/EL_MONSTRUO_DE_LAS_DROGAS.png";
import AWARE from "../assets/icons/AWARE.png";
import KIRIBATI from "../assets/icons/KIRIBATI.png";
// import KIRIBATI_EDITORIAL from "../assets/icons/KIRIBATI_EDITORIAL.png";

export default {
  name: "Home",
  data: () => ({
    projects: [
      {
        name: "MUEBLES VAGABUNDO",
        img: MUEBLES_VAGABUNDOS,
      },
      {
        name: "MI NEUROPATIA",
        img: MI_NEUROPATIA,
      },
      { name: "CAN MATA", img: CAN_MATA },
      // {
      //   name: "CAN MATA ESTAMPADOS",
      //   img: CAN_MATA_ESTAMPADOS,
      // },
      {
        name: "LA HISTORIA EN EL CUERPO DE LA MUJER",
        img: LA_HISTORIA_EN_EL_CUERPO_DE_LA_MUJER,
      },
      {
        name: "EDITORIAL PULP FICTION",
        img: EDITORIAL_PULP_FICTION,
      },
      {
        name: "LAS PIELES DE GHIBLI",
        img: LAS_PIELES_DE_GHIBLI,
      },
      { name: "SUTURA", img: SUTURA },
      {
        name: "EL MONSTRUO DE LAS DROGAS",
        img: EL_MONSTRUO_DE_LAS_DROGAS,
      },
      { name: "AWARE", img: AWARE },
      { name: "Kiribati", img: KIRIBATI },
      // {
      //   name: "Kiribati Editorial",
      //   img: KIRIBATI_EDITORIAL,
      // },
    ],
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
  border: 1px solid red;
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
