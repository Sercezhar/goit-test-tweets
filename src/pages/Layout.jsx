import Container from '@/components/Container/Container';
import Header from '@/components/Header/Header';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Header />

      <Container>
        <Outlet />
      </Container>

      <ScrollToTopButton />
    </div>
  );
}

export default Layout;
