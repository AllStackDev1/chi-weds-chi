import { Suspense } from "react"

import GalleryHeader from "app/core/components/Gallery/GalleryHeader"
import { Box } from "@chakra-ui/react"
import { SRLWrapper } from "simple-react-lightbox"

import Layout from "app/core/layouts/Layout"
import Image from "app/core/components/Image"
import { useParams } from "@blitzjs/next"
import Cta from "app/core/components/CTA"
import Registry from "app/core/components/Registry"

export const Gallery = ({ gallery }) => {
  return (
    <SRLWrapper
      options={{
        settings: {
          overlayColor: "rgba(255,255,255,1)",
        },
        buttons: {
          backgroundColor: "transparent",
          iconColor: "rgba(0,0,0,1)",
        },
      }}
    >
      <Box className="masonry-grid">
        {gallery.images.map((image: any) => (
          <Image key={image} src={image} alt={gallery?.name} />
        ))}
      </Box>
    </SRLWrapper>
  )
}

const ShowGalleryPage = () => {
  const params = useParams()

  const gallery = {
    id: 1,
    cover:
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    name: "Gallery 1",
    date: "2021-01-01",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    ],
  }
  return (
    <Layout title={`Gallery | ${params.galleryId}`} mainPx={4}>
      <GalleryHeader image={gallery?.cover} title={gallery?.name} date={gallery?.date} />

      <Suspense fallback={<p>loading...</p>}>
        <Gallery gallery={gallery} />
      </Suspense>

      <Cta
        btnTitle="RSVP"
        subtitle=""
        title="Please, take a moment and respond to our invitation."
      />

      <Registry />
    </Layout>
  )
}

export default ShowGalleryPage
