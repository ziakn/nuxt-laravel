<template>
     
		 <v-row justify="center">
	<v-col sm="12" lg="2" md="2" >
		<Category  @send="getCategoryId"></Category>
        </v-col>
    	<v-col sm="12" lg="6" md="6">
		<Listing :category_id="category_id"></Listing>
        </v-col>
		<v-col sm="12" lg="2" md="2">
		<Category  @send="getCategoryId"></Category>
        </v-col>
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
