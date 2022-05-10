import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image, Button, Spacer, Table, TableContainer, Thead, Tr, Th, Tbody, Td, Text, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { db } from "../firebase"
import { getDocs, collection } from 'firebase/firestore';
import { AiOutlineMail } from "react-icons/ai" 
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const SupDataGet: React.FC = () => {
  const[suppliers, setSuppliers] = useState([{id:"", name:"", postcode:"", address:""}]);
  const property = {
    reviewCount: 0,
    rating: 0.0,
  }
  
  const navigate = useNavigate();
 
  useEffect(() => {
    const supsCollectionRef = collection(db,'suppliers');
    getDocs(supsCollectionRef).then((querySnapshot) => {
      setSuppliers(
      querySnapshot.docs.map((doc) => ({id: doc.id, name: doc.data().name, postcode: doc.data().postcode, address: doc.data().address }))
      );
    });
  }, []);

  return (
    <div>
    {suppliers.map((supplier) => (
      <form key={supplier.id}>
        <Stack boxShadow={"md"}  borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <TableContainer>
          <Table bgColor={'white'} variant='simple'>
            <Tbody>
              <Tr>
                <Td pl={0} justifyContent="left">
                    <Image ml={4}  boxSize="60px"
                    fallbackSrc="https://via.placeholder.com/150"
                    alt="company icon" height='85px' width='85px' />
                </Td>
                <Td pl={0}>
                <Badge borderRadius='full' px='2' colorScheme='orange'>新規</Badge>
                <Text fontWeight={"bold"}>{supplier.name}</Text>
                <Text>〒{supplier.postcode} {supplier.address}</Text>
                {Array(5)
                    .fill('')
                    .map((_, i) => (
                        <StarIcon
                        key={i}
                        color={i < property.rating ? 'yellow.400' : 'gray.300'}
                        />
                        ))}
                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        評価 {property.rating}／{property.reviewCount} レビュー
                        </Box>
                </Td>
                <Td pl={0}>
                  <Link to={`/mypage_user/messagesender/${supplier.id}`}>
                    <Box display="flex" justifyContent="flex-end"><Button fontSize={{ base: "xx-small", md: "sm"}} colorScheme="teal" leftIcon={<AiOutlineMail />} >コンタクトする</Button></Box>
                  </Link>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        </Stack>
        </form>
      ))}
  
  </div>
  );
};
