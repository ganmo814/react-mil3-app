import { memo, VFC } from "react";
import SideNav from "../templates/SideNav";

import { Flex, Divider, Center, Heading, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { MessageForm } from "../MessageForm";

export const MessageSender: VFC = memo(() => {

    return (
      <Flex direction="row" overflow="hidden">
        <SideNav />
        <Outlet />
        <Center>
          <Divider orientation="vertical" />
        </Center>
        <Flex w="100%" mt={10} ml={5} direction="column">
        <Box>
            <Heading fontSize="2xl">送信フォーム</Heading>
        </Box> 
        <br />
        <MessageForm />
        </Flex>
      </Flex>
    );
});
