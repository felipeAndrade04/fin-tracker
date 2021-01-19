import React from 'react';

import {TextInputProps} from 'react-native';

import {Container, TextInput, Underline} from './styles';

const Input: React.FC<TextInputProps> = (props) => {
  return (
    <Container>
      <TextInput {...props} />
      <Underline />
    </Container>
  );
};

export default Input;
