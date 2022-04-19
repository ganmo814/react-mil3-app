import React, { useState, useEffect } from "react";
import { Flex, Heading, Input, Button, InputGroup, Stack, InputLeftElement, chakra, Box, Link, Avatar, FormControl, FormHelperText, InputRightElement } from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { auth } from "../firebase"; 

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const SignUp: React.FC = (props: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   useEffect(() => {
//     auth.onAuthStateChanged((user)=>{
//         user && props.history.push("/");
//     });
//     }, [props.history]);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="80vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mt="10"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading fontSize='x-large'>{isLogin ? "Login" : "Registration"}</Heading>
        <br />
        <Avatar bg="teal.500" />
        <Heading fontSize='lg' color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="メールアドレス" value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value); 
                    }}                 
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="パスワード"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.target.value);
                    }}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "非表示" : "表示"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>パスワードを忘れた場合</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                // onClick={ isLogin ? async () => {
                //     try {
                //         await auth.signInWithEmailAndPassword(email, password);
                //         props.history.push("/");
                //     }   catch (error: any) {
                //         alert(error.message);
                //     }
                // } : async () => {
                //     try {
                //         await auth.createUserWithEmailAndPassword(email, password);
                //         props.history.push("/");
                //     }   catch (error: any) {
                //         alert(error.message);
                //     }
                // }
                // }
              >
                {isLogin ? "Login" : "Register"}
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box fontSize='sm'>
        会員登録がまだの場合、{" "}
        <Link color="teal.500" href="#">
          新規登録はこちらから
        </Link>
      </Box>
    </Flex>
  );
};

export default SignUp;