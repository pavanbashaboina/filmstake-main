import React from 'react'
import { Box, H1, Text } from '@adminjs/design-system'

const Dashboard = () => {
  return (
    <Box variant="grey">
      <Box variant="white" padding="xl">
        <H1>Welcome to Movie Admin</H1>
        <Text>Manage your movies, genres, and more from here.</Text>
      </Box>
    </Box>
  )
}

export default Dashboard