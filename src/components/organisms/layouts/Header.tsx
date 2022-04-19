import { Divider, Box, Flex, Heading, IconButton, useDisclosure } from "@chakra-ui/react";
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
                <Heading as="h1" fontSize={{ base: "xl", md: "2xl"}}>SuMiKa</Heading>

            <Flex display={{ base: "none", md: "flex"}}> 
                <Box pr={5}><Link to="/">Home</Link></Box>
                <Box pr={5}><Link to="/page1">Page1</Link></Box>
                <Box pr={5}><Link to="/page2">Page2</Link></Box>
                <Box pr={2}><Link to="/login">Login</Link></Box>
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
