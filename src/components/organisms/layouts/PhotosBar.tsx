import { Box, Img } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const PhotosBar: VFC = memo(() => {
    return (
        <>
        <Box boxShadow="md" />
        <Img src={`${process.env.PUBLIC_URL}/img/brothers-unsplash.jpg`} w='25%' alt='brothers' />
        <Img src={`${process.env.PUBLIC_URL}/img/living-unsplash.jpg`} w='25%' alt='living' />
        <Img src={`${process.env.PUBLIC_URL}/img/houses-unsplash.jpg`} w='25%' alt='houses' />
        <Img src={`${process.env.PUBLIC_URL}/img/family-unsplash.jpg`} w='25%' alt='family' />
        </>
    );
});