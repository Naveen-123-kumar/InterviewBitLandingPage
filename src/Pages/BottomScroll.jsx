import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import React from 'react'
import Image1 from '../Assets/Amazon.png'
import Image2 from '../Assets/banner.svg'

import Image3 from '../Assets/brand.svg'

import Image4 from '../Assets/paypal.png'
import Image5 from '../Assets/Amazon.png'

const Data=[
    {
        Name: Image1,
      },
      {
        Name: Image2,
      },
      {
        Name: Image3,
      },
      {
        Name: Image4,
      },
      {
        Name: Image5,
      },
      {
        Name: Image4,
      },
      {
        Name: Image1,
      },
      {
        Name: Image2,
      },
      {
        Name: Image3,
      },
      {
        Name: Image4,
      },
      {
        Name: Image5,
      },
      {
        Name: Image4,
      },
]
const BottomScroll = () => {
  return (
    <>
    <ImageList sx={{
        gridAutoFlow: "column",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr)) !important",
        gridAutoColumns: "minmax(160px, .5fr)"
      }}>
        {Data.map((image) => (
        <ImageListItem>
          <img src={image.Name} />
          {/* <ImageListItemBar /> */}
        </ImageListItem>
      ))}
    </ImageList>
    </>
  )
}

export default BottomScroll