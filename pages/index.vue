<template>
      <v-container fluid>
		 <v-row justify="center">
	<v-col sm="12" lg="2" md="2">
		<Category  @send="getCategoryId"></Category>
        </v-col>
    	<v-col sm="12" lg="6" md="6">
		<Listing :category_id="category_id"></Listing>
        </v-col>
		<v-col sm="12" lg="2" md="2">
		<Category  @send="getCategoryId"></Category>
        </v-col>
 </v-row>
     </v-container>
</template>

<script>
import Category from '../components/Category.vue'
import Listing from '../components/Listing.vue'
  export default {
  components: { Listing, Category },
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
