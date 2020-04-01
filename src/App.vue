<template>
  <v-app>
    <v-app-bar app color="purple" dark>
      <div class="d-flex align-center">Magenta</div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
