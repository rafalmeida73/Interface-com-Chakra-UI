import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <Flex as="header" h={100} bg="whiteAlpha.100" align="center" justify="center">
    <Link href="/">
      <Image src="/Logo.png" width={185} height={46} alt="Logo" />
    </Link>
  </Flex>
);

export default Header;
