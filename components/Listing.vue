<template>

  <v-col cols="12" sm="8">
            <v-sheet min-height="30vh" rounded="lg">
               <v-card
        class=" mb-5"
        outlined
        v-for="(data, index) in dataList"
        :key="index"
      >

 <div

          class="mx-auto pa-6 transition-swing"
        >
        <NuxtLink
          style="text-decoration: none; color: inherit"
          :to="'/blog/' + data.id"
        >
          <div  class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-3" size="125" tile v-if="data.image">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
              ></v-img>
            </v-avatar>
            <v-card-text>
              <div>{{ data.created_at }}</div>
              <p class="display-1 text--primary">
                {{ data.title }}
              </p>
              <div class="text--primary">
                <v-chip class="ml-2 mt-5" outlined rounded small>
                  # START RADIO</v-chip
                >
                <v-chip class="ml-2 mt-5" outlined rounded small>
                  # START RADIO</v-chip
                >
                <v-chip class="ml-2 mt-5" outlined rounded small>
                  # START RADIO</v-chip
                >
                <v-chip class="ml-2 mt-5" outlined rounded small>
                  # START RADIO</v-chip
                >
                <v-chip class="ml-2 mt-5" outlined rounded small>
                  # START RADIO</v-chip
                >
                <v-chip class="ml-2 mt-5" outlined rounded small>
                  # START RADIO</v-chip
                >
              </div>
            </v-card-text>
          </div>
          <v-divider></v-divider>
          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-1"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Evan You</v-list-item-title>
              </v-list-item-content>
              <v-row align="center" justify="end">
                <v-icon class="mr-1"> mdi-eye </v-icon>
                <span class="subheading mr-2">{{ data.viewed }}</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1"> mdi-heart </v-icon>
                <span class="subheading mr-2">{{ data.liked }}</span>
                <span class="mr-1">·</span>
          <v-icon class="mr-1">   mdi-share-variant </v-icon>
          <span class="subheading">45</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </NuxtLink>
</div>

      </v-card>
      <div class="text-center">
        <v-pagination
          v-model="filters.page"
          :length="pageCount"
          :total-visible="10"
          @input="getBlog()"
        ></v-pagination>
      </div>
            </v-sheet>
          </v-col>
</template>


<script>
// import Blog from '~/pages/api/blog.js';
export default {
  components: {},
  async fetch(){
        try {



            this.filters.page= parseInt(this.$route.params.number);

          let { data } = await this.$axios({
              method: "get",
              url: "/blog",
              params: this.filters
            });
          this.dataList = data.data
          this.itemsPerPage = data.per_page
          this.pageCount = data.last_page
          this.filters.page = data.current_page
        } catch (e) {
          // this.fail();
        } finally {
          // this.finish();
        }
      },
  data: () => ({
    itemsPerPage: 1,
    pageCount: 2,
    dataList: [],
    currentUrl:'',
    filters: {
      show: 3,
      page: 1,
      category_id: null,
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
          content: ' zia My custom description',
        },
      ],
    }
  },

  props: {
    category_id: '',
  },

  computed: {

            getCategory(){
                           this.filters.category_id = this.$store.getters.getCategoryId;

            }

            },

  watch: {

  },
  activated() {
    // Call fetch again if last fetch more than a minute ago
    // if (this.$fetchState.timestamp <= Date.now() - 15000) {
    //   this.$fetch()
    // }
  },



  created() {
 this.initialize()
  },


  methods: {
    initialize() {

    },
     async getBlog(){


       this.$router.push('/pages/'+this.filters.page);
        this.$fetch();
      },

      checkURLParams()
      {
            history.replaceState({}, null, '/?page='+this.filters.page)

            const queryString = window.location.search;
            console.log(queryString);
            const urlParams = new URLSearchParams(queryString);
            const page = urlParams.get('page')
            this.filters.page = parseInt(page);
            this.getCategory();
            console.log(this.filters.page);


      },
  },
}
</script>
