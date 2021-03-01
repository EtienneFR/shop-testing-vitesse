import { axios } from 'axios'

axios
  .get('https://api.unsplash.com/search/photos?orientation=landscape&query=products', { headers: { Authorization: 'test' } })
  .then((response) => {
    this.info = response.data
  })
  .catch((error) => {
    console.log(error)
    this.errored = true
  })
  .finally(() => this.loading = false)
