import { Box, Container, Flex, Heading, Text, Button, Image, SimpleGrid, Icon, VStack, HStack, Spacer } from "@chakra-ui/react";
import { FaShoppingCart, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex bg="gray.100" align="center" justify="center" h="60vh" bgImage="https://images.unsplash.com/photo-1602020277972-99978250c8bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWElMjBwbGFudGF0aW9ufGVufDB8fHx8MTcxNDE0MDAwOXww&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPosition="center" color="white">
        <VStack spacing={4}>
          <Heading as="h1" size="2xl" textAlign="center">
            Discover the Essence of Tea
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Explore our premium tea collections
          </Text>
          <Button colorScheme="teal" size="lg">
            Shop Now
          </Button>
        </VStack>
      </Flex>

      {/* Product Showcase */}
      <Container maxW="container.xl" py={10}>
        <Heading as="h2" size="xl" mb={6}>
          Featured Products
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Box key={index} boxShadow="md" p={5} rounded="md" bg="white">
              <Image src={`https://images.unsplash.com/photo-1523920290228-4f321a939b4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWElMjBwcm9kdWN0JTIwJTI0JTdCaW5kZXglMjAlMkIlMjAxJTdEfGVufDB8fHx8MTcxNDE0MDAwOXww&ixlib=rb-4.0.3&q=80&w=1080`} alt={`Product ${index + 1}`} borderRadius="md" />
              <Heading as="h3" size="md" mt={4}>
                Premium Tea {index + 1}
              </Heading>
              <Text mt={2}>A unique blend of flavors and aromas.</Text>
              <Button rightIcon={<Icon as={FaShoppingCart} />} colorScheme="teal" mt={4} w="full">
                Add to Cart
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box bg="gray.800" color="gray.200" py={5}>
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Text>&copy; {new Date().getFullYear()} Lamonk Tea Co.</Text>
            <Spacer />
            <HStack spacing={4}>
              <Icon as={FaInstagram} w={6} h={6} />
              <Icon as={FaFacebook} w={6} h={6} />
              <Icon as={FaTwitter} w={6} h={6} />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
