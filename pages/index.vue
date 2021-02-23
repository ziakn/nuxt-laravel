<template>
  <div >
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
  <div class="bg-gray-100 overflow-x-hidden mt-40">
    <div class="px-6 py-8">
      <div class="flex justify-between container mx-auto">
        <div class="w-full lg:w-8/12">
          <div class="flex items-center justify-between">
            <h1 class="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
            <!-- <div>
                        <select class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            <option>Latest</option>
                            <option>Last Week</option>
                        </select>
                    </div> -->
          </div>
          <div class="max-w-12xl px-2 py-2 mx-auto bg-white rounded-lg shadow-md mt-2 dark:bg-gray-800" >
            <!--Card 1-->
            <div class="w-full lg:max-w-full lg:flex" v-for="(data,index) in dataList" :key="index">
              <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style=" background-image: url('https://picsum.photos/600/400/?random');" title="Mountain"></div>
              <div class="border-gray-400   lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-4">
                  <p class="text-sm text-gray-600 flex items-center">
                    <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/>
                    </svg>
                    Members only
                  </p>
                  <div class="text-gray-900 font-bold text-xl mb-2">
                    {{data.title}}
                  </div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, dolor sit amet, dolor sit amet,
                    dolor sit
                    nihil.
                  </p>
                  <div class="mt-4 ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-2 py-1 bg-green-200 text-green-700 rounded-full" >
                    # Tag
                  </div>
                </div>
                <div class="flex items-center">
                  <img
                    class="w-10 h-10 rounded-full mr-4"
                    src="https://picsum.photos/32/32/?random"
                    alt="Avatar of Writer"
                  />
                  <div class="text-sm">
                    <p class="text-gray-900 leading-none">John Smith</p>
                    <p class="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
   <div class="max-w-12xl px-2 py-2 mx-auto bg-white rounded-lg shadow-lg mt-2  dark:bg-gray-800" >
            <!--Card 1-->
            <div class=" w-full lg:max-w-full lg:flex">
              <!-- <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://picsum.photos/600/400/?random')" title="Mountain">
              </div> -->
              <div class="  border-gray-400  lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-4" >
                  <p class="text-sm text-gray-600 flex items-center">
                    <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div class="text-gray-900 font-bold text-xl mb-2">Best Mountain Trails 2020</div>
                  <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet,  dolor sit amet,  dolor sit amet,  dolor sit amet,  dolor sit amet,  dolor sit amet,  dolor sit amet,  dolor sit amet,  dolor sit amet,  dolor sit amet,   consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            
          <div class="mt-4 ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-2 py-1 bg-green-200 text-green-700 rounded-full">
            # Tag
          </div>
        </div>
                <div class="flex items-center">
                  <img class="w-10 h-10 rounded-full mr-4" src="https://picsum.photos/32/32/?random" alt="Avatar of Writer">
                  <div class="text-sm">
                    <p class="text-gray-900 leading-none">John Smith</p>
                    <p class="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <div class="flex">
              <a
                href="#"
                class="mx-1 px-3 py-2 bg-white text-gray-500 font-medium rounded-md cursor-not-allowed"
              >
                previous
              </a>

              <a
                href="#"
                class="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md"
              >
                1
              </a>

              <a
                href="#"
                class="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md"
              >
                2
              </a>

              <a
                href="#"
                class="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md"
              >
                3
              </a>

              <a
                href="#"
                class="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md"
              >
                Next
              </a>
            </div>
          </div>
        </div>
        <div class="-mx-8 w-4/12 hidden lg:block">
          <div class="px-8">
            <h1 class="mb-4 text-xl font-bold text-gray-700">Authors</h1>
            <div
              class="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md"
            >
              <ul class="-mx-4">
                <li class="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                    alt="avatar"
                    class="w-10 h-10 object-cover rounded-full mx-4"
                  />
                  <p>
                    <a
                      href="#"
                      class="text-gray-700 font-bold mx-1 hover:underline"
                      >Alex John</a
                    ><span class="text-gray-700 text-sm font-light"
                      >Created 23 Posts</span
                    >
                  </p>
                </li>
                <li class="flex items-center mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=333&amp;q=80"
                    alt="avatar"
                    class="w-10 h-10 object-cover rounded-full mx-4"
                  />
                  <p>
                    <a
                      href="#"
                      class="text-gray-700 font-bold mx-1 hover:underline"
                      >Jane Doe</a
                    ><span class="text-gray-700 text-sm font-light"
                      >Created 52 Posts</span
                    >
                  </p>
                </li>
                <li class="flex items-center mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=281&amp;q=80"
                    alt="avatar"
                    class="w-10 h-10 object-cover rounded-full mx-4"
                  />
                  <p>
                    <a
                      href="#"
                      class="text-gray-700 font-bold mx-1 hover:underline"
                      >Lisa Way</a
                    ><span class="text-gray-700 text-sm font-light"
                      >Created 73 Posts</span
                    >
                  </p>
                </li>
                <li class="flex items-center mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"
                    alt="avatar"
                    class="w-10 h-10 object-cover rounded-full mx-4"
                  />
                  <p>
                    <a
                      href="#"
                      class="text-gray-700 font-bold mx-1 hover:underline"
                      >Steve Matt</a
                    ><span class="text-gray-700 text-sm font-light"
                      >Created 245 Posts</span
                    >
                  </p>
                </li>
                <li class="flex items-center mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=373&amp;q=80"
                    alt="avatar"
                    class="w-10 h-10 object-cover rounded-full mx-4"
                  />
                  <p>
                    <a
                      href="#"
                      class="text-gray-700 font-bold mx-1 hover:underline"
                      >Khatab Wedaa</a
                    ><span class="text-gray-700 text-sm font-light"
                      >Created 332 Posts</span
                    >
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-10 px-8">
            <h1 class="mb-4 text-xl font-bold text-gray-700">Categories</h1>
            <div
              class="flex flex-col bg-white px-4 py-6 max-w-sm mx-auto rounded-lg shadow-md"
            >
              <ul>
                <li>
                  <a
                    href="#"
                    class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline"
                    >- AWS</a
                  >
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline"
                    >- Laravel</a
                  >
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline"
                    >- Vue</a
                  >
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline"
                    >- Design</a
                  >
                </li>
                <li class="flex items-center mt-2">
                  <a
                    href="#"
                    class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline"
                    >- Django</a
                  >
                </li>
                <li class="flex items-center mt-2">
                  <a
                    href="#"
                    class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline"
                    >- PHP</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-10 px-8">
            <h1 class="mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
            <div
              class="flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-md"
            >
              <div class="flex justify-center items-center">
                <a
                  href="#"
                  class="px-2 py-1 bg-gray-600 text-sm text-green-100 rounded hover:bg-gray-500"
                  >Laravel</a
                >
              </div>
              <div class="mt-4">
                <a
                  href="#"
                  class="text-lg text-gray-700 font-medium hover:underline"
                  >Build Your New Idea with Laravel Freamwork.</a
                >
              </div>
              <div class="flex justify-between items-center mt-4">
                <div class="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                    alt="avatar"
                    class="w-8 h-8 object-cover rounded-full"
                  /><a
                    href="#"
                    class="text-gray-700 text-sm mx-3 hover:underline"
                    >Alex John</a
                  >
                </div>
                <span class="font-light text-sm text-gray-600"
                  >Jun 1, 2020</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
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