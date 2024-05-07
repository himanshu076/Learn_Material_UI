import React from 'react'
import { Typography } from '@mui/material';

const MuiTypography = () => {
  return (
    <div>
      {/* headings */}
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4'>h4 Heading</Typography>
      {/* component is use to change the tag dynamically fron h4 to h1. */}
      {/* gutterBottem is used to add bottom margin default size of mui. */}
      <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>

      {/* Subtitle */}
      <Typography variant='subtitle1'>Sub title 1</Typography>
      <Typography variant='subtitle2'>Sub title 2</Typography>

      {/* body */}
      <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quo repellat praesentium sit fugiat itaque placeat sint consequuntur amet numquam quisquam, hic deserunt quam optio, veritatis asperiores nesciunt impedit commodi?</Typography>
      <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel doloribus iusto architecto omnis ad veritatis quia dicta! Atque, officia. Rem atque nam nostrum saepe! Culpa non adipisci fugit vitae veritatis.</Typography>
    </div>
  )
}

export default MuiTypography
