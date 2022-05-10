import { Badge, Box, Button, Checkbox, CheckboxGroup, cookieStorageManager, Divider, Flex, FormControl, FormLabel, Heading, HStack, Input, InputGroup, Radio, RadioGroup, Stack, Textarea } from "@chakra-ui/react"
import { addDoc, collection, doc, serverTimestamp, setDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";

export const MessageForm = (props: any) => {
    const navigate = useNavigate();
    const params = useParams();
    const [sendername, setSendername] = useState("");
    const [sendermessage, setSendermessage] = useState("");

    const onChangeSendername = (event: any) => {
        setSendername(event.target.value);
    }
    const onChangeSendermessage = (event: any) => {
        setSendermessage(event.target.value);
    }


    const onClickAddUserInfo = async () => {
        try {
            const userInfoRef = await addDoc(collection(db, "userInfo"), {
                senderId: params.uid,
                name: sendername,
                message: sendermessage,
                timestamp: serverTimestamp(),
            });
            alert("メッセージを送信しました")
            navigate("/mypage_user");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    // const handleSendingMessage = (event:any) => {
    //   event.preventDefault();
    //   const { sendername, 
    //         sendermessage, 
    //         // land, story, floorPlan, floorArea, earthquakePerformance, insulatedHouse, electrificationutilities, solarPowerUtilities 
    //         } = event.target.elements;
    //   console.log(sendername.value, sendermessage.value)
    //   const userinfoDocumentRef = doc(collection(db, 'userinfo'));
    //     setDoc(userinfoDocumentRef, {
    //       name: sendername.value,
    //       message: sendermessage.value,
        //   land: land.value,
        //   story: story.value,
        //   floorPlan: floorPlan.value,
        //   floorArea: floorArea.value,
        //   earthquakePerformance: earthquakePerformance.value,
        //   insulatedHouse: insulatedHouse.value,
        //   Electrificationutilities: electrificationutilities.value,
        //   solarPowerUtilities: solarPowerUtilities,
    //     });
    //     console.log(sendername.value, sendermessage.value)
    //     navigate("/mypage_user");
    // }

    return(
        <>
        <Box mr={5} mb={5}>
        <Stack
            spacing={2}
            p="1rem"
            pb={8}
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
        >
            <FormControl isRequired={true}>
                <FormLabel>お名前</FormLabel>
                    <Input name="name" 
                        type='text' 
                        value={sendername}
                        placeholder="お名前" 
                        variant='outline'
                        onChange={onChangeSendername}
                    />
            </FormControl>
            <FormControl isRequired={true}>
                <FormLabel>照会内容</FormLabel>
                    <Textarea name="message" 
                        value={sendermessage}
                        placeholder="照会内容" 
                        rows={5}
                        variant='outline'
                        mb={2}
                        onChange={onChangeSendermessage} />
            </FormControl>
            {/* <Divider />
            <Heading fontSize={22}>購入ご検討様向け事前アンケート</Heading>
                <br />
                <Box>
                <Badge colorScheme='cyan' mb={1} px={3} borderRadius={"full"} fontSize={18} >物件情報</Badge>
                <FormControl pl={2} isRequired={true}>
                    <InputGroup>
                    <FormLabel marginRight="44px">土地</FormLabel>
                    <RadioGroup defaultValue=''>
                        <HStack spacing='24px'>
                        <Radio name="land" value="Contracted">購入/内定済み</Radio>
                        <Radio name="land" value="Not yet">未購入/検討中</Radio>
                        </HStack>
                    </RadioGroup>
                    </InputGroup>
                    <InputGroup>
                    <FormLabel marginRight="44px">階層</FormLabel>
                    <RadioGroup defaultValue=''>
                        <HStack spacing='24px'>
                        <Radio name="story" value='1F'>平屋</Radio>
                        <Radio name="story" value='2F'>2F</Radio>
                        <Radio name="story" value='3F'>3F</Radio>
                        </HStack>
                    </RadioGroup>
                    </InputGroup>
                    <InputGroup>
                    <FormLabel marginRight="28px">間取り</FormLabel>
                    <RadioGroup defaultValue=''>
                        <HStack spacing='24px'>
                        <Radio name="floorPlan" value='3LDK'>3LDK</Radio>
                        <Radio name="floorPlan" value='4LDK'>4LDK</Radio>
                        <Radio name="floorPlan" value='5LDK以上'>5LDK以上</Radio>
                        </HStack>
                    </RadioGroup>
                    </InputGroup>
                    <InputGroup>
                    <FormLabel>延床面積</FormLabel>
                    <RadioGroup defaultValue=''>
                        <HStack spacing='24px'>
                        <Radio name="floorArea" value='25坪未満'>25坪未満</Radio>
                        <Radio name="floorArea" value='25～30坪'>25～30坪</Radio>
                        <Radio name="floorArea" value='30坪超'>30坪超</Radio>
                        </HStack>
                    </RadioGroup>
                    </InputGroup>
                    <InputGroup>
                    <FormLabel>こだわり</FormLabel>
                    <CheckboxGroup>
                        <HStack spacing='20px'>
                        <Checkbox name="earthquakePerformance" value='耐震性'>耐震性</Checkbox>
                        <Checkbox name="insulatedHouse" value='高断熱高気密'>高断熱高気密</Checkbox>
                        <Checkbox name="electrificationutilities" value='オール電化'>オール電化</Checkbox>
                        <Checkbox name="solarPowerUtilities" value='太陽光発電'>太陽光発電</Checkbox>
                        </HStack>
                    </CheckboxGroup>
                    </InputGroup>
                </FormControl>
                <br />                
                <Badge colorScheme='cyan' mb={1} px={3} borderRadius={"full"} fontSize={18} >お客様情報</Badge>
                <FormControl pl={2} isRequired={true}>
                    <InputGroup>
                    <FormLabel>居住予定人数</FormLabel>
                    <RadioGroup defaultValue=''>
                        <HStack spacing='24px'>
                        <Radio name="numberToLive" value='2名'>2名</Radio>
                        <Radio name="numberToLive" value='3名'>3名</Radio>
                        <Radio name="numberToLive" value='4名'>4名以上</Radio>
                        </HStack>
                    </RadioGroup>
                    </InputGroup>
                    <InputGroup>
                    <FormLabel>居住開始時期</FormLabel>
                    <RadioGroup defaultValue=''>
                        <HStack spacing='24px'>
                        <Radio name="timing" value='最短'>最短</Radio>
                        <Radio name="timing" value='1年以内'>1年以内</Radio>
                        <Radio name="timing" value='未定'>未定</Radio>
                        </HStack>
                    </RadioGroup>
                    </InputGroup>
                    <InputGroup>
                    <FormLabel marginRight="28px">現在の住居</FormLabel>
                    <RadioGroup defaultValue=''>
                        <HStack spacing='24px'>
                        <Radio name="livingStyle" value='賃貸'>賃貸</Radio>
                        <Radio name="livingStyle" value='持家'>持家</Radio>
                        <Radio name="livingStyle" value='その他'>その他</Radio>
                        </HStack>
                    </RadioGroup>
                    </InputGroup>
                    <InputGroup>
                    <FormLabel marginRight="44px">世帯年収</FormLabel>
                    <RadioGroup defaultValue=''>
                        <HStack spacing='20px'>
                        <Radio name="income" value='～600万円'>～600万円</Radio>
                        <Radio name="income" value='600～1,000万円'>600～1,000万円</Radio>
                        <Radio name="income" value='1,000万円～'>1,000万円～</Radio>
                        </HStack>
                    </RadioGroup>
                    </InputGroup>
                </FormControl>
                <br />
                </Box> */}
                <FormControl>
                    <Flex justifyContent='center'>
                        <Button
                        size='md'
                        minW={40}
                        borderRadius={"full"}
                        colorScheme='telegram'
                        onClick={onClickAddUserInfo}
                        >送 信</Button>
                    </Flex>
                </FormControl>
                </Stack>
            </Box>
        </>
    );
};