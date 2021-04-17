import netlifyIdentity from 'netlify-identity-widget'

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  initialize(callback: any) {
    window.netlifyIdentity = netlifyIdentity
    netlifyIdentity.init({
      APIUrl: 'https://shop-testing-vitesse.netlify.app/',
      logo: true, // you can try false and see what happens
    })
    netlifyIdentity.on('init', (user) => {
      callback(user)
    })
    netlifyIdentity.init()
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
