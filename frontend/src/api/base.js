import axios from 'axios'

export default {
  get (path, data) {
    axios.get('http://localhost:5000/users')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
