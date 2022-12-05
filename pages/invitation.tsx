import React from "react"
import Layout from "app/core/layouts/Layout"
import { Box, Flex, useMediaQuery } from "@chakra-ui/react"
import { Document, Page, pdfjs } from "react-pdf"
import CTA from "../app/core/components/CTA"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const Invitation = () => {
  const [numPages, setNumPages] = React.useState(null)
  const [showCTA, setShowCTA] = React.useState(false)
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages)
    setTimeout(() => {
      setShowCTA(true)
    }, 5000)
  }

  function removeTextLayerOffset() {
    const textLayers = window.document.querySelectorAll(".react-pdf__Page__textContent")
    textLayers.forEach((layer: any) => {
      const { style } = layer
      style.display = "none"
    })
  }

  return (
    <Layout title="Invitation">
      <Flex mt={{ lg: 60 }} justify="center">
        <Document file="./invitation.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              scale={isLargerThan768 ? 3 : 1}
              onLoadSuccess={removeTextLayerOffset}
            />
          ))}
        </Document>
      </Flex>

      <Box opacity={showCTA ? 1 : 0.5}>
        <CTA
          subtitle=""
          btnTitle="RSVP"
          title="Please, take a moment and respond to our invitation."
        />
      </Box>
    </Layout>
  )
}

export default Invitation
