import { auth } from '../firebase';
import { db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Button, Avatar, Box, chakra, Flex, FormControl, Heading, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaMailBulk } from "react-icons/fa";
import { collection, doc, setDoc } from 'firebase/firestore';
// import { useState } from 'react';

const CFaLock = chakra(FaLock);
const CFaMailBulk = chakra(FaMailBulk)

const SignUpRev: React.FC = (props: any) => {
  const navigate = useNavigate();
  const handleSubmit = (event:any) => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    const userDocumentRef = doc(collection(db, 'users'));
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      alert("登録が完了しました！");
      console.log('user created');
      console.log(userCredential); 
      setDoc(userDocumentRef, {
        admin: false,
        name: name.value,
        email: email.value,
        password: password.value
      });
      navigate("/login");
    })
    .catch((error) => {
      alert(error.message)
      console.error(error)
    })
    console.log(email.value);
    // const [showPassword, setShowPassword] = useState(false);
    // const handleShowClick = () => setShowPassword(!showPassword);
  };

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
        <Heading fontSize='x-large'>個 人 会 員 登 録</Heading>
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
                  <Input name="name" type="name" placeholder="お名前" />
                </InputGroup>
              </FormControl>
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
                    type="password"
                    // type={ showPassword ? "text" : "password"}
                    placeholder="パスワード"
                  />
                  {/* <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" 
                      // 
                    >
                      {showPassword ? "非表示" : "表示"}
                    </Button>
                  </InputRightElement> */}
                </InputGroup>
              {/* <FormHelperText textAlign="right">
                <Link to="/">パスワードを忘れた場合</Link>
              </FormHelperText> */}
              <br />              
              <div>
              <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
              >登 録</Button>
              </div>
              </FormControl>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
    );
  };    
  
  export default SignUpRev;