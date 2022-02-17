<template>
  <v-app>
    <Header />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <Category @send="getCategoryId"></Category>
          <Nuxt keep-alive :keep-alive-props="{ max: 10 }" />
          <Category @send="getCategoryId"></Category>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>
<script>
  export default {
    data: () => ({
      category_id:null
    }),

     methods: {
        getCategoryId(data)
        {
            this.category_id=data.id
        }
     }
  }
</script>

