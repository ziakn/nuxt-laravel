<template>
  <v-row  >
  <v-col cols="12" >
  <v-card tile>
      <v-list nav dense>
       <v-subheader>Category</v-subheader>
         <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(data, index) in dataList" :key="index">

            <v-list-item-content>
              <v-list-item-title @click="sendCategoryId(data)">{{data.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
         </v-list-item-group>
      </v-list>
  </v-card>
        </v-col>
  </v-row>
</template>
<script>
export default {
	components: {
	},
	data: () => ({
    selectedItem:null,
    itemsPerPage:1,
    pageCount:2,
	dataList: [],
    filters:
        {
            show:20,
			page:1,
        },

	}),
 	
	head() {
      return {
        title: 'zia description',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'zia description',
            name: 'zia  description',
            content: ' zia My custom description'
          }
        ]
      }
    },

	props: 
	{
		source: String
	},

 

	computed: 
	{
		
	},
	
	watch: {},
	async  fetch () 
		{
			
			try 
			{
				let { data } = await this.$axios({
					method: "get",
					url: "/category",
           params: this.filters
				});
				this.dataList = data.data;
			} 
			catch (e) 
			{
				// this.fail();
			}
			finally
			{
				// this.finish();
			}
		},

	created() 
	{
		
	},

	
	
	methods: {
		sendCategoryId(data)
		{
			 this.$emit('send', data)
		},
	}
};
</script>