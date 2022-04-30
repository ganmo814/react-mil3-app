import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image, Button, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { db } from "../firebase"
import { getDocs, collection } from 'firebase/firestore';
import { AiOutlineMail } from "react-icons/ai" 

export const SupDataGet: React.FC = () => {
  const[suppliers, setSuppliers] = useState([{id:"", name:"", postcode:"", address:""}]);
  const property = {
    reviewCount: 0,
    rating: 0.0,
  }

  useEffect(() => {
    const supsCollectionRef = collection(db,'suppliers');
    getDocs(supsCollectionRef).then((querySnapshot) => {
      setSuppliers(
      querySnapshot.docs.map((doc) => ({id: doc.id, name: doc.data().name, postcode: doc.data().postcode, address: doc.data().address }))
      );
    });
  }, []);

  return (
<>
  <Box h='150px' display='flex' alignItems='center' bgColor='white' w='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    <Image ml={4}  boxSize="60px"
           fallbackSrc="https://via.placeholder.com/150"
           alt="company icon" height='85px' width='85px' />
    <Box p='6' w="50%">
      <Box display='flex' alignItems='baseline'>
        <Badge borderRadius='full' px='2' colorScheme='orange'>
          新規
        </Badge>
        <Badge ml='5px' borderRadius='full' px='2' colorScheme='teal'>
          
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
        {suppliers.map((supplier) => (
        <div key={supplier.id}>{supplier.name}</div>
        ))}
      </Box>

      <Box>
        {suppliers.map((supplier) => (
        <div key={supplier.id}>〒{supplier.postcode} {supplier.address}</div>
        ))}
        <Box as='span' color='gray.600' fontSize='sm'>
        </Box>
      </Box>

      <Box display='flex' mt='2' alignItems='center'>
        {Array(5)
          .fill('')
          .map((_, i) => (
            <StarIcon
              key={i}
              color={i < property.rating ? 'yellow.400' : 'gray.300'}
            />
          ))}
        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            評価 {property.rating}／ 
            {property.reviewCount} レビュー
        </Box>
      </Box>
    </Box>
    <Box w="25%" display="flex" justifyContent="flex-end"><Button fontSize={{ base: "xx-small", md: "sm"}} colorScheme="teal" ><AiOutlineMail size={25} color="white" />コンタクトする</Button></Box>
  </Box>
  </>
  );
};


// export const AddFavorite = () => {
//   const [bookmark, setBookmark] = useState(false)
//   const handleAddList = async (id) => {
//     setBookmark(true);
//   }
//     const supsDocumentRef = doc(db, 'users', id);
//     await updateDoc(supsDocumentRef, {
//     bookmark: true,
//     });
//     return (
//     <div></div>
//     );

//   };

function SupRegForm () {
    const property1 = {
      imageUrl: 'https://via.placeholder.com/150',
      imageAlt: 'あすなろ建築工房',
      title: '株式会社あすなろ建築工房',
      address: '〒232-0041 神奈川県横浜市南区陸町1-23-4',
      reviewCount: 34,
      rating: 4.8,
      bookmark: false
    }

    const property2 = {
      imageUrl: 'https://via.placeholder.com/150',
      imageAlt: '株式会社住工房スタイル',
      title: '株式会社住工房スタイル',
      address: '〒111-2222 千葉県柏市西原3-29-6',
      reviewCount: 22,
      rating: 4.6,
      bookmark: false
    }
  
    const property3 = {
      imageUrl: 'https://via.placeholder.com/150',
      imageAlt: '株式会社サトウ工務店',
      title: '株式会社サトウ工務店',
      address: '〒955-0165 新潟県三条市高屋敷65-1',
      reviewCount: 27,
      rating: 4.7,
      bookmark: false
    }
    return (
    <>
      <Box h='150px' display='flex' alignItems='center' bgColor='white' w='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'>
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
        <Box w="25%" display="flex" justifyContent="flex-end"><Button fontSize={{ base: "xx-small", md: "sm"}} colorScheme="teal" ><AiOutlineMail size={25} color="white" />コンタクトする</Button></Box>
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
        <Box w="25%" display="flex" justifyContent="flex-end"><Button fontSize={{ base: "xx-small", md: "sm"}}colorScheme="teal" ><AiOutlineMail size={25} color="white" />コンタクトする</Button></Box>
      </Box>
      <Box h='150px' display='flex' alignItems='center' bgColor='white' w='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={property3.imageUrl} alt={property3.imageAlt} height='85px' width='85px' ml={4} />
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
            {property3.title}
          </Box>
  
          <Box>
            {property3.address}
            <Box as='span' color='gray.600' fontSize='sm'>
            </Box>
          </Box>
  
          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property3.rating ? 'yellow.400' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                評価 {property3.rating}／ 
                {property3.reviewCount} レビュー
            </Box>
          </Box>
        </Box>
        <Box w="25%" display="flex" justifyContent="flex-end"><Button fontSize={{ base: "xx-small", md: "sm"}}colorScheme="teal" ><AiOutlineMail size={25} color="white" />コンタクトする</Button></Box>
      </Box>
      </>
    )
}

export default SupRegForm;