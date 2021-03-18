<template>
<div>
<v-app-bar      color="white lighten-4"  app>
      <v-toolbar-tile class="ml-2">
       <NuxtLink style="text-decoration: none; color: inherit;" :to="'/'">zezublog</NuxtLink> 
      </v-toolbar-tile>
        <v-text-field 
        class="ml-2"
        hide-details
        flat
        rounded
        outlined
        dense
        label="Search"
        ></v-text-field>
  <v-spacer></v-spacer>

    </v-app-bar>
</div>
</template>


<script>
export default {
	components: {
	},
	data: () => ({
		dataList: [],

	}),
async  fetch () 
		{
			
			try 
			{
				let { data } = await this.$axios({
					method: "get",
					url: "/category",
				});
				this.dataList = data;
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
	

	created() 
	{
		
	},

	
	
	methods: {
		

		 initialize() 
		{
			
		},

	
	}
};
</script>

