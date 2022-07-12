import {
  Box, Text, Show, Flex,
} from '@chakra-ui/react';
import Image from 'next/image';

interface CardProps{
  image?: 'cocktail' | 'surf' | 'building' | 'museum' | 'earth',
  text: string
}

const Card = ({ image = 'cocktail', text }:CardProps) => (
  <Box display="flex" alignItems="center" flexDirection="column">
    <Show above="sm">
      <Image src={`/${image}.png`} width={85} height={85} />
    </Show>

    <Flex display="flex" alignItems="center" justifyContent="space-around">
      <Show below="sm">
        <Flex as="span" bgColor="rgba(255, 186, 8, 1)" width="8px" height="8px" borderRadius="50%" display="inline-block" marginRight={8} />
      </Show>
      <Text color="#47585B" fontWeight={600} fontSize={24}>{text}</Text>
    </Flex>
  </Box>
);

export default Card;
