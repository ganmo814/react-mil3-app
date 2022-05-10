import { memo, VFC } from "react";
import { Button, Flex, Box, Heading, Stack } from "@chakra-ui/react";
import { SupplierDetail } from "./SupplierDetail";
import { Link, useParams } from "react-router-dom";

export const Detail: VFC = memo(() => {
    const params = useParams();
    console.log(params);

    return (
      <>
        <Flex direction="row" overflow="hidden">
            <Flex w="100%" mt={10} ml={5} direction="column">
            <Box><Heading fontSize="2xl">確認・更新</Heading></Box> 
            <br />
            <SupplierDetail />
            </Flex>
        </Flex>
        <Stack ml={2} mb={10} w="100%" alignItems="center" >
            <Link to="/admin"><Button colorScheme='teal'>前のページに戻る</Button></Link>
        </Stack>
      </>
    );
  });