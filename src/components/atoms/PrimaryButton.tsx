import { Button, ChakraProvider } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const PrimaryButton = (props: any) => {
    const { children } = props;
    return (
        <button>{children}</button>
    );
};