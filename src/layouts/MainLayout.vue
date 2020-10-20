<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  computed: {
    title () {
      const currentPath = this.$route.fullPath
      if (currentPath === '/') return 'Super Chat'
      else if (currentPath === '/chat') return 'Chat'
      else if (currentPath === '/login_register') return 'Login'
    }
  }
}
</script>
