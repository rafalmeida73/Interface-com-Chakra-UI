import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Box, Text,
} from '@chakra-ui/react';
import Link from 'next/link';

const Slider = () => (
  <Swiper
    slidesPerView={1}
    spaceBetween={30}
    loop
    pagination={{
      clickable: true,
    }}
    navigation
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >
    <SwiperSlide>
      <Link href="/continente/europa">
        <Box backgroundImage="url(/europa.png)" width="100%" height="100%" bgSize="cover" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
          <Text color="rgba(245, 248, 250, 1)" fontWeight={700} fontSize={[24, 48]}>Europa</Text>
          <Text color="rgba(218, 218, 218, 1)" fontWeight={700} fontSize={[14, 24]}>O continente mais antigo.</Text>
        </Box>
      </Link>
    </SwiperSlide>

    <SwiperSlide>
      <Link href="/continente/americaNorte">
        <Box backgroundImage="url(/na.jpg)" width="100%" height="100%" bgSize="cover" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
          <Text color="rgba(245, 248, 250, 1)" fontWeight={700} fontSize={[24, 48]}>América do Norte</Text>
        </Box>
      </Link>
    </SwiperSlide>
    <SwiperSlide>
      <Link href="/continente/americaSul">
        <Box backgroundImage="url(/brazil.jpg)" width="100%" height="100%" bgSize="cover" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
          <Text color="rgba(245, 248, 250, 1)" fontWeight={700} fontSize={[24, 48]}>América do Sul</Text>
        </Box>
      </Link>
    </SwiperSlide>
    <SwiperSlide>
      <Link href="/continente/asia">
        <Box backgroundImage="url(/asia.jpg)" width="100%" height="100%" bgSize="cover" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
          <Text color="rgba(245, 248, 250, 1)" fontWeight={700} fontSize={[24, 48]}>Ásia</Text>
        </Box>
      </Link>
    </SwiperSlide>
    <SwiperSlide>
      <Link href="/continente/africa">
        <Box backgroundImage="url(/africa.jpg)" width="100%" height="100%" bgSize="cover" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
          <Text color="rgba(245, 248, 250, 1)" fontWeight={700} fontSize={[24, 48]}>África</Text>
        </Box>
      </Link>
    </SwiperSlide>
    <SwiperSlide>
      <Link href="/continente/oceania">
        <Box backgroundImage="url(/oceania.jpg)" width="100%" height="100%" bgSize="cover" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
          <Text color="rgba(245, 248, 250, 1)" fontWeight={700} fontSize={[24, 48]}>Oceania</Text>
        </Box>
      </Link>
    </SwiperSlide>
  </Swiper>
);

export default Slider;
