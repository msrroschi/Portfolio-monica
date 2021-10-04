<template>
  <v-app>
    <v-app-bar app>
      <v-btn v-for="(btn, idx) in btns" :key="idx" text :to="btn.route">{{
        btn.name
      }}</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    btns: [
      { name: "Work", route: "/work" },
      { name: "About me", route: "/" },
      { name: "Contact", route: "/contact" },
    ],
  }),
};
</script>

<style scoped></style>
