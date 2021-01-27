<template>
  <section class="container mx-auto">
    <div class="grid grid-cols-3 gap-8">
      <div class="col-span-1 bg-gray-200 px-4 pb-12">
        <Logo width="100%" height="250"/>

        <h3 class="text-xl mb-4">My Blog</h3>
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
           <nuxt-link :to="'/about/' +2">Id</nuxt-link>
  <NuxtLink :to="'/about/' + slug" >Slug</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="col-span-2">
        <div class="mt-12">
          <h1 class="text-5xl pb-2">Some title</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Logo from "~/components/Logo.vue";
// import Header from "~/components/Header.vue";

export default {
  components: {
    // Logo,
// Header
  },

data()
{
  return{
 slug:'abc',
}
}

};
</script>