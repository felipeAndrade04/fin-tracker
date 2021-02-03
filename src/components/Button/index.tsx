import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, TextButton} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  containerStyle?: {};
}

const Button: React.FC<ButtonProps> = ({
  children,
  containerStyle = {},
  ...rest
}) => (
  <Container style={containerStyle} {...rest}>
    <TextButton>{children}</TextButton>
  </Container>
);

export default Button;
