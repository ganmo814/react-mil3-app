import { Divider, Box, Center, Img } from "@chakra-ui/react";
import { memo, VFC } from "react";
import photo1 from "../../../img/brothers-unsplash.jpg"
import photo2 from "../../../img/living-unsplash.jpg"
import photo3 from "../../../img/houses-unsplash.jpg"
import photo4 from "../../../img/family-unsplash.jpg"

export const PhotosBar: VFC = memo(() => {
    return (
        <>
        <Box boxShadow="md" />
        <Img src={photo1} w='25%' alt='brothers' />
        <Img src={photo2} w='25%' alt='living' />
        <Img src={photo3} w='25%' alt='houses' />
        <Img src={photo4} w='25%' alt='family' />
        </>
    );
});