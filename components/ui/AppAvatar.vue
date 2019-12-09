<template>
  <v-container class="offset">
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-avatar :size="118">
          <img class="border" src="https://avatars2.githubusercontent.com/u/7065004?s=460&v=4" alt="Test">
        </v-avatar>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="auto">
        <h3 class="body-2 font-weight-light Itext-uppercase">
          Test
        </h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .offset {
    margin-top: -93px;
  }

  .border {
    border: 3px solid white;
  }
</style>
