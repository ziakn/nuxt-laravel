<template>
		<Listing :category_id="category_id"></Listing>
</template>

<script>
  export default {
    data: () => ({
      category_id:null
    }),

     methods: {
        getCategoryId(data)
        {
            this.category_id=data.id
        }
     }
  }
</script>
