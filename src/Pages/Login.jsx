import React from "react";
import axios from "axios";
// import { BiErrorCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { Flex } from "@chakra-ui/react";
import "../Style/styles.css";

const Login = () => {
  const navigate = useNavigate();
  const timer = useRef();
  const [err, setErr] = useState(false);
  const [sign, setSign] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setSign({ ...sign, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/login", {
        email: sign.email,
        password: sign.password,
      })
      .then((res) => {
        setSign({
          email: "",
          password: "",
        });
        setErr(false);
        navigate("/converter");
      })
      .catch((err) => {
        console.log(err);
        setErr(true);
        timer.current = window.setTimeout(() => {
          setErr(false);
        }, 4000);
      });
  };

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

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter Email"
              value={sign.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="**********"
              value={sign.password}
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </Flex>
    </>
  );
};

export default Login;
