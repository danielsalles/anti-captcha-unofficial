const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://api.anti-captcha.com/',
  timeout: 5000
})

module.exports = (options, method) => instance.post(`/${method}`, options)
