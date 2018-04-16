<template>
  <v-container fluid>
    <child />
  </v-container>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'BasicLayout',

  components: {
    Navbar
  }
}
</script>
