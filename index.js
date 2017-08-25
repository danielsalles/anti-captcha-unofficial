const http = require('./helpers/http')

module.exports = key => ({  createTask:                  options => http(Object.assign(options, { clientKey: key }), 'createTask'),
                            getBalance:                  options => http({ clientKey: key }, 'getBalance'),
                            getQueueStats:               options => http(Object.assign(options, { clientKey: key }), 'getQueueStats'),
                            getTaskResult:               options => http(Object.assign(options, { clientKey: key }), 'getTaskResult'),
                            reportIncorrectImageCaptcha: options => http(Object.assign(options, { clientKey: key }), 'reportIncorrectImageCaptcha')
                        })
