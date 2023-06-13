import React from "react";
import { Flex } from "@chakra-ui/react";
import Converter from "../components/Converter";

const ConvertePage = () => {
  return (
    <>
      <Flex
        bgGradient="linear(to-t, #ae085c, #2e0656)"
        height="100vh"
        justifyContent="center"
      >
        <Converter />
      </Flex>
    </>
  );
};

export default ConvertePage;
