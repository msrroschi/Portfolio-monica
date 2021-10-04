<template>
  <div>
    <v-container>
      <v-row class="flex-column">
        <v-col v-for="(img, idx) in photos" :key="idx" cols="6" offset="3">
          <v-img :src="img" @click="selectedImg = img"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-overlay v-if="selectedImg">
      <v-img :src="selectedImg" @click="selectedImg = null"></v-img>
    </v-overlay>
  </div>
</template>

<script>
import { projects } from "../plugins/projects.js";

import { canMata } from "../plugins/canMata.js";
import { elMonstruoDeLasDrogas } from "../plugins/elMonstruoDeLasDrogas.js";
import { kiribati } from "../plugins/kiribati.js";
import { laHistoriaEnElCuerpoDeUnaMujer } from "../plugins/laHistoriaEnElCuerpoDeUnaMujer.js";
import { lasPielesDeGhibli } from "../plugins/lasPielesDeGhibli.js";
import { miNeuropatia } from "../plugins/miNeuropatia.js";
import { mueblesVagabundos } from "../plugins/mueblesVagabundos.js";
import { pulpFiction } from "../plugins/pulpFiction.js";
import { sutura } from "../plugins/sutura.js";

export default {
  name: "Project",
  data: () => ({
    canMata,
    elMonstruoDeLasDrogas,
    kiribati,
    laHistoriaEnElCuerpoDeUnaMujer,
    lasPielesDeGhibli,
    miNeuropatia,
    mueblesVagabundos,
    pulpFiction,
    sutura,
    selectedImg: null,
  }),
  computed: {
    project() {
      return projects.filter(
        (p) => p.name === this.$route.params.projectName
      )[0];
    },
    photos() {
      switch (this.$route.params.projectName) {
        case projects[0].name:
          return this.mueblesVagabundos;
        case projects[1].name:
          return this.miNeuropatia;
        case projects[2].name:
          return this.canMata;
        case projects[3].name:
          return this.laHistoriaEnElCuerpoDeUnaMujer;
        case projects[4].name:
          return this.pulpFiction;
        case projects[5].name:
          return this.lasPielesDeGhibli;
        case projects[6].name:
          return this.sutura;
        case projects[7].name:
          return this.elMonstruoDeLasDrogas;
        case projects[8].name:
          return this.aware;
        case projects[9].name:
          return this.kiribati;
        default:
          return this.mueblesVagabundos;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
