import React, { useState } from 'react'
import { Box, Flex, IconButton, Text, Grid } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import FoodCard from "./FoodCard"
import { foodItems } from "@/data/data"

//@ts-expect-error mkn
const MotionGrid = motion(Grid)

export default function Slider() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(foodItems.length / 3)

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev))
  }

  const displayedItems = foodItems.slice(currentPage * 3, (currentPage + 1) * 3)

  return (
    <Box w="100%" maxW="1440px" mx="auto" px={4} py={10}>
      <AnimatePresence mode="wait">
        <MotionGrid
          key={currentPage}
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={6}
          mb={6}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {displayedItems.map((item, index) => (
            <FoodCard
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
            />
          ))}
        </MotionGrid>
      </AnimatePresence>
      <Flex justify="center" align="center" mt={4}>
        <IconButton
          icon={<ChevronLeft />}
          onClick={handlePrevPage}
          isDisabled={currentPage === 0}
          aria-label="Previous page"
          mr={4}
        />
        <Text>
          Page {currentPage + 1} of {totalPages}
        </Text>
        <IconButton
          icon={<ChevronRight />}
          onClick={handleNextPage}
          isDisabled={currentPage === totalPages - 1}
          aria-label="Next page"
          ml={4}
        />
      </Flex>
    </Box>
  )
}