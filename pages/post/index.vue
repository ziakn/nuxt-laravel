<template>
<div>
<p class="text-lg text-center font-bold m-5">Data List</p>
<p class="text-lg text-center font-bold m-5">  <NuxtLink :to="'/post/store'"><button class="p-2 my-2 bg-red-500 text-white rounded-md focus:outline-none focus:ring-2 ring-primary-300 ring-offset-2">Save</button></NuxtLink></p>
<table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
  <tbody> 
 <tr class="text-left border-b-2 border-gray-300">
  
    <th class="px-4 py-3">Id</th>
    <th class="px-4 py-3">Auth id</th>
    <th class="px-4 py-3">title</th>
    <th class="px-4 py-3">Description</th>
  </tr>
  <tr v-for="(data,index) in dataList" :key="index" class="bg-gray-100 border-b border-gray-200">
    <td class="px-4 py-3">{{data.id}}</td>
    <td class="px-4 py-3">{{data.user_id}}</td>
    <td class="px-4 py-3">{{data.title}}</td>
    <td class="px-4 py-3">{{data.description}}</td>
  </tr> 
</tbody>
</table>
</div>
</template>

<script>
export default {
	components: {
	},
	data: () => ({
		dataList: [],

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
		formTitle() 
		{
			return this.editedIndex === -1 ? "New  Order" : "Edit  Order";
		}
	},
	
	watch: {},
	async  fetch () 
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

<style>
    body{background:white!important;}
</style>