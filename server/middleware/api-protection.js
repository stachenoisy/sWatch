const config = useRuntimeConfig();

export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  
  // Check if path is an API route.
  // We make sure that the requests sent are sent from the internal.
  if (url.pathname.startsWith('/api/')) {

    const isInternalRequest = getHeader(event, 'x-internal-request') === 'true'

    const referer = getHeader(event, 'referer')
    const isFromApp = referer && (
      referer.includes('localhost') || 
      referer.includes(config.baseurl)
    )
    
    if (!isInternalRequest && !isFromApp) {
      return createError({
        statusCode: 404,
      })
    }
  }
})
