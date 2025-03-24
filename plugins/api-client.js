export default defineNuxtPlugin((nuxtApp) => {
  const originalFetch = globalThis.fetch
  
  globalThis.fetch = function (resource, options) {
    if (typeof resource === 'string' && resource.startsWith('/api')) {
      options = options || {}
      options.headers = options.headers || {}
      
      // Add custom header to identify internal requests
      // We make that the requests sent are sent from the internal.
      options.headers['x-internal-request'] = 'true'
    }
    
    return originalFetch(resource, options)
  }
})
