<template>
   <v-container>
       <v-row dense>
        <v-col cols="12">
      <!-- <Logo />
      <h1 class="title">
        nuxtlaravel {{ $auth.user.email}}
      </h1>
  <NuxtLink to="/about">
      About
    </NuxtLink>
 <NuxtLink to="/account">
      account
    </NuxtLink>
<br>
 <NuxtLink to="/fun">
      Fun
    </NuxtLink> -->
 

        </v-col>
</v-row>
   </v-container>
</template>


<script>
export default {
	components: {
	},
	data: () => ({
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
					url: "/blog",
           params: this.filters
				});
				this.dataList = data.data;
        this.itemsPerPage=data.per_page;
        this.pageCount=data.last_page;
        this.filters.page=data.current_page
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
		

		 initialize() 
		{
			// this.getOrder();
		},

		async  getOrder()
		{
			// this.start();
			try 
			{
				let { data } = await this.$axios({
					method: "get",
					url: "/posts",
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
	}
};
</script>