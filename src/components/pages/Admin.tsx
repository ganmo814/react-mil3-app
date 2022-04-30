import { memo, VFC, useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { Button, Badge, Box, Flex, Heading, Image } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';


export const UsersDataGet: VFC = memo(() => {
    const [users, setUsers] = useState([{id:"", name:"", email:"", password:""}]);

    useEffect(() => {
      const userCollectionRef = collection(db,'users');
      getDocs(userCollectionRef).then((querySnapshot) => {
        setUsers(
        querySnapshot.docs.map((doc) => ({id: doc.id, name: doc.data().name, email: doc.data().email, password:"" }))
        );
      });
    }, []);

      const deleteUser = async (id:any) => {
      const userDocumentRef = doc(db, 'users', id);
      await deleteDoc(userDocumentRef);
      window.location.reload();
    };

    return (
    <div>
        {users.map((user) => (
        <Flex w="100%" display="flex" alignItems="center" ml={5} key={user.id}>
          <Box w="60%" lineHeight="40px">
            {user.name} {user.email}
          </Box>

          <Box display="flex" justifyContent="flex-end" >
            <Button onClick={() => deleteUser(user.id)} size='sm' colorScheme='red' ml={5} >削除</Button>
          </Box>
        </Flex>
        ))}
    </div>
    )
  });

  
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

  const deleteSup = async (id:any) => {
    const supsDocumentRef = doc(db, 'suppliers', id);
    await deleteDoc(supsDocumentRef);
  };

  return (
<>
  <Box h='150px' display='flex' alignItems='center' bgColor='white' w='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    <Image ml={4}  boxSize="60px"
           fallbackSrc="https://via.placeholder.com/150"
           alt="company icon" height='85px' width='85px' />
    <Box p='6'>
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
    {suppliers.map((supplier) => (
    <Box key={supplier.id} onClick={() => deleteSup(supplier.id)} w="16%" display="flex" justifyContent="flex-end" ><Button size='sm' colorScheme='red' ml={5} >削除</Button></Box>
    ))}
  </Box>
  </>
  );
};

export const Admin = () => {
  return(
    <>
    <Heading  mt={5} ml={5} color="gray.400">管理者ページです</Heading>
    <Flex w="100%" mt={10} ml={5} direction="column">
      <Box><Heading fontSize="2xl">新規申込事業者</Heading></Box> 
      <br />
    </Flex>    
    <SupDataGet />

    <Flex w="100%" mt={10} ml={5} direction="column">
      <Box><Heading fontSize="2xl">新規申込ユーザー</Heading></Box> 
      <br />
    </Flex>
    <UsersDataGet />
    <br />
    </>
  );
};