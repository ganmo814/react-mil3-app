import React, { useState } from "react";
import { Flex, Heading, Input, Button, InputGroup, Stack, InputLeftElement, chakra, Box, Avatar, FormControl, FormHelperText, InputRightElement } from "@chakra-ui/react";
import { FaLock, FaMailBulk } from "react-icons/fa";
import { auth } from "../firebase"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

const CFaLock = chakra(FaLock);
const CFaMailBulk = chakra(FaMailBulk);

const SignUp: React.FC = (props: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((user) => {
      alert('ログイン成功=');
      if(email.value === "admin@test.co.jp"){
        navigate("/admin");        
      } else {
        navigate("/mypage");
      }})
    .catch((error) => {
      alert(error.message)
      })    
  };
  // const [isLogin, setIsLogin] = useState(true);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // useEffect(() => {
  //   auth.onAuthStateChanged((user)=>{
  //       user && props.history.push("/mypage");
  //   });
  //   }, [props.history]);

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
        <Heading fontSize='x-large'>ログイン</Heading>
        {/* {isLogin ? "Login" : "Registration"} */}
        <br />
        <Avatar bg="teal.500" />
        <Heading fontSize='lg' color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
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
                    children={<CFaMailBulk color="gray.300" />}
                  />
                  <Input name="email" type="email" placeholder="メールアドレス" 
                    // value={email}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    // setEmail(e.target.value); 
                    // }}                 
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
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="パスワード"
                    // value={password}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    //     setPassword(e.target.value);
                    // }}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "非表示" : "表示"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <br />
                  {/* <Link>パスワードを忘れた場合</Link> */}
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
                //         props.history.push("/mypage");
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
                Login
                {/* {isLogin ? "Login" : "Register"} */}
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box fontSize='sm'>
        会員登録がまだの場合、{" "}
        <Link to="/page1" color="teal.500" >
          新規登録はこちらから
        </Link>
      </Box>
    </Flex>
  );
};

export default SignUp;