import React from "react";
import { Box, VStack, Text } from "@chakra-ui/react";

function Sidebar() {
  return (
    <Box
      position="fixed"
      top="60px"
      left="0"
      h="calc(100vh - 60px)" 
      w="200px"
      bg="teal.600"
      color="white"
      boxShadow="md"
      p={4}
    >
      <VStack align="start">
        <Text fontWeight="bold" fontSize="lg">
          Menu
        </Text>
        <Text _hover={{ color: "teal.300", cursor: "pointer" }}>
          Dashboard
        </Text>
        <Text _hover={{ color: "teal.300", cursor: "pointer" }}>
          Settings
        </Text>
        <Text _hover={{ color: "teal.300", cursor: "pointer" }}>
          Profile
        </Text>
        <Text _hover={{ color: "teal.300", cursor: "pointer" }}>
          Logout
        </Text>
      </VStack>
    </Box>
  );
}

export default Sidebar;
