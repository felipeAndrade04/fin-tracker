import React from 'react';
import { TouchableOpacityProps } from 'react-native'
import { Container, TextButton } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    <TextButton>{children}</TextButton>
  </Container>
);

export default Button;
