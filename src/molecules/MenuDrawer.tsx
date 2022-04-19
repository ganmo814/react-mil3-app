import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
    onClose: () => void;
    isOpen: boolean;
    onClickHome: () => void;
    onClickPage1: () => void;
    onClickPage2: () => void;
    onClickLogin: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
    const { onClose, isOpen, onClickHome, onClickPage1, onClickPage2, onClickLogin } = props;
    return (
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100">
                        <Button onClick={onClickHome} w="100%">Home</Button>
                        <Button onClick={onClickPage1} w="100%">Page1</Button>
                        <Button onClick={onClickPage2} w="100%">Page2</Button>
                        <Button onClick={onClickLogin} w="100%">Login</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>

    );
});