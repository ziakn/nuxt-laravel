<template>
       <v-row >
        <v-col cols="12">
			 <v-card color="white lighten-4" class="mb-3" v-for="(data,index) in dataList" :key="index">
            <div class="d-flex flex-no-wrap justify-space-between">
				 <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
              </v-avatar>
			  
			  <v-card-text>
			<div>	{{data.created_at}}</div>
			<p class="display-1 text--primary">
			{{data.title}}
			</p>
			<p>You may find interesting facts, ideas, thoughts, and observations all day long and it's better to note them down as every thought is valuable. That's why we created this Notes Journal. This is a single list to add your points but what's interesting is a small enhancement that we added to it and that's MIND PALACE.</p>
			<div class="text--primary">
				<v-chip
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    # START RADIO
                  </v-chip>
				  <v-chip
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    # Tag
                  </v-chip>
				  <v-chip
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    # Tag
                  </v-chip>
				  
			</div>
			</v-card-text>
             
            </div>
			<v-divider></v-divider>
               <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Evan You</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
		 <v-icon class="mr-1">
            mdi-eye
          </v-icon>
          <span class="subheading mr-2">256</span>
		   <span class="mr-1">·</span>
          <v-icon class="mr-1">
            mdi-heart
          </v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">
            mdi-share-variant
          </v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
          </v-card>
 
     	 <v-card color="white lighten-4" class="mb-3">
            <div class="d-flex flex-no-wrap justify-space-between">
				 <!-- <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
              </v-avatar> -->
			  
			  <v-card-text>
			<div>Saturday, February 27, 2021</div>
			<p class="display-1 text--primary">
			Ultimate Cheatsheet Compilation
			</p>
			<p>You may find interesting facts, ideas, thoughts, and observations all day long and it's better to note them down as every thought is valuable. That's why we created this Notes Journal. This is a single list to add your points but what's interesting is a small enhancement that we added to it and that's MIND PALACE.</p>
			<div class="text--primary">
				<v-chip
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    # START RADIO
                  </v-chip>
			</div>
			</v-card-text>
             
            </div>
			<v-divider></v-divider>
               <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Evan You</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
		 <v-icon class="mr-1">
            mdi-eye
          </v-icon>
          <span class="subheading mr-2">256</span>
		   <span class="mr-1">·</span>
          <v-icon class="mr-1">
            mdi-heart
          </v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">
            mdi-share-variant
          </v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
          </v-card>
		 

        </v-col>
</v-row>
</template>

// <script>
//   export default {
//     data: () => ({
//       items: [
//         {
//           color: '#1F7087',
//           src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
//           title: 'Supermodel',
//           artist: 'Foster the People',
//         },
//         {
//           color: '#952175',
//           src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
//           title: 'Halcyon Days',
//           artist: 'Ellie Goulding',
//         },
//       ],
//     }),
//   }
// </script>
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