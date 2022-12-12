import React, { useState } from "react"

import { Box, BoxProps } from "@chakra-ui/react"
import NextImage from "next/image"
import { cn } from "app/core/utils"

const Image = ({
  src,
  alt,
  center,
  width = 1280,
  height = 200,
  ...rest
}: { src: string; alt: string; width?: number; height?: number; center?: boolean } & BoxProps) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <Box
      h={{ md: 70 }}
      rounded="xl"
      className={`w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden xl:aspect-w-7 xl:aspect-h-2`}
      {...rest}
    >
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 800px) 100vw, 800px"
        className={cn(
          `group-hover:opacity-75 duration-700 ease-in-out ${
            center ? "object-middle" : "object-cover"
          }`,
          isLoading ? "grayscale blur-2xl scale-110" : "grayscale-0 blur-0 scale-100"
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </Box>
  )
}

export default Image
