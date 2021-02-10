<template>
  <div>
    <p>Name: {{ $auth.user.data.email}}</p>
  </div>
</template>


<script>

export default {
middleware: 'auth',
}
</script>