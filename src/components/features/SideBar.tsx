import { Box, VStack } from "@chakra-ui/react";
import { SideBarMenu } from "../atoms/SideBarMenu";

const Sidebar = () => {
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
        <SideBarMenu text="Home" goToPath="/"/>
        <SideBarMenu text="Quiz" goToPath="/quiz"/>
        <SideBarMenu text="Create" goToPath="/create"/>
        <SideBarMenu text="Config" goToPath="/config"/>
      </VStack>
    </Box>
  );
}

export default Sidebar;
