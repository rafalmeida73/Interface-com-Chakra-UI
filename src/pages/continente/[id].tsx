import {
  Box, Text, Flex, SimpleGrid, Image,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { countries } from '../../utils/countries';

const continente = () => {
  const router = useRouter();

  const id = `${router?.query?.id}` as keyof typeof countries;
  const continent = countries[id];

  return (
    <Flex flexDirection="column">
      <Box backgroundImage={`url(${continent?.banner})`} h={[150, 500]} bgSize="cover" display="flex" alignItems="center" px={[137]} py={[57]}>
        <Text color="#F5F8FA" fontSize={[28, 48]} fontWeight={[600]} marginTop="20%">{continent?.title}</Text>
      </Box>

      <SimpleGrid columns={[1, 2]} spacing={10} px={[16, 140]} my={['24px', '80px']}>
        <Text color="#47585B" fontSize={[14, 24]} fontWeight={[400]}>{continent?.description}</Text>
        <Flex justifyContent="space-around" align="center">
          <Flex flexDirection="column" justifyContent="center" align="center">
            <Text color="#FFBA08" fontSize={[24, 48]} fontWeight={[600]}>{continent?.countries}</Text>
            <Text color="#47585B" fontSize={[15, 24]} fontWeight={[600]}>países</Text>
          </Flex>
          <Flex flexDirection="column" justifyContent="center" align="center">
            <Text color="#FFBA08" fontSize={[24, 48]} fontWeight={[600]}>{continent?.languages}</Text>
            <Text color="#47585B" fontSize={[15, 24]} fontWeight={[600]}>línguas</Text>
          </Flex>
          <Flex flexDirection="column" justifyContent="center" align="center">
            <Text color="#FFBA08" fontSize={[24, 48]} fontWeight={[600]}>{continent?.city}</Text>
            <Text color="#47585B" fontSize={[15, 24]} fontWeight={[600]}>cidades +100</Text>
          </Flex>
        </Flex>
      </SimpleGrid>

      <Text color="#47585B" fontSize={[24, 36]} fontWeight={[500]} px={[16, 140]} my={['24px', '80px']}>Cidades +100</Text>

      <SimpleGrid columns={[1, 4]} spacing={10} px={[16, 140]} my={['24px', '80px']} borderRadius="4px">
        {continent?.cities.map((city) => (
          <Box border="1px solid rgba(255, 186, 8, 0.5)">
            <Box backgroundImage={`url(${city?.image})`} h={[173]} bgSize="cover" />
            <Flex justify="space-between" align="center" px={['24px']} py={['18px']}>
              <Box>
                <Text color="#47585B" fontSize={[20]} fontWeight={[600]}>{city?.name}</Text>
                <Text color="#999999" fontSize={[16]} fontWeight={[500]}>{city?.capital}</Text>
              </Box>
              <Image src={city?.flag} borderRadius="full" boxSize="30px" />
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default continente;
