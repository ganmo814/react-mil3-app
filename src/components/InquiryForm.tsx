import { Button, Box, chakra, Flex, FormControl, Heading, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { FaLock, FaBuilding, FaMailBulk, FaAddressCard } from "react-icons/fa";
import { BsSignpost2Fill } from "react-icons/bs"
import { collection, doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const CFaLock = chakra(FaLock);
const CFaBuilding = chakra(FaBuilding);
const CFaMailBulk = chakra(FaMailBulk);
const CFaAddressCard = chakra(FaAddressCard);
const CBsSignpost2Fill = chakra(BsSignpost2Fill);



const InquiryForm: React.FC = (props: any) => {
  const navigate = useNavigate();
  const handleSubmit = (event:any) => {
    event.preventDefault();
    const { name, postcode, address, email, password } = event.target.elements;
    const supDocumentRef = doc(collection(db, 'suppliers'));
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((supplierCredential) => {
      alert("登録を完了しました。");    
      console.log(supplierCredential);
      setDoc(supDocumentRef, {
        name: name.value,
        postcode: postcode.value,
        address: address.value,
        email: email.value,
        password: password.value,
        confirmed: false
      });
      navigate("/login");
    })
    .catch((error) => {
      alert(error.message)
      console.error(error)
    })
  };

      return (      
      <Flex
        flexDirection="column"
        width="200wh"
        height="80vh"
        justifyContent="center"
        alignItems="center"
        mt="10"
      >
        <Stack
          flexDir="column"
          mt="10"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Heading fontSize='x-large'>法 人 会 員 登 録</Heading>
          <br />
          <Box display='flex' justifyContent='center' alignItems='center' boxSize='46px' borderRadius='full' bgColor='blue.500' ><FaBuilding color="white" size="30px" /></Box>
          <Heading fontSize='lg' color="blue.400">Welcome</Heading>
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
                      children={<CFaBuilding color="gray.300" />}
                    />
                    <Input name="name" type="name" placeholder="会社名" />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CBsSignpost2Fill color="gray.300" />}
                    />
                    <Input name="postcode" type="postcode" placeholder="郵便番号" />
                  </InputGroup>
                </FormControl>                
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaAddressCard color="gray.300" />}
                    />
                    <Input name="address" type="address" placeholder="住所" />
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
                      placeholder="パスワード"
                    />
                  </InputGroup>
                <br />              
                <div>
                <Button
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    colorScheme="blue"
                    width="full"
                >送 信</Button>
                </div>
                </FormControl>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
      );
};    
    
    export default InquiryForm;