<template>
		 <v-row>
		<Category  @send="getCategoryId"></Category>
		<Listing :category_id="category_id"></Listing>
		<Category  @send="getCategoryId"></Category>
 </v-row>
</template>

<script>
export default {
  components: {},
  data: () => ({
    dataList: {
      category_id: null,
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
    getCategoryId(data) {
      this.$store.commit('getCategoryId', data.id)
      this.$router.push('/')
    },
  },
}
</script>
