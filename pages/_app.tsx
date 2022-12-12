import { ErrorFallbackProps, ErrorComponent, ErrorBoundary, AppProps } from "@blitzjs/next"
import { AuthenticationError, AuthorizationError } from "blitz"
import SimpleReactLightbox from "simple-react-lightbox"
import { withBlitz } from "app/blitz-client"
import { ScrollingProvider } from "react-scroll-section"
import "@fontsource/cormorant-garamond"
import "@fontsource/lato"
import "../public/main.css"

import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "app/theme"

function RootErrorFallback({ error }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <div>Error: You are not authenticated</div>
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent
        statusCode={(error as any)?.statusCode || 400}
        title={error.message || error.name}
      />
    )
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <ChakraProvider theme={theme}>
      <SimpleReactLightbox>
        <ScrollingProvider>
          <ErrorBoundary FallbackComponent={RootErrorFallback}>
            {getLayout(<Component {...pageProps} />)}
          </ErrorBoundary>
        </ScrollingProvider>
      </SimpleReactLightbox>
    </ChakraProvider>
  )
}

export default withBlitz(MyApp)
