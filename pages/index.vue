<template>
       <v-row justify="center">
		 <v-col cols="2">
		<Category></Category>
        </v-col>
        <v-col cols="6">
		<Listing></Listing>
        </v-col>
		<v-col cols="2">
		<Category></Category>
        </v-col>
</v-row>
</template>

<script>
import Category from '../components/Category.vue'
import Listing from '../components/Listing.vue'
  export default {
  components: { Listing, Category },
    data: () => ({
      
    }),
  }
</script>
// <script>
// export default {
// 	components: {
// 	},
// 	data: () => ({
//     itemsPerPage:1,
//     pageCount:2,
// 		dataList: [],
//     filters:
//         {
//             show:20,
// 			      page:1,
//         },

// 	}),
 	
// 	head() {
//       return {
//         title: 'zia description',
//         meta: [
//           // hid is used as unique identifier. Do not use `vmid` for it as it will not work
//           {
//             hid: 'zia description',
//             name: 'zia  description',
//             content: ' zia My custom description'
//           }
//         ]
//       }
//     },

// 	props: 
// 	{
// 		source: String
// 	},

 

// 	computed: 
// 	{
		
// 	},
	
// 	watch: {},
// 	async  fetch () 
// 		{
			
// 			try 
// 			{
// 				let { data } = await this.$axios({
// 					method: "get",
// 					url: "/blog",
//            params: this.filters
// 				});
// 				this.dataList = data.data;
//         this.itemsPerPage=data.per_page;
//         this.pageCount=data.last_page;
//         this.filters.page=data.current_page
// 			} 
// 			catch (e) 
// 			{
// 				// this.fail();
// 			}
// 			finally
// 			{
// 				// this.finish();
// 			}
// 		},

// 	created() 
// 	{
		
// 	},

	
	
// 	methods: {
		

// 		 initialize() 
// 		{
// 			// this.getOrder();
// 		},

// 		async  getOrder()
// 		{
// 			// this.start();
// 			try 
// 			{
// 				let { data } = await this.$axios({
// 					method: "get",
// 					url: "/posts",
// 				});
// 				this.dataList = data.data;
// 			} 
// 			catch (e) 
// 			{
// 				// this.fail();
// 			}
// 			finally
// 			{
// 				// this.finish();
// 			}
// 		},
// 	}
// };
// </script>