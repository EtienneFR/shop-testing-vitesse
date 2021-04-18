import { inject, provide, ref } from 'vue'
import netlifyIdentity from 'netlify-identity-widget'

const AuthInitializeSymbol = Symbol('AuthInitialize')
const AuthAuthenticateSymbol = Symbol('AuthAuthenticate')
const AuthSignoutSymbol = Symbol('AuthSignout')

type AuthInitializeProvided = (callback: any) => void
type AuthAuthenticateProvided = (callback: any) => void
type AuthSignoutProvided = (callback: any) => void

export function useAuthProvider() {
  const isAuthenticated = ref<boolean>(false)
  const user = ref()

  function initialize(callback: any) {
    window.netlifyIdentity = netlifyIdentity
    netlifyIdentity.on('init', (user) => {
      callback(user)
    })
    netlifyIdentity.init({
      APIUrl: 'https://shop-testing-vitesse.netlify.app/.netlify/identity',
      logo: true,
    })
  }

  function authenticate(callback: any) {
    isAuthenticated.value = true
    netlifyIdentity.open()
    netlifyIdentity.on('login', (user: any) => {
      user.value = user
      callback(user)
      netlifyIdentity.close()
    })
  }

  function signout(callback: any) {
    isAuthenticated.value = false
    netlifyIdentity.logout()
    netlifyIdentity.on('logout', () => {
      user.value = null
      callback()
    })
  }

  provide<AuthInitializeProvided>(AuthInitializeSymbol, initialize)
  provide<AuthAuthenticateProvided>(AuthAuthenticateSymbol, authenticate)
  provide<AuthSignoutProvided>(AuthSignoutSymbol, signout)

  return {
    initialize,
    authenticate,
    signout,
  }
}

export function useAuthContext() {
  const initialize = inject<AuthInitializeProvided>(AuthInitializeSymbol)
  const authenticate = inject<AuthAuthenticateProvided>(AuthAuthenticateSymbol)
  const signout = inject<AuthSignoutProvided>(AuthSignoutSymbol)

  return {
    initialize,
    authenticate,
    signout,
  }
}
