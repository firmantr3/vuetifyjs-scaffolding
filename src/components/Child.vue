<template>
  <v-content>
    <v-fade-transition>
      <slot>
        <router-view/>
      </slot>
    </v-fade-transition>
  </v-content>
</template>

<script>
export default {
  name: 'Child'
}
</script>
