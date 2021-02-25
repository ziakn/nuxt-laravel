<template>

    <!-- <nav class="bg-white shadow-md dark:bg-gray-800  p-2 mt-0 fixed w-full z-10 top-0 h-auto">
        <div class="container px-6 py-3 mx-auto ">
            <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <a class="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Al-Sharq Technology</a>

                        <div class="hidden mx-10 md:block">
                            <div class="relative">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </span>

                                <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search">
                            </div>
                        </div>
                    </div>

                    <div class="flex md:hidden">
                        <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="items-center md:flex">
                    <div class="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                        <a class="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Home</a>
                        <a class="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Blog</a>
                        <a class="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Compoents</a>
                        <a class="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Courses</a>
                    </div>

                    <div class="flex items-center py-2 -mx-1 md:mx-0">
                        <a class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded hover:bg-blue-600 md:mx-2 md:w-auto" href="#">Login</a>
                        <a class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 md:mx-0 md:w-auto" href="#">Join free</a>
                    </div>

                    <div class="mt-3 md:hidden">
                        <div class="relative">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>

                            <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search">
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">
                <a class="mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0" v-for="(data,index) in dataList" :key="index">{{data.title}}</a>
            </div>
        </div>
    </nav> -->
<v-app-bar      color="white lighten-4"  app>
      <v-toolbar-title class="ml-2">
        Al Sharq Technology
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

 <style>
    .scroll-hidden::-webkit-scrollbar {
        height: 0px;
        background: transparent; /* make scrollbar transparent */
    }
    </style>