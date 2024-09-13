import React from 'react'
import { Box, Flex, Heading, Text, Button, Image, Container } from '@chakra-ui/react'

export default function AboutUs() {
  return (
    <Box as="section" bg="#F0F1F7" position='relative'>
      <Container maxW="container.xl" p={0}>
        <Flex direction={{ base: 'column', md: 'row' }} align="evenly" minH={{ md: '400px' }}>
          <Box 
            flex={1} 
            display={{ base: 'none', md: 'block' }}
            position="relative"
          >
            <Image
              src="/about.png"
              alt="Cooking ingredients and utensils"
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
          <Flex 
            flex={1} 
            direction="column" 
            justify="center" 
            align={{ base: 'center', md: 'flex-start' }}
            p={{ base: 8, md: 16 }}
            bg="#F0F1F7"
          >
           <div className='flex flex-col md:ml-12'>
            <Heading as="h2" size="xl" mb={4} color="#0E2368">
                About Us
              </Heading>
              <Text mb={6} color="#444957" maxW={447} textAlign={{ base: 'center', md: 'left' }}>
              {` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.`}
              </Text>
            </div>
            <Button 
              colorScheme="red" 
              size="lg" 
              ml={{lg:12}}
              borderRadius="full" 
              px={8}
              bg="#E23744"
              color="white"
              _hover={{ bg: '#C62E3A' }}
            >
              Read More
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}