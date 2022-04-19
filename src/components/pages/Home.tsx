import { memo, VFC } from "react";
import { Wrap, WrapItem, Divider, Box, Flex, Stack, Button, ChakraProvider, VStack, Center, HStack, Text, Heading, Container, Stat, Img } from "@chakra-ui/react"
import BgMovie from "../../movie/top_bg.mp4";
import { BsLaptop } from "react-icons/bs"
import { AiOutlineMoneyCollect, AiOutlineHome } from "react-icons/ai"
import { Footer } from "../organisms/layouts/Footer";
import { PhotosBar } from "../organisms/layouts/PhotosBar";


function HomeTop(){
    return(
        <div>
            <video autoPlay loop muted
            style={{
                position: "absolute",
                width: "100%",
                height: "300px",
                objectFit: "cover",
                transform: "translate(-0%, -0%)",
                zIndex: -1
            }}>
                <source src={BgMovie} type="video/mp4" />
            </video>
            <Flex w="full" h="300px"
                // justifyContent="center"
                alignItems="center"                
            >

            <Box marginLeft="5%" borderRadius="3" bgColor="white" opacity="90%" w="20%" minW="210px" h="70%">
                <VStack m='3'>
                    <Text fontSize='xs' fontWeight='bold'>3分で終わる無料会員登録だけで<br />すぐにサービス利用開始可能です</Text>
                    <Text fontSize='xs'>住宅購入検討者様</Text>
                    <Button margin={0} fontSize='xx-small' colorScheme='teal'>優良な住宅供給者を探す<br />START</Button>
                    <Text fontSize='xs'>住宅供給者様</Text>
                    <Button paddingLeft={2.5} paddingRight={2.5} margin={0} fontSize='xx-small' colorScheme='linkedin'>住宅供給者として登録する<br />START</Button>
                </VStack>
            </Box>
            </Flex>
        </div>
    );
};

function HomeMid1(){
    return(
        <>
        <div>
            <Heading textAlign="center" fontSize={22} mt={70}>住宅購入検討者様のメリット</Heading>

            <Wrap justify='center' spacing='10px' w='100%' p={9}>
            <WrapItem>
                <Center minW='xs' minH='100px'>
                    <VStack m={3}>
                        <Box display='flex' justifyContent='center' alignItems='center' boxSize='80px' borderRadius='full' bgColor='teal.500' ><AiOutlineHome color="white" size="40px" /></Box>
                        <br />
                        <Heading fontSize="md">信頼ある事業者様のご紹介</Heading>
                        <Text textAlign='center' fontSize="xs">顧客評価の可視化による信用の担保。<br />理想のマイホーム実現に<br />最適な事業者様を選択できます。</Text>
                    </VStack>
                </Center>
            </WrapItem>
            <WrapItem>
            <Center minW='xs' minH='100px'>
                    <VStack m={3}>
                        <Box display='flex' justifyContent='center' alignItems='center' boxSize='80px' borderRadius='full' bgColor='teal.500' ><AiOutlineMoneyCollect  color="white" size="40px" /></Box>
                        <br />
                        <Heading fontSize="md">価格の透明性</Heading>
                        <Text textAlign='center' fontSize="xs">これまで人生最大の買物であるにも関わらず<br />ブラックボックスとなっていた<br />戸建住宅価格をオープンにします。</Text>
                    </VStack>
                </Center>
            </WrapItem>
            <WrapItem>
            <Center minW='xs' minH='100px'>
                    <VStack m={3}>
                        <Box display='flex' justifyContent='center' alignItems='center' boxSize='80px' borderRadius='full' bgColor='teal.500' ><BsLaptop color='white' size="40px" /></Box>
                        <br />
                        <Heading fontSize="md">オンライン対応で手軽に</Heading>
                        <Text textAlign='center' fontSize="xs">モデルルームの訪問や多数の事業者様との<br />複数回に亘る打合せに要する<br />労力・時間を削減することができます。</Text>
                    </VStack>
                </Center>
            </WrapItem>
            </Wrap>

            <Divider />

            <Heading textAlign="center" fontSize={22} mt={70}>住宅供給事業者様のメリット</Heading>

            <Wrap justify='center' spacing='10px' w='100%' p={9}>
            <WrapItem>
                <Center minW='xs' minH='100px'>
                    <VStack m={3}>
                        <Box display='flex' justifyContent='center' alignItems='center' boxSize='80px' borderRadius='full' bgColor='blue.500' ><AiOutlineHome color="white" size="40px" /></Box>
                        <br />
                        <Heading fontSize="md">住宅購入検討者様のご紹介</Heading>
                        <Text textAlign='center' fontSize="xs">会社情報を登録・更新するだけで、<br />住宅購入を検討されているお客様を<br />ご紹介します。</Text>
                    </VStack>
                </Center>
            </WrapItem>
            <WrapItem>
            <Center minW='xs' minH='100px'>
                    <VStack m={3}>
                        <Box display='flex' justifyContent='center' alignItems='center' boxSize='80px' borderRadius='full' bgColor='blue.500' ><AiOutlineMoneyCollect  color="white" size="40px" /></Box>
                        <br />
                        <Heading fontSize="md">営業資源の有効活用</Heading>
                        <Text textAlign='center' fontSize="xs">確率の低い新規集客営業の削減、初期的な<br />ヒアリング業務を省略できる事により<br />成約に繋げる本質的な営業活動に注力可能です。</Text>
                    </VStack>
                </Center>
            </WrapItem>
            <WrapItem>
            <Center minW='xs' minH='100px'>
                    <VStack m={3}>
                        <Box display='flex' justifyContent='center' alignItems='center' boxSize='80px' borderRadius='full' bgColor='teal.500' ><BsLaptop color='white' size="40px" /></Box>
                        <br />
                        <Heading fontSize="md">コアビジネス（家づくり）への集中</Heading>
                        <Text textAlign='center' fontSize="xs">人的資源の有効活用により、<br />競争力を高める品質面の改善等<br />家づくりに集中することができます。</Text>
                    </VStack>
                </Center>
            </WrapItem>
            </Wrap>



        </div>
        </>
    );
};

function HomeMid2(){
    return(
        <>
        <Flex>
            <PhotosBar />
        </Flex>
        </>
    );
};


function HomeBot(){
    return(
        <div>
            <Stack
                justifyContent="center"
                alignItems="center"
                mt={50}
            >
            <Text fontSize='sm'>3分で終わる無料会員登録だけですぐにサービス利用開始可能です</Text>
            <Flex>
            <Button fontSize='sm' p={7} m={5} colorScheme='teal' variant='solid' borderRadius='35'>
                優良な住宅供給者を探す<br />START</Button>
            <Button fontSize='sm' p={7} m={5} colorScheme='linkedin' variant='solid' borderRadius='35'>
                住宅供給者として登録する<br />START</Button>
            </Flex>
            </Stack>
        </div>
    );
};



export const Home: VFC = memo(() => {
    return (
        <div >
            <ChakraProvider>
                <HomeTop />
                <HomeMid1 />
                <HomeMid2 />
                <HomeBot />
                <Footer />
            </ChakraProvider>
        </div>
    );
});
