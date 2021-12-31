import axios from 'axios'

export default axios.create({
  baseURL: `https://gorest.co.in/public/v1/posts`,
  headers: {
    'Authorization': 'Bearer 1dc413990299ee6e8618d4eb9c11574a75ed36fcf5194d302a7965724447010a', 
    'Content-Type': 'application/json'
  }
})