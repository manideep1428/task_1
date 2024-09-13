import { Box, Flex, Image, Stack, Text, Heading, Button} from "@chakra-ui/react"
export default function Header() {
    return (
      <Box as="header" w="full" bg="white" overflow="hidden">
        <Flex direction={{ base: 'column', lg: 'row' }} h={{ lg: '100vh' }}>
          <Box w={{ base: '100%', lg: '55%' }} p={8} position="relative">       
            <Stack spacing={6} maxW="500px" mt={{ base: 8, lg: 20 }}>
              <Image
                src="/truck.png"
                alt="Food Truck"
                position="absolute"
                top="33px"
                left="24px"
                w="100px"
                h="auto"
                display={{ base: 'none', lg: 'block' }}
              />
              <Stack as={"div" } spacing={6} className="flex m-8 md:w-[345px] justify-center items-center" >
                <Heading as="h1" size="2xl" color="blue.900">
                    Discover the <Text as="span" color="red.500">Best Food</Text> and Drinks
                </Heading>
                <Text color="gray.600">
                    Naturally made Healthcare Products for the better care & support of your body.
                </Text>
                <Button colorScheme="red" size="lg" borderRadius="full" alignSelf="flex-start">
                    Explore Now!
                </Button>
              </Stack>
            </Stack>
          </Box>
  
          <Box 
            w={{ base: '100%', lg: '720px' }} 
            h={{ base: '300px', lg: '804px' }}
            position="relative"
            display={{ base: 'none', lg: 'block' }}
          >
            <Image 
              className="img-main"
              src="/main.png" 
              alt="Pizza" 
              position="absolute"
              top="0"
              right="0"
              w="100%"
              h="100%"
              objectFit="cover"
            />
            <Image 
              src="/vector.png" 
              alt="Vector Overlay" 
              position="absolute" 
              top="0" 
              right="0" 
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>
    )
  }