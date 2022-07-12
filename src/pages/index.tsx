import type { NextPage } from 'next';
import Image from 'next/image';
import {
  Flex, Box, Text, Show, SimpleGrid, Divider, Center,
} from '@chakra-ui/react';

import Card from '../components/Card';
import Slider from '../components/Slide';

const Home: NextPage = () => (
  <Flex flexDirection="column">
    <Flex as="main" flexDirection="column">
      <Box
        w="100vw"
        pos="relative"
        backgroundImage="url(/Background.png)"
        bgSize="cover"
        h={[163, 335]}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={[18, 140]}
        py={[28, 80]}
      >
        <Flex flexDirection="column">
          <Text color="rgba(245, 248, 250, 1)" fontSize={[20, 36]} fontWeight={500}>
            5 Continentes,
            <br />
            infinitas possibilidades.

          </Text>
          <Text color="#DADADA" fontSize={[14, 20]} fontWeight={400}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        <Show above="sm">
          <Flex position="absolute" right="140" top="220">
            <Image src="/Airplane.png" width="618" height="470" alt="Avião" />
          </Flex>
        </Show>
      </Box>

      <SimpleGrid flex="1" gap="3" minChildWidth="158px" marginTop={[36, 81]} px={[50, 140]} display="flex" alignItems="center" justifyContent="space-around" flexWrap="wrap">
        <Card text="vida noturna" />
        <Card image="surf" text="praia" />
        <Card image="building" text="moderno" />
        <Card image="museum" text="clássico" />
        <Card image="earth" text="e mais..." />
      </SimpleGrid>

      <Center height="50px">
        <Divider width={[60, 90]} color="rgba(71, 88, 91, 1)" height={[1, 2]} />
      </Center>
    </Flex>

    <Flex my={[24, 52]} display="flex" flexDirection="column" align="center">

      <Text textAlign="center" color="rgba(71, 88, 91, 1)" fontWeight={500} fontSize={[20, 36]}>
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>

    </Flex>
    <Flex height={[250, 850]} px={100} marginBottom={[24, 40]}>
      <Slider />
    </Flex>
  </Flex>
);

export default Home;
