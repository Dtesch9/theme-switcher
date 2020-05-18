import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade } from 'polished';

import { Container } from './styles';

interface HeaderProps {
  toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      Switcher
      <Switch
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.2, colors.secundary)}
        onColor={shade(0.1, colors.primary)}
      />
    </Container>
  );
};

export default Header;
