"use client"

import { createIcon } from "@chakra-ui/react"

const PrivacyIcon = createIcon({
  displayName: "PrivacyIcon",
  viewBox: "0 0 34.29 45",
  path: (
    <>
      <path d="M4.29,45c-1.18,0-2.19-.43-3.02-1.26-.84-.84-1.26-1.84-1.26-3.02v-21.43c0-1.18.43-2.19,1.26-3.02.84-.84,1.84-1.26,3.02-1.26h2.14v-4.29c0-2.96,1.05-5.49,3.13-7.59,2.08-2.1,4.61-3.13,7.59-3.13s5.49,1.05,7.59,3.13c2.1,2.08,3.13,4.61,3.13,7.59v4.29h2.14c1.18,0,2.19.43,3.02,1.26.84.84,1.26,1.84,1.26,3.02v21.43c0,1.18-.43,2.19-1.26,3.02-.84.84-1.84,1.26-3.02,1.26H4.29ZM4.29,40.71h25.71v-21.43H4.29v21.43ZM10.71,15h12.86v-4.29c0-1.78-.62-3.3-1.89-4.56-1.26-1.26-2.76-1.89-4.56-1.89s-3.3.62-4.56,1.89c-1.26,1.26-1.89,2.76-1.89,4.56v4.29h.04Z" fill="currentColor" />
    </>
  ),
})

const PrivacyIconPreview = () => {
  return <PrivacyIcon size="lg"  />
}

export default PrivacyIconPreview
