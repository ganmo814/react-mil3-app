import { Text, Divider, Box, Flex, Heading, IconButton, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons"
import { MenuDrawer } from "../../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    const onClickHome = useCallback(() => navigate("/"), []);
    const onClickPage1 = useCallback(() => navigate("/page1"), []);
    const onClickPage2 = useCallback(() => navigate("/page2"), []);    
    const onClickLogin = useCallback(() => navigate("/login"), []);    

    return (
        <>
            <Flex 
                as="nav"    
                bg="gray.50" 
                color="gray.700" 
                align="center" 
                justify="space-between"
                padding={{ base: 4, md: 6}}
            >
                <Heading as="h1" fontSize={{ base: "2xl", md: "3xl"}}>SuMiKa</Heading>

            <Flex display={{ base: "none", md: "flex"}} > 
                <Box fontWeight="bold" display="flex" alignItems="end" pr={7}><Link to="/">トップページ</Link></Box>
                <Box fontWeight="bold" display="flex" alignItems="end" textAlign="center" pr={7}><Link to="/page1">家を買いたい<br /><Text fontSize='xs'>(会員登録)</Text></Link></Box>
                <Box fontWeight="bold" display="flex" alignItems="end" textAlign="center" pr={7}><Link to="/page2">家を売りたい<br /><Text fontSize='xs'>(法人登録)</Text></Link></Box>
                <Box fontWeight="bold" display="flex" alignItems="end" pr={3}><Link to="/login">ログイン</Link></Box>
            </Flex>
            <IconButton 
                aria-label="メニューボタン" 
                icon={<HamburgerIcon />} 
                size="sm" 
                variant="unstyled" 
                display={{ base: "block", md: "none" }}
                onClick={onOpen}
            />
            </Flex>
            <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickPage1={onClickPage1} onClickPage2={onClickPage2} onClickLogin={onClickLogin} />
            <Divider />
        </>
    )
});
