import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Footer } from "../organisms/layouts/Footer";

export const Page2: VFC = memo(() => {
    return (
        <div>
            <RegiSup />
        </div>
    );
});

function RegiSup() {
    const property = {
      imageUrl: 'https://www.asunaro-studio.com/wp-content/uploads/2021/05/avatar.png',
      imageAlt: 'あすなろ建築工房',
      title: '株式会社あすなろ建築工房',
      address: '〒232-0041 神奈川県横浜市南区陸町1-23-4',
      reviewCount: 34,
      rating: 4.8,
    }
  
    return (
    <>
      <Box display='flex' alignItems='center' bgColor='white' w='50%' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={property.imageUrl} alt={property.imageAlt} height='100px' width='100px' />
        <Box p='6'>
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
            {property.title}
          </Box>
  
          <Box>
            {property.address}
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
      </Box>
      <Footer />
      </>
    )
  }