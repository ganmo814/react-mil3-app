import { Divider, Box, Center } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Footer: VFC = memo(() => {
    return (
        <>
            <Divider mt={100} />
            <Box display='flex' justifyContent='center' alignItems='center' fontSize='xs' w='100%' height='150px' bgColor='gray.600' color='whiteAlpha.700'>
                    Copyright © 2022 SuMiKa CORPORATION. All Rights Reserved.
            </Box>
        </>
    )
});
