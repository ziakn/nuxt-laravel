<template>
  <div class="container mx-auto">
      <Logo />
      <h1 class="title">
        nuxtlaravel {{ $auth.user.data.email}}
      </h1>
  <NuxtLink to="/about">
      About
    </NuxtLink>
 <NuxtLink to="/account">
      account
    </NuxtLink>
<br>
 <NuxtLink to="/fun">
      Fun
    </NuxtLink>
    </div>
</template>

<script >
</script>
