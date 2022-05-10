import { memo, VFC } from "react";
import SideNav from "../templates/SideNav";
import { Flex, Divider, Center, Box, Heading } from "@chakra-ui/react";

export const MyPageUser: VFC = memo(() => {

    return (
      <Flex direction="row" overflow="hidden">
        <SideNav />
        <Center my="10" mr="1">
          <Divider orientation="vertical" />
        </Center>
        <Flex w="100%" mt={10} ml={5} direction="column">
          <Box><Heading fontSize="2xl"></Heading></Box> 
          <br />
        </Flex>
      </Flex>
    );
  });

// export const MyPage: VFC = memo(() => {
//     return (
//         <div>
//             <SideNav />
//             <SupRegForm />
//         </div>
//     );
// });
