import Container from '@/components/Container/Container';
import Header from '@/components/Header/Header';
import Loader from '@/components/Loader/Loader';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Header />

      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>

      <ScrollToTopButton />
    </div>
  );
}

export default Layout;
