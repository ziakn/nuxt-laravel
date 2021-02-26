<template>
     <v-row justify="center">
		 <v-col cols="2">
		<Category></Category>
        </v-col>
        <v-col cols="6">
		<Detail></Detail>
        </v-col>
		<v-col cols="2">
		<Category></Category>
        </v-col>
</v-row>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>