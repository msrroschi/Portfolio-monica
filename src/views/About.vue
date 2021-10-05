<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="d-flex justify-center flex-column" flat>
          <v-img
            src="../assets/about me.png"
            height="500px"
            width="500px"
            class="align-self-center"
          ></v-img>
          <v-card-text class="text-h5">
            I'm a young wild soul that really loves creating new things inspired
            by my experiences and travels. I like to find a middle point between
            science and fashion. I'm an extrovert person who loves to discover
            new things and doing them with efficiency.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6" offset="3" v-for="(img, idx) in portfolio" :key="idx">
        <v-img :src="img" alt="portfolio" @click="selectedImg = img"></v-img>
      </v-col>
    </v-row>
    <v-overlay v-if="selectedImg">
      <v-img :src="selectedImg" v-click-outside="closeOverlay"></v-img>
    </v-overlay>
  </v-container>
</template>

<script>
import { portfolio } from "../plugins/portfolio.js";

export default {
  name: "About me",
  data: () => ({
    portfolio,
    selectedImg: null,
  }),
  methods: {
    closeOverlay() {
      this.selectedImg = null;
    },
  },
};
</script>
