import React from "react";
import { Flex } from "@chakra-ui/react";
import "../Style/styles.css";

const SignUp = () => {
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
          <h1>Sign Up</h1>

          <form>
            <input type="email" placeholder="Enter Email" />
            <input type="text" placeholder="Username" />

            <input type="password" placeholder="password" />
            <input type="password" placeholder="confirm Password" />

            <button type="submit">signUp</button>
          </form>
        </div>
      </Flex>
    </>
  );
};

export default SignUp;
