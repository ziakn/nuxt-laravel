<template>

<v-app-bar      color="white lighten-4"  app>
      <v-toolbar-title class="ml-2">
        Ze Zu Blog
      </v-toolbar-title>
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
  <v-button class="ml-4 mr-4">
        Home
      </v-button>
<v-button class="ml-4 mr-4">
        Blog
      </v-button>
<v-button class="ml-4 mr-4">
        Componennt
      </v-button>
<v-button class="ml-4 mr-4">
        courses
      </v-button>
    </v-app-bar>

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

