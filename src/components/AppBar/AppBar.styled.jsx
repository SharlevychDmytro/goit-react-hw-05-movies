import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.textSecond};
  &.active {
    background-color: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.textFirst};
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: ${p => p.theme.colors.textFirst};
    background-color: ${p => p.theme.colors.background};
  }
  :not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }
`;

export const Header = styled.header`
  border-bottom: ${p => p.theme.borders.normal};
  padding-bottom: ${p => p.theme.space[5]}px;
`;
