import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavItem, Header } from 'components/AppBar/AppBar.styled';

const AppBar = () => {
  return (
    <>
      <Header>
        <nav>
          <NavItem to="/">Home</NavItem>
          <NavItem to="movies">Movies</NavItem>
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AppBar;
