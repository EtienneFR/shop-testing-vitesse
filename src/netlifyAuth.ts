import netlifyIdentity from 'netlify-identity-widget'

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  initialize(callback: any) {
    window.netlifyIdentity = netlifyIdentity
    netlifyIdentity.on('init', (user) => {
      callback(user)
    })
    netlifyIdentity.init({
      APIUrl: 'https://shop-testing-vitesse.netlify.app/.netlify/identity',
      logo: true,
    })
  },
  authenticate(callback: any) {
    this.isAuthenticated = true
    netlifyIdentity.open()
    netlifyIdentity.on('login', (user: any) => {
      this.user = user
      callback(user)
      netlifyIdentity.close()
    })
  },
  signout(callback: any) {
    this.isAuthenticated = false
    netlifyIdentity.logout()
    netlifyIdentity.on('logout', () => {
      this.user = null
      callback()
    })
  },
}

export default netlifyAuth
