<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col sm="12" lg="2" md="2">
        <Category @send="getCategoryId"></Category>
      </v-col>
      <v-col sm="12" lg="6" md="6">
        <v-card color="white lighten-4" class="elevation-5 mb-3">
          <v-card-title>{{ dataList.title }}</v-card-title>
          <v-card-text v-html="dataList.description"></v-card-text>
        </v-card>
      </v-col>
      <v-col sm="12" lg="2" md="2">
        <Category @send="getCategoryId"></Category>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data: () => ({
    dataList: {
      category_id:null
    },
  }),

  head() {
    return {
      title: this.dataList.title,
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

  props: {},

  computed: {},

  watch: {},

  async fetch() {
    try {
      let { data } = await this.$axios({
        method: 'get',
        url: '/blog/' + this.$route.params.id,
      })
      this.dataList = data
    } catch (e) {
      console.log(e)
    } finally {
      // this.finish();
    }
  },

  created() {},

  methods: {
    initialize() {},
 getCategoryId(data)
        {
            this.category_id=data.id
        }
  },
   
}
</script>