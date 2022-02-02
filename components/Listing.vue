<template>
  <!-- <v-row> -->
<!--
    <v-col cols="12" >


      <v-card
        color="white lighten-4"
        class="elevation-5 mb-3"
        v-for="(data, index) in dataList"
        :key="index"
      >
          <v-hover>
       <template v-slot:default="{ hover }">
 <div
          :class="`elevation-${hover ? 24 : 6}`"
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
                  class="elevation-6"
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
                <!-- <span class="mr-1">·</span>
          <v-icon class="mr-1">   mdi-share-variant </v-icon>
          <span class="subheading">45</span> -->
              <!-- </v-row>
            </v-list-item> -->
          <!-- </v-card-actions> -->
        <!-- </NuxtLink> -->
<!-- </div>
       </template>
          </v-hover>

      </v-card>
      <div class="text-center">
        <v-pagination
          v-model="filters.page"
          :length="pageCount"
          :total-visible="10"
          @input="getfetch"
        ></v-pagination>
      </div>
    </v-col>
  </v-row> -->


  <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
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
          @input="getfetch"
        ></v-pagination>
      </div>
            </v-sheet>
          </v-col>
</template>


<script>
export default {
  components: {},
  data: () => ({
    itemsPerPage: 1,
    pageCount: 2,
    dataList: [],
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

            },

  watch: {


    category_id() {
      this.getfetch()
    },
  },

  async fetch() {
    try {
      if(this.$store.state.category_id)
      {
         this.filters.category_id = this.$store.state.category_id

      }
      let { data } = await this.$axios({
        method: 'get',
        url: '/blog',
        params: this.filters,
      })
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

  created() {

  },

  methods: {
    initialize() {
      // this.getOrder();
    },

    getfetch() {


          this.filters.category_id = this.category_id


      this.$fetch()
    },
  },
}
</script>
