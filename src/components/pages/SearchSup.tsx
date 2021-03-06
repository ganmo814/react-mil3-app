import { memo, VFC } from "react";
import SupRegForm from "../SupRegForm";

import SideNav from "../templates/SideNav";

import { Flex, Divider, Center, Heading, Box } from "@chakra-ui/react";
import { SupDataGet } from "../SupDataGet";

export const SearchSup: VFC = memo(() => {

    return (
      <>
      <Flex direction="row" overflow="hidden">
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
