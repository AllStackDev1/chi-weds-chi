// import { Suspense } from "react"
// import { Box, SimpleGrid, Stack } from "@chakra-ui/react"
// import GalleryItem from "app/core/components/Gallery/GalleryItem"
// import Layout from "app/core/layouts/Layout"
// import Cta from "app/core/components/CTA"
// import Registry from "app/core/components/Registry"

// export const GalleriesList = ({ gallery }) => {
//   return (
//     <Stack px={{ base: 0, md: 20 }} as="section" id="gallery">
//       <SimpleGrid columns={{ md: 4 }} gap={{ base: 10, md: 4 }}>
//         {gallery?.map((gallery) => (
//           <GalleryItem key={gallery?.id} gallery={gallery} />
//         ))}
//       </SimpleGrid>
//     </Stack>
//   )
// }

// const GalleriesPage = () => {
//   const gallery = [
//     {
//       id: "videos",
//       cover:
//         "",
//       name: "Videos",
//       updatedAt: "2021-01-01",
//     },
//     {
//       id: "photos",
//       cover:
//         "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
//       name: "Photos",
//       updatedAt: "2021-01-01",
//     },
//   ]
//   return (
//     <Layout title="Gallery" mainPx={4}>
//       <Suspense fallback={<div>Loading...</div>}>
//         <GalleriesList gallery={gallery} />
//       </Suspense>

//       <Cta
//         btnTitle="RSVP"
//         subtitle=""
//         title="Please, take a moment and respond to our invitation."
//       />

//       <Registry />
//     </Layout>
//   )
// }

// export default GalleriesPage

import { Suspense } from "react"

import GalleryHeader from "app/core/components/Gallery/GalleryHeader"
import { Box, useMediaQuery } from "@chakra-ui/react"
import { SRLWrapper } from "simple-react-lightbox"
import Layout from "app/core/layouts/Layout"
import Image from "app/core/components/Image"
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
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })

  const gallery = {
    id: 1,
    cover: [
      "https://res.cloudinary.com/allstackdev/image/upload/v1671177152/chineduamaka/231A0619-Edit-short-1_feh0iu.webp",
      "https://res.cloudinary.com/allstackdev/image/upload/v1671177265/chineduamaka/231A0619-Edit_1_vkoyn3.jpg",
    ],
    name: "Pre-wedding Photos",
    date: "2022-12-11",
    images: [
      "https://res.cloudinary.com/allstackdev/image/upload/v1671072606/chineduamaka/231A0117-Edit_bplgsj.webp",
      "https://res.cloudinary.com/allstackdev/image/upload/v1671072623/chineduamaka/231A0744-Edit_llgvr3.webp",
      "https://res.cloudinary.com/allstackdev/image/upload/v1671358623/chineduamaka/231A0302-Edit_wk8e5b.webp",
      "https://res.cloudinary.com/allstackdev/image/upload/v1671072607/chineduamaka/231A0051-Edit_afghpv.webp",
      "https://res.cloudinary.com/allstackdev/image/upload/v1671072595/chineduamaka/231A0042-Edit_glnnph.webp",
      "https://res.cloudinary.com/allstackdev/image/upload/v1671072610/chineduamaka/231A0262-Edit_kkecca.webp",
      "https://res.cloudinary.com/allstackdev/image/upload/v1671072617/chineduamaka/231A0028-Edit_l3fkad.webp",
      "https://res.cloudinary.com/allstackdev/image/upload/v1671072617/chineduamaka/231A0619-Edit_m1btxo.webp",
      "https://res.cloudinary.com/allstackdev/image/upload/v1671072616/chineduamaka/231A0329-Edit_kyxqft.webp",
      "https://res.cloudinary.com/allstackdev/image/upload/v1671072606/chineduamaka/231A0052-Edit_gkla7t.webp",
    ],
  }
  return (
    <Layout title="Gallery" mainPx={4}>
      <GalleryHeader
        image={(isLargerThan768 ? gallery.cover[0] : gallery.cover[1]) || ""}
        title={gallery?.name}
        date={gallery?.date}
      />

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
