import { memo, useEffect, useState } from "react";
// import SideNav from "../templates/SideNav";

import { Flex, Divider, Center, Heading, Box, Table, Tbody, Tr, Td, Thead, Th } from "@chakra-ui/react";
import SideNavSupplier from "../templates/SideNavSupplier";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
// import { Link } from 'react-router-dom';

// type PROPS ={
//   id: string;
//   name: string;
//   message: string;
//   timestamp: any | undefined;
// }

export const MessageReceiver: React.FC = memo(() => {
  const[userInfos, setUserInfos] = useState([{id:"", name:"", message:""
  // , timestamp: null 
  }]);

  useEffect(() => {
    const usersCollectionRef = collection(db,'userInfo');
    getDocs(usersCollectionRef).then((querySnapshot) => {
      setUserInfos(
      querySnapshot.docs.map((doc) => ({id: doc.id, name: doc.data().name, message: doc.data().message
        // , timestamp: doc.data({ serverTimestamps: "estimate" }).timestamp 
      }))
      );
    });
  }, []);

    return (
      <>
        <Flex direction="row" overflow="hidden">
          <SideNavSupplier />
          <Center>
            <Divider orientation="vertical" />
          </Center>
          <Flex w="100%" mt={10} ml={5} direction="column">
          <Box mb={10}>
            <Heading fontSize="2xl">新着メッセージ</Heading>
          </Box> 
          <Table>
            <Thead>
              <Tr>
                <Th>送信者</Th>
                <Th>メッセージ内容</Th>
                <Th></Th>
              </Tr>
            </Thead>
          </Table>
          {userInfos.map((userInfo) => (
            <Table key={userInfo.id} bgColor={"white"} variant='simple'>
            <Tbody>
              <Tr>
                {/* <Td>{new Date(userInfo.timestamp?.toDate()).toLocaleString()}</Td> */}
                <Td fontWeight={'bold'} >{userInfo.name}</Td>
                <Td>{userInfo.message}</Td>
                <Td>
                  {/* <Link to={"/detail"}>
                  <Button size='sm' colorScheme="facebook">詳細</Button>
                  </Link> */}
                </Td>
              </Tr>
            </Tbody>
            </Table>
          ))}
          <br />
        </Flex>
      </Flex>

      </>
    );
  });
