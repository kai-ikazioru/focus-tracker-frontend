import { Box, Flex } from "@chakra-ui/react";
import Header from "../features/Header";
import Sidebar from "../features/SideBar";
import { Outlet } from "react-router-dom";

const LayoutContainer = () =>  {
  return (
    <Box>
      <Header />
      <Flex>
        <Sidebar />
        <Box ml="200px" mt="60px" p={4} w="full">
          <Outlet />
        </Box>
      </Flex>
    </Box>
  );
}

export default LayoutContainer;