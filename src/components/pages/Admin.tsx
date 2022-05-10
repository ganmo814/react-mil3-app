import { memo, VFC, useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { Button, Box, Flex, Heading, Table, Tbody, Tr, Td } from '@chakra-ui/react';
// import { StarIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';


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
    };

    return (
    <div>
        {users.map((user) => (
            <Table key={user.id} bgColor={"white"} variant='simple'>
              <Tbody>
                <Tr>
                  <Td fontWeight={'bold'} >{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    <Button onClick={() => deleteUser(user.id)} size='sm' colorScheme='red' ml={5}>削除</Button>              
                  </Td>
                </Tr>
              </Tbody>
            </Table>
        ))}
    </div>
    )
  });

  
export const SupDataGet: React.FC = () => {
  const[suppliers, setSuppliers] = useState([{id:"", name:"", postcode:"", address:""}]);

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

  {suppliers.map((supplier) => (
      <Table key={supplier.id} bgColor={"white"} variant='simple'>
        <Tbody>
          <Tr>
            <Td fontWeight={'bold'} >{supplier.name}</Td>
            <Td>〒{supplier.postcode} {supplier.address}</Td>
            <Td>
              <Link to={`detail/${supplier.id}`}>
              <Button size='sm' colorScheme="facebook">詳細</Button>
              </Link>
              <Button onClick={() => deleteSup(supplier.id)} size='sm' colorScheme='red' ml={5}>削除</Button>              
            </Td>
          </Tr>
        </Tbody>
      </Table>
  ))}
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