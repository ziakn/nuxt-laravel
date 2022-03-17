<template>
  <v-col cols="12" sm="8">
    <v-sheet min-height="30vh" rounded="lg">
      <div v-html="dataList.description"></div>
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  components: {},
  data: () => ({
    dataList: Object,
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
    console.log('hi'+this.$route.params.id)
    try {
      let { data } = await this.$axios({
        method: 'get',
        url: '/blog/' + this.$route.params.id,
      })
      this.dataList = data
      console.log(this.dataList)
    } catch (e) {
      console.log(e)
    } finally {
      // this.finish();
    }
  },

  created() {},

  methods: {
    initialize() {},
  },
}
</script>
