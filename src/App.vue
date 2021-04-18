<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useAuthProvider } from './composables/auth'
import { useState } from './composables/state'

export default defineComponent({
  // Provide user information of authentification
  setup() {
    const { initialize, authenticate, signout } = useAuthProvider()
    const [loggedIn, setLoggedIn] = useState(useAuthProvider.isAuthenticated)
    const [user, setUser] = useState(null)

    const init = () => {
      initialize((user) => {
        setLoggedIn(!!user)
      })
    }

    const login = () => {
      authenticate((user) => {
        setLoggedIn(!!user)
        setUser(user)
      })
    }
    const logout = () => {
      signout(() => {
        setLoggedIn(false)
        setUser(null)
      })
    }

    onMounted(() => {
      init()
    })

    return {
      init,
      login,
      logout,
      loggedIn,
      setLoggedIn,
      user,
      setUser
    }
  }
})
</script>

<template>
  <TheNavbar />
  <div class="w-full h-full">
    <router-view v-slot="{ Component }">
      <transition
        enter-active-class="transition duration-200 ease-out transform"
        enter-from-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in transform"
        leave-from-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
