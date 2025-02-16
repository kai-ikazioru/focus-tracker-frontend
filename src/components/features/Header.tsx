import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Header = () => {

  return (
    <Box
        position="fixed"
        top="0"
        left="0"
        w="100%"
        h="60px"
        bg="teal.500"
        color="teal.900"
        zIndex="10"
        boxShadow="md"
        px={5}
    >
        <Flex 
            justify="flex-start"
            align="center"
            h="100%"
        >
            <Heading fontSize="2xl" fontWeight="bold">
                FocusTracker
            </Heading>
        </Flex>
    </Box>
  );
}

export default Header;
