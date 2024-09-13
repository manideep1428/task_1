import React from 'react'
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  Image,
  Flex,
} from '@chakra-ui/react'
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'

interface Props {
  children: React.ReactNode
  label: string
  href: string
}

const ListHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const SocialButton = ({ children, label, href }: Props) => {
  return (
    <chakra.button
      bg={'blackAlpha.100'}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'blackAlpha.200',
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function LargeWithLogoCentered() {
  return (
    <Box bg={'#F8F8F8'} color={'gray.700'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={8}
          alignItems="center"
          justifyItems="center"
          textAlign={{ base: 'center', sm: 'left' }}
        >
          <Box>
            <Image src="/truck.png" alt="Logo" w="161px" h="125px" mx={{ base: 'auto', sm: '0' }} />
          </Box>
          <Stack spacing={2} alignItems={{ base: 'center', sm: 'flex-start' }}>
            <ListHeader>Contact Us</ListHeader>
            <Text fontSize={'sm'}>
              Lorem Ipsum Pvt Ltd.5/1, Magalton
              <br />
              Road, Phartosh Gate near YTM
              <br />
              Market, XYZ-343434
            </Text>
            <Text fontSize={'sm'}>example2020@gmail.com</Text>
            <Text fontSize={'sm'}>(904) 443-0343</Text>
          </Stack>
          <Stack align={{ base: 'center', sm: 'flex-start' }} spacing={2}>
            <ListHeader>More</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Products</Link>
            <Link href={'#'}>Career</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>
          <Stack spacing={4} alignItems={{ base: 'center', sm: 'flex-start' }}>
            <ListHeader>Social Links</ListHeader>
            <Flex fontSize={100} w={100} direction={'row'} gap={8} justifyContent={{ base: 'center', sm: 'flex-start' }}>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
            </Flex>
            <Flex
              pt={6}
              direction={{ base: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems="center"
              mt={16}
              py={4}
            >
              <Text fontSize={'sm'}>© 2022 Food Truck Example</Text>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}