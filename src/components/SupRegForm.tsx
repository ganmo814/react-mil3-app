import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image, Button, Spacer, Table, TableContainer, Thead, Tr, Th, Tbody, Td, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { db } from "../firebase"
import { getDocs, collection } from 'firebase/firestore';
import { AiOutlineMail } from "react-icons/ai" 
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// export const SupDataGet: React.FC = () => {
//   const[suppliers, setSuppliers] = useState([{id:"", name:"", postcode:"", address:""}]);
//   const property = {
//     reviewCount: 0,
//     rating: 0.0,
//   }
  
//   const navigate = useNavigate();
//   const handleMessageSender = () => {
//     navigate("/mypage_user/messagesender");
//   }

//   useEffect(() => {
//     const supsCollectionRef = collection(db,'suppliers');
//     getDocs(supsCollectionRef).then((querySnapshot) => {
//       setSuppliers(
//       querySnapshot.docs.map((doc) => ({id: doc.id, name: doc.data().name, postcode: doc.data().postcode, address: doc.data().address }))
//       );
//     });
//   }, []);

//   return (
// <>
//   <Box h='150px' display='flex' alignItems='center' bgColor='white' w='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'>
//     <Image ml={4}  boxSize="60px"
//            fallbackSrc="https://via.placeholder.com/150"
//            alt="company icon" height='85px' width='85px' />
//     <Box p='6' w="50%">
//       <Box display='flex' alignItems='baseline'>
//         <Badge borderRadius='full' px='2' colorScheme='orange'>
//           新規
//         </Badge>
//         <Badge ml='5px' borderRadius='full' px='2' colorScheme='teal'>
          
//         </Badge>
//         <Box
//           color='gray.500'
//           fontWeight='semibold'
//           letterSpacing='wide'
//           fontSize='xs'
//           textTransform='uppercase'
//           ml='2'
//         >
//         </Box>
//       </Box>

//       <Box
//         mt='1'
//         fontWeight='semibold'
//         as='h4'
//         lineHeight='tight'
//         isTruncated
//       >
//         {suppliers.map((supplier) => (
//         <div key={supplier.id}>{supplier.name}</div>
//         ))}
//       </Box>

//       <Box>
//         {suppliers.map((supplier) => (
//         <div key={supplier.id}>〒{supplier.postcode} {supplier.address}</div>
//         ))}
//         <Box as='span' color='gray.600' fontSize='sm'>
//         </Box>
//       </Box>

//       <Box display='flex' mt='2' alignItems='center'>
//         {Array(5)
//           .fill('')
//           .map((_, i) => (
//             <StarIcon
//               key={i}
//               color={i < property.rating ? 'yellow.400' : 'gray.300'}
//             />
//           ))}
//         <Box as='span' ml='2' color='gray.600' fontSize='sm'>
//             評価 {property.rating}／ 
//             {property.reviewCount} レビュー
//         </Box>
//       </Box>
//     </Box>
//     <Box onClick={handleMessageSender} w="25%" display="flex" justifyContent="flex-end"><Button fontSize={{ base: "xx-small", md: "sm"}} colorScheme="teal" leftIcon={<AiOutlineMail />} >コンタクトする</Button></Box>
//   </Box>
//   </>
//   );
// };


// // export const AddFavorite = () => {
// //   const [bookmark, setBookmark] = useState(false)
// //   const handleAddList = async (id) => {
// //     setBookmark(true);
// //   }
// //     const supsDocumentRef = doc(db, 'users', id);
// //     await updateDoc(supsDocumentRef, {
// //     bookmark: true,
// //     });
// //     return (
// //     <div></div>
// //     );

// //   };

function SupRegForm () {
  const navigate = useNavigate();
  const handleMessageSender = () => {
    navigate("/mypage_user/messagesender");
  }
    const property1 = {
      imageUrl: 'https://via.placeholder.com/150',
      imageAlt: 'あすなろ建築工房',
      title: '株式会社あすなろ建築工房',
      address: '〒232-0041 神奈川県横浜市南区陸町1-23-4',
      reviewCount: 34,
      rating: 4.8,
      confirmed: false
    }

    const property2 = {
      imageUrl: 'https://via.placeholder.com/150',
      imageAlt: '株式会社住工房スタイル',
      title: '株式会社住工房スタイル',
      address: '〒111-2222 千葉県市原市市一ノ瀬33-29-650',
      reviewCount: 22,
      rating: 4.6,
      confirmed: false
    }
    return (
    <>
      {/* <Box h='150px' display='flex' alignItems='center' bgColor='white' w='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={property1.imageUrl} alt={property1.imageAlt} height='85px' width='85px' ml={4} />
        <Box p='6' w="50%">
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              自然素材
            </Badge>
            <Badge ml='5px' borderRadius='full' px='2' colorScheme='teal'>
              高気密高断熱住宅
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
            </Box>
          </Box>  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {property1.title}
          </Box>
  
          <Box>
            {property1.address}
            <Box as='span' color='gray.600' fontSize='sm'>
            </Box>
          </Box>
  
          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property1.rating ? 'yellow.400' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                評価 {property1.rating}／ 
                {property1.reviewCount} レビュー
            </Box>
          </Box>
        </Box>
        <Box onClick={handleMessageSender} w="25%" display="flex" justifyContent="flex-end"><Button fontSize={{ base: "xx-small", md: "sm"}} colorScheme="teal" leftIcon={<AiOutlineMail />} >コンタクトする</Button></Box>
      </Box>
      <Box h='150px' display='flex' alignItems='center' bgColor='white' w='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={property2.imageUrl} alt={property2.imageAlt} height='85px' width='85px' ml={4} />
        <Box p='6' w="50%">
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              自然素材
            </Badge>
            <Badge ml='5px' borderRadius='full' px='2' colorScheme='teal'>
              高気密高断熱住宅
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
            </Box>
          </Box>  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {property2.title}
          </Box>
  
          <Box>
            {property2.address}
            <Box as='span' color='gray.600' fontSize='sm'>
            </Box>
          </Box>
  
          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property2.rating ? 'yellow.400' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                評価 {property2.rating}／ 
                {property2.reviewCount} レビュー
            </Box>
          </Box>
        </Box>
        <Box onClick={handleMessageSender} w="25%" display="flex" justifyContent="flex-end"><Button fontSize={{ base: "xx-small", md: "sm"}}colorScheme="teal" leftIcon={<AiOutlineMail />} >コンタクトする</Button></Box>
      </Box> */}

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
                  <Badge borderRadius='full' px='2' colorScheme='teal'>自然素材</Badge>
                  <Badge ml='5px' borderRadius='full' px='2' colorScheme='teal'>高気密高断熱住宅</Badge>
                  <Text fontWeight={"bold"}>{property1.title}</Text>
                  <Text>{property1.address}</Text>
                  {Array(5)
                      .fill('')
                      .map((_, i) => (
                          <StarIcon
                          key={i}
                          color={i < property1.rating ? 'yellow.400' : 'gray.300'}
                          />
                          ))}
                          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                          評価 {property1.rating}／{property1.reviewCount} レビュー
                          </Box>
                  </Td>
                  <Td pl={0}><Box onClick={handleMessageSender} display="flex" justifyContent="flex-end"><Button fontSize={{ base: "xx-small", md: "sm"}} colorScheme="teal" leftIcon={<AiOutlineMail />} >コンタクトする</Button></Box></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>

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
                  <Badge borderRadius='full' px='2' colorScheme='teal'>自然素材</Badge>
                  <Badge ml='5px' borderRadius='full' px='2' colorScheme='teal'>高気密高断熱住宅</Badge>
                  <Text fontWeight={"bold"}>{property2.title}</Text>
                  <Text>{property2.address}</Text>
                  {Array(5)
                      .fill('')
                      .map((_, i) => (
                          <StarIcon
                          key={i}
                          color={i < property2.rating ? 'yellow.400' : 'gray.300'}
                          />
                          ))}
                          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                          評価 {property2.rating}／{property2.reviewCount} レビュー
                          </Box>
                  </Td>
                  <Td pl={0}><Box onClick={handleMessageSender} display="flex" justifyContent="flex-end"><Button fontSize={{ base: "xx-small", md: "sm"}} colorScheme="teal" leftIcon={<AiOutlineMail />} >コンタクトする</Button></Box></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>

    </>
  )
}

export default SupRegForm;