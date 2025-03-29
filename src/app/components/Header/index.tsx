'use client';
import Image from 'next/image';
import logo from '/public/logo.svg';
import { Container, LogoWrapper } from './styles';
import CheckOut from '../Checkout';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  return (
    <Container>
      <LogoWrapper>
        <Image src={logo} alt={'logo'} onClick={() => router.push(`/`)} />
      </LogoWrapper>
      <CheckOut />
    </Container>
  );
}
