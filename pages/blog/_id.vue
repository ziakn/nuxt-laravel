<template>
  <v-row justify="center">
    <v-col cols="2">
      <Category></Category>
    </v-col>
    <v-col cols="6">
      <v-row>
        <v-col cols="12">
          <v-card  class="mx-auto">
            <v-card-title>{{dataList.title}}</v-card-title>
            <quill-editor v-model="dataList.description" />
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="2">
      <Category></Category>
    </v-col>
  </v-row>
</template>

<script>
export default {
	components: {
	},
	data: () => ({
		dataList: {},
  
	}),
 	
	head() {
      return {
        title: this.dataList.title,
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
	},

	computed: 
	{
		
	},
	
	watch: 
  {
     
  },

	async fetch () 
		{
			try 
			{
				let { data } = await this.$axios({
					method: "get" ,
					url: "/blog/"+ this.$route.params.id,
				});
				this.dataList = data;
			} 
			catch (e) 
			{
				console.log(e)
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
		

		initialize() 
		{
		},

		
	}
};
</script>