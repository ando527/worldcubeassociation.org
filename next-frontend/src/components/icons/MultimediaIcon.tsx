"use client"

import { createIcon } from "@chakra-ui/react"

const MultimediaIcon = createIcon({
  displayName: "MultimediaIcon",
  viewBox: "0 0 45 45",
  path: (
    <>
      <path d="M16.88,32.62l15.75-10.12-15.75-10.12v20.25ZM22.5,45c-3.11,0-6.04-.59-8.77-1.77-2.74-1.18-5.12-2.78-7.14-4.81-2.03-2.03-3.63-4.41-4.81-7.14-1.18-2.74-1.77-5.66-1.77-8.77s.59-6.04,1.77-8.77c1.18-2.74,2.78-5.12,4.81-7.14,2.02-2.03,4.41-3.63,7.14-4.81,2.74-1.18,5.66-1.77,8.77-1.77s6.04.59,8.77,1.77c2.74,1.18,5.12,2.78,7.14,4.81,2.02,2.02,3.63,4.41,4.81,7.14,1.18,2.74,1.77,5.66,1.77,8.77s-.59,6.04-1.77,8.77c-1.18,2.74-2.78,5.12-4.81,7.14-2.03,2.02-4.41,3.63-7.14,4.81-2.74,1.18-5.66,1.77-8.77,1.77ZM22.5,40.5c5.02,0,9.28-1.74,12.77-5.23s5.23-7.74,5.23-12.77-1.74-9.28-5.23-12.77c-3.49-3.49-7.74-5.23-12.77-5.23s-9.28,1.74-12.77,5.23c-3.49,3.49-5.23,7.74-5.23,12.77s1.74,9.28,5.23,12.77c3.49,3.49,7.74,5.23,12.77,5.23Z" fill="currentColor" />
    </>
  ),
})

const MultimediaIconPreview = () => {
  return <MultimediaIcon size="lg"  />
}

export default MultimediaIconPreview
