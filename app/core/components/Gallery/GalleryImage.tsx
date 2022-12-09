import React, { useState } from "react"
import Image from "next/image"
import { cn, configuredSanityClient } from "utils/misc"
import { Box, BoxProps } from "@chakra-ui/react"
import { useNextSanityImage } from "next-sanity-image"

const GalleryImage = ({
  image,
  alt,
  width = 1280,
  height = 200,
  ...rest
}: {
  image: string
  alt: string
  width?: number
  height?: number
} & BoxProps) => {
  const [isLoading, setLoading] = useState(true)

  const imageProps = useNextSanityImage(configuredSanityClient, image)

  return (
    <Box
      className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden xl:aspect-w-7 xl:aspect-h-10"
      {...rest}
    >
      <Image
        alt={alt}
        {...imageProps}
        sizes="(max-width: 800px) 100vw, 800px"
        className={cn(
          "group-hover:opacity-75 duration-700 ease-in-out object-cover",
          isLoading ? "grayscale blur-2xl scale-110" : "grayscale-0 blur-0 scale-100"
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </Box>
  )
}

export default GalleryImage
