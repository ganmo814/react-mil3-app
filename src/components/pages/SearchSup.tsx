import { memo, VFC } from "react";
import SupRegForm, { SupDataGet } from "../SupRegForm";
import SideNav from "../templates/SideNav";

import { Flex, Divider, Center, Heading, Box } from "@chakra-ui/react";

export const SearchSup: VFC = memo(() => {

    return (
      <>
      <Flex maxW="2000px" direction="row" overflow="hidden">
        <SideNav />
        <Center>
          <Divider orientation="vertical" />
        </Center>
        <Flex w="100%" mt={10} ml={5} direction="column">
        <Box><Heading fontSize="2xl">事業者一覧</Heading></Box> 
        <br />
        <SupRegForm />
        <SupDataGet />
        </Flex>
      </Flex>
      </>
    );
  });
