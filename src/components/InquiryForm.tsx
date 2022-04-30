import { Button, Avatar, Box, chakra, Flex, FormControl, Heading, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { FaLock, FaBuilding, FaMailBulk, FaAddressCard } from "react-icons/fa";
import { BsSignpost2Fill } from "react-icons/bs"
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const CFaLock = chakra(FaLock);
const CFaBuilding = chakra(FaBuilding);
const CFaMailBulk = chakra(FaMailBulk);
const CFaAddressCard = chakra(FaAddressCard);
const CBsSignpost2Fill = chakra(BsSignpost2Fill);


const InquiryForm = () => {
    const handleSubmit = async (event:any) => {
      event.preventDefault();
      const { name, postcode, address, email, password } = event.target.elements;
      const supDocumentRef = doc(collection(db, 'suppliers'));
      await setDoc(supDocumentRef, {
        name: name.value,
        postcode: postcode.value,
        address: address.value,
        email: email.value,
        password: password.value
      });
      alert("仮登録を完了しました。登録されたアドレスに本登録に関するメールを送付しましたのでご確認下さい")
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
                    colorScheme="teal"
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