import { Flex, Heading, Text, Image, Box } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { RiDoorOpenLine } from "react-icons/ri";
import { ImStarEmpty } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AiFillFastBackward } from "react-icons/ai";

// import companyIcon from "../public/hogehoge.png";

export default function SideNav() {
  const navigate = useNavigate();
    const handleLogout = () => {
      signOut(auth);
      navigate("/login");
      alert("ログアウトしました")
    };

  return (
    <Flex w="25%" minW="200px" direction="column" align="center" bgColor="whiteAlpha.600">
      <Flex direction="column" justify="space-between">
        <Flex mt="25" mb="50">
          <Image
            borderRadius="full"
            boxSize="60px"
            // src={companyIcon.src}
            fallbackSrc="https://via.placeholder.com/150"
            alt="company icon"
          />
          <Heading ml="3" fontWeight="600" fontSize={{ base: "md", md: "xl"}} alignSelf="center">
            マイページ
          </Heading>
        </Flex>
        <Flex h="65vh" direction="column" justify="space-between">
        <Link to="/mypage_user">
          <Flex fontSize={{ base: "sm", md: "md"}} align="center">
            <Box display='flex' justifyContent='center' alignItems='center' bgColor="teal.500" boxSize="30px" borderRadius="md"><AiFillFastBackward color="white" /></Box>
            <Text ml="3">マイページトップ</Text>
          </Flex>
          </Link>
          <Flex
            h="40vh"
            mt="5vh"
            mb="5vh"
            direction="column"
          >
        <Link to="/mypage_user/searchsup">
          <Flex
            fontSize={{ base: "sm", md: "md"}}
            align="center"
            p="3"
            m="-3"
            rounded="full"
          >
            <Box display='flex' justifyContent='center' alignItems='center' bgColor="teal.500" boxSize="30px" borderRadius="md"><BsSearch color="white" /></Box>
            <Text ml="3">事業者を探す</Text>
          </Flex>
        </Link>
        </Flex>
        <Flex fontSize={{ base: "md", md: "xl"}} mb={10} align="center"  onClick={handleLogout} style={{cursor:'pointer'}}>
        <Box display='flex' justifyContent='center' alignItems='center' bgColor="teal.500" boxSize="30px" borderRadius="md"><RiDoorOpenLine color="white" /></Box>
          <Text ml={3} fontSize="md" >
            ログアウト
          </Text>
        </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}