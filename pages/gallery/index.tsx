import { Suspense } from "react"
import { Box, SimpleGrid, Stack } from "@chakra-ui/react"
import GalleryItem from "app/core/components/Gallery/GalleryItem"
import Layout from "app/core/layouts/Layout"
import Cta from "app/core/components/CTA"
import Registry from "app/core/components/Registry"

export const GalleriesList = ({ gallery }) => {
  return (
    <Stack px={{ base: 0, md: 20 }} as="section" id="gallery">
      <SimpleGrid columns={{ md: 4 }} gap={{ base: 10, md: 4 }}>
        {gallery?.map((gallery) => (
          <GalleryItem key={gallery?.id} gallery={gallery} />
        ))}
      </SimpleGrid>
    </Stack>
  )
}

const GalleriesPage = () => {
  const gallery = [
    {
      id: "videos",
      cover:
        "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      name: "Videos",
      updatedAt: "2021-01-01",
    },
    {
      id: "photos",
      cover:
        "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      name: "Photos",
      updatedAt: "2021-01-01",
    },
  ]
  return (
    <Layout title="Gallery" mainPx={4}>
      <Suspense fallback={<div>Loading...</div>}>
        <GalleriesList gallery={gallery} />
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

export default GalleriesPage
