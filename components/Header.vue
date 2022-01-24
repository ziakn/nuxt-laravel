<template>
  <!-- <div>
    <v-app-bar color="white lighten-4" app>
      <v-toolbar-title class="ml-2">
        <NuxtLink style="text-decoration: none; color: inherit" :to="'/'"
          >zezublog</NuxtLink
        >
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
    </v-app-bar>
  </div> -->
     <v-app-bar
      app
      color="white"
      flat
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>
       <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>
</template>


<script>
export default {
  components: {},
  data: () => ({
    dataList: [],
    links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
  }),
  async fetch() {
    try {
      let { data } = await this.$axios({
        method: 'get',
        url: '/category',
      })
      this.dataList = data
    } catch (e) {
      // this.fail();
    } finally {
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
          content: ' zia My custom description',
        },
      ],
    }
  },

  props: {
    source: String,
  },

  computed: {},

  watch: {},

  created() {},

  methods: {
    initialize() {},
  },
}
</script>

