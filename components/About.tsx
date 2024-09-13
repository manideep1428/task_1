import React from 'react'
import { Box, Flex, Heading, Text, Button, Image, Container } from '@chakra-ui/react'

export default function AboutUs() {
  return (
    <Box as="section" py={16} bg="#F7F7FA" position='relative'>
      <Container maxW="container.xl">
        <Flex direction={{ base: 'column', md: 'row' }} align="stretch" justify="space-between">
          <Box flex={1} mr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }} position="relative" minH={{ md: '400px' }}>
            <Image
              src="/about.png?height=400&width=600"
              alt="Cooking ingredients and utensils"
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              objectFit="cover"
              borderRadius="md"
            />
          </Box>
          <Box flex={1}>
            <Heading as="h2" size="xl" mb={4} color="blue.900">
              About Us
            </Heading>
            <Text mb={6} color="gray.600">
            {` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries.`}
            </Text>
            <Button colorScheme="red" size="lg" borderRadius="full">
              Read More
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}