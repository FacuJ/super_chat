<template>
  <q-layout view="LHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$route.fullPath.includes('/chat')"
          v-go-back.single
          icon="arrow_back"
          flat
          no-caps
          label="Volver"/>
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>

        <q-btn
          to="/auth"
          class="absolute-right q-pr-sm"
          icon="account_circle"
          no-caps
          flat
          dense
          label="Login"
        />
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
