<template>
  <div class="flex h-screen items-center justify-center">
    <form ref="loginform" @submit.prevent="save" class="w-1/4 mx-auto p-4">
      <h1 class="font-semibold mb-2 text-xl">
        Save Data
      </h1>
      <div class="mb-4">
        <label for="text" class="block mb-1 text-sm">Title</label>
        <input
          type="text"
          v-model="editedItem.title"
          class="w-full border rounded px-3 py-2"
        />
      </div>
      <div class="mb-4">
        <label for="text" class="block mb-1 text-sm">Description</label>
        <input
          type="text"
         v-model="editedItem.description"
          class="w-full border rounded px-3 py-2"
        />
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-white font-semibold py-2 px-10 w-full rounded"
      >
        save
      </button>
    </form>
  </div>
</template>

<script>
export default {
middleware: 'auth',
  data() {
    return {
      editedItem: 
        {
            title: '',
            description: '',
        }
    }
  },
  methods: {

    async save() 
		{
			
				try 
				{
					let { data } = await this.$axios({
						method: "post",
						url: "/posts",
						data: this.editedItem
					});
					if (data) 
					{
              this.$notify.success({title: 'Hooray',message: 'I am using iziToast!', color: 'green',})

					} 
					else 
					{
              this.$notify.success({title: 'Hooray',message: 'I am using iziToast!'})
					}
				} catch (e) {
					this.loading = false;
				}
			
		},
  }
}
</script>