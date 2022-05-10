import React, { useState } from "react";
import { Wrap, WrapItem, Flex, Heading, Input, Button, InputGroup, Stack, InputLeftElement, chakra, Box, Avatar, FormControl, FormHelperText, InputRightElement, Divider } from "@chakra-ui/react";
import { FaLock, FaMailBulk, FaBuilding } from "react-icons/fa";
import { auth } from "../firebase"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

const CFaLock = chakra(FaLock);
const CFaMailBulk = chakra(FaMailBulk);

const SignUp: React.FC = (props: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const handleSubmitUser = (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((user) => {
      alert('ログイン成功=');
      if(email.value === "admin@test.co.jp"){
        navigate("/admin");        
      } else {
        navigate("/mypage_user");
      }})
    .catch((error) => {
      alert(error.message)
      })    
  };

  const handleSubmitSupplier = (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((supplier) => {
      alert('ログイン成功=');
      if(email.value === "admin@test.co.jp"){
        navigate("/admin");        
      } else {
        navigate("/mypage_supplier");
      }})
    .catch((error) => {
      alert(error.message)
      })    
  };

  return (
    <>
    <Flex justifyContent="center" my={10}>
    <Heading fontSize='x-large'>ログイン</Heading>
    </Flex>

    <Wrap justify="center" spacing="5"> 
    <WrapItem>
    <Flex
      flexDirection="column"
      width="40wh"
      height="60vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading fontSize='lg' color="teal.400">個人</Heading>
        <Box minW={{ base: "30%", md: "300px" }}>
          <form onSubmit={handleSubmitUser}>
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
                  <Input name="email" type="email" placeholder="メールアドレス" />
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
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "非表示" : "表示"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <br />
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login
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
    </WrapItem>    
    <WrapItem>
    <Divider height={{ base: "0%", md: "100%" }} orientation='vertical'/>
    </WrapItem>
    <WrapItem>
    <Flex
      flexDirection="column"
      width="30wh"
      height="60vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Box display='flex' justifyContent='center' alignItems='center' boxSize='46px' borderRadius='full' bgColor='blue.500' ><FaBuilding color="white" size="30px" /></Box>
        <Heading fontSize='lg' color="blue.400">法人</Heading>
        <Box minW={{ base: "30%", md: "300px" }}>
          <form onSubmit={handleSubmitSupplier}>
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
                  <Input name="email" type="email" placeholder="メールアドレス" />
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
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "非表示" : "表示"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <br />
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="blue"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box fontSize='sm'>
      会員登録がまだの場合、{" "}
      <Link to="/page2" color="blue.500" >
        新規登録はこちらから
      </Link>
      </Box>
    </Flex>    
    </WrapItem>
    </Wrap>
    </>
  );
};

export default SignUp;