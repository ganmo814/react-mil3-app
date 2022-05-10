import { useNavigate, useParams } from 'react-router-dom';
import { db } from "../../firebase"
import { Input, Button, FormControl, FormLabel, Flex, Stack } from '@chakra-ui/react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

// type suppliers = {
//     name: string;
//     postcode: string;
//     address: string;
//     email: string;
//     confirmed: boolean;
// }

export const SupplierDetail = () => {
    // const[suppliers, setSuppliers] = useState([]);
    const navigate = useNavigate();
    const params = useParams();
    const { register, handleSubmit, reset } = useForm();

    // 既存データベースからのデータ取得
    useEffect(() => {
        async function fetchData() {
        const supsDocumentRef = doc(db,'suppliers', `${params.uid}`);
        const docSnap = await getDoc(supsDocumentRef);
            if (docSnap.exists()) {
                reset(docSnap.data());
            } else {
                console.log("No such document!");
            }
        } 
        fetchData();
    }, []);

    // useEffect(() => {
    //     const supsCollectionRef = collection(db,'suppliers');
    //     getDocs(supsCollectionRef).then((querySnapshot) => {
    //       setSuppliers(
    //       querySnapshot.docs.map((doc) => ({id: doc.id, name: doc.data().name, postcode: doc.data().postcode, address: doc.data().address, confirmed: doc.data().confirmed }))
    //       );
    //     });
    //   }, []);

    const onSubmit = async (data:any) => {
        await setDoc(doc(db, 'suppliers', `${params.uid}`), {
            name: data.name,
            postcode: data.postcode,
            address: data.address,
            email: data.email,
            confirmed: true,
        });
        navigate("/admin");
    }

    return(
        <>
        <Stack
            spacing={2}
            p="1rem"
            pb={8}
            mb={5}
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
        >
            <form onSubmit={handleSubmit(onSubmit)} >
            <FormControl isRequired={true}>
                <FormLabel>name</FormLabel>
                    <Input {...register("name")}
                        name="name" 
                        type='name' 
                        // value={supplier.name} 
                        variant='outline'
                    />
            </FormControl>
            <FormControl isRequired={true}>
                <FormLabel>postcode</FormLabel>
                    <Input {...register("postcode")}
                        name="postcode" 
                        type='text' 
                        // value={supplier.postcode} 
                        variant='outline'
                    />
            </FormControl>
            <FormControl isRequired={true}>
                <FormLabel>address</FormLabel>
                    <Input {...register("address")} 
                        name="address" 
                        type='text' 
                        // value={`{params.uid}.address`} 
                        variant='outline'
                    />
            </FormControl>
            <FormControl isRequired={true}>
                <FormLabel>email</FormLabel>
                    <Input {...register("email")} 
                        name="email" 
                        type='email' 
                        // value={`{params.uid}.email`} 
                        variant='outline'
                    />
            </FormControl>
            <FormControl>
                <Flex justifyContent='center'>
                <Button mt={5}
                    minW={40}
                    borderRadius={"full"}
                    colorScheme='telegram'>
                <input type="submit" 
                    value="確認・更新"
                    style={{backgroundColor:'transparent', 
                    fontWeight:'bold'}}
                />
                </Button>
                </Flex>
            </FormControl>

            </form>
        </Stack>
        </>
    );        
};