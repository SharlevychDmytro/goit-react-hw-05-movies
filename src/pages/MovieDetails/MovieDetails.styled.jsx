import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wraper = styled.div`
  margin-left: ${p => p.theme.space[4]}px;
`;

export const Overviev = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Genres = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Link = styled(NavLink)`
  display: inline-block;
  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.textSecond};
  border: ${p => p.theme.borders.bold};
  border-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};

  :hover,
  :focus {
    color: ${p => p.theme.colors.textFirst};
    background-color: ${p => p.theme.colors.background};
  }
`;

export const ListLink = styled.ul`
  list-style: none;
`;
