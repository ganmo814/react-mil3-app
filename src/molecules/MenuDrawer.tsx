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
                        <Button onClick={onClickHome} w="100%">トップページ</Button>
                        <Button onClick={onClickPage1} w="100%">家を買いたい(会員登録)</Button>
                        <Button onClick={onClickPage2} w="100%">家を売りたい(法人登録)</Button>
                        <Button onClick={onClickLogin} w="100%">ログイン</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>

    );
});