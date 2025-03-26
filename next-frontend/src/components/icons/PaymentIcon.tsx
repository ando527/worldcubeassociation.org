"use client"

import { createIcon } from "@chakra-ui/react"

const PaymentIcon = createIcon({
  displayName: "PaymentIcon",
  viewBox: "0 0 45 34",
  path: (
    <>
      <path d="M26.59,19.12c-1.7,0-3.15-.62-4.35-1.86-1.19-1.24-1.79-2.74-1.79-4.52s.6-3.28,1.79-4.52c1.19-1.24,2.64-1.86,4.35-1.86s3.15.62,4.35,1.86c1.19,1.24,1.79,2.74,1.79,4.52s-.6,3.28-1.79,4.52c-1.19,1.24-2.64,1.86-4.35,1.86ZM12.27,25.5c-1.12,0-2.09-.42-2.89-1.25-.8-.83-1.2-1.83-1.2-3V4.25c0-1.17.4-2.17,1.2-3,.8-.83,1.76-1.25,2.89-1.25h28.64c1.12,0,2.09.42,2.89,1.25.8.83,1.2,1.83,1.2,3v17c0,1.17-.4,2.17-1.2,3-.8.83-1.76,1.25-2.89,1.25H12.27ZM16.36,21.25h20.45c0-1.17.4-2.17,1.2-3,.8-.83,1.76-1.25,2.89-1.25v-8.5c-1.12,0-2.09-.42-2.89-1.25-.8-.83-1.2-1.83-1.2-3h-20.45c0,1.17-.4,2.17-1.2,3-.8.83-1.76,1.25-2.89,1.25v8.5c1.12,0,2.09.42,2.89,1.25.8.83,1.2,1.83,1.2,3ZM38.86,34H4.09c-1.12,0-2.09-.42-2.89-1.25-.8-.83-1.2-1.83-1.2-3V6.38h4.09v23.38h34.77v4.25Z" fill="currentColor" />
    </>
  ),
})

const PaymentIconPreview = () => {
  return <PaymentIcon size="lg"  />
}

export default PaymentIconPreview
