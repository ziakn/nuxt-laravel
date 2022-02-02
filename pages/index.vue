<template>
		 <v-row>
		<Category  @send="getCategoryId"></Category>
		<Listing :category_id="category_id"></Listing>
		<Category  @send="getCategoryId"></Category>
 </v-row>
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
