import { Box, Button, Heading, Image, Text, VStack } from "@chakra-ui/react"

interface FoodCardProps{
  imageSrc : string ,
  title   : string,
  description : string 
}

export default function FoodCard({ imageSrc, title, description }:FoodCardProps) {
  return(
    <Box className="flex flex-col items-center justify-center w-[381px] h-[554px] rounded-xl border-2 border-[#93A2D361]" overflow="hidden" bg="white">
    <Image src={imageSrc} alt={title} w="326px" h="258px" borderRadius={"21px"} objectFit="cover" /> 
    <VStack className="flex flex-col justify-evenly gap-4" m={4} p={4} align="start" spacing={2}>
      <Heading size="md"  color={"#0E2368"}>{title}</Heading>
      <Text fontSize="sm" color="gray.600">
        {description}
      </Text>
      <Button className="w-[131px] h-[42px] rounded-full font-800" variant="outline" colorScheme="blue" size="sm">
        Read More
      </Button>
    </VStack>
  </Box>
  )
}
