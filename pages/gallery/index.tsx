import { Suspense } from "react"
import Head from "next/head"
import { Image, SimpleGrid, Stack } from "@chakra-ui/react"
import GalleryItem from "app/core/components/Gallery/GalleryItem"
import Header from "app/core/components/Header"
import Layout from "app/core/layouts/Layout"

export const GalleriesList = ({ gallery }) => {
  return (
    <Stack px={{ base: 6, md: 20 }} as="section" id="gallery">
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
      id: 1,
      cover:
        "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      name: "Gallery 1",
      date: "2021-01-01",
    },
    {
      id: 2,
      cover:
        "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      name: "Gallery 2",
      date: "2021-01-01",
    },
  ]
  return (
    <Layout>
      <Head>
        <title>Galleries</title>
      </Head>

      <Stack spacing={16} mb={16}>
        <Header image="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80">
          <Image src="/rsvp-img-1.png" alt="RSVP" />
        </Header>

        <Suspense fallback={<div>Loading...</div>}>
          <GalleriesList gallery={gallery} />
        </Suspense>
      </Stack>
    </Layout>
  )
}

export default GalleriesPage
