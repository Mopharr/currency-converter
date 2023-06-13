import React from "react";
import { Flex } from "@chakra-ui/react";
import "../Style/styles.css";

const Login = () => {
  return (
    <>
      <Flex
        bgGradient="linear(to-t, #ae085c, #2e0656)"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <div className="body">
          <h1>Login</h1>

          <form>
            <input type="email" placeholder="Enter Email" />
            <input type="password" placeholder="**********" />
            <button type="submit">Login</button>
          </form>
        </div>
      </Flex>
    </>
  );
};

export default Login;
