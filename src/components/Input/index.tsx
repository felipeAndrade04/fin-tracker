import React, {useState, useCallback} from 'react';

import {TextInputProps} from 'react-native';

import {Container, TextInput, Underline} from './styles';

const Input: React.FC<TextInputProps> = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container>
      <TextInput
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholderTextColor="#46494c"
        {...props}
      />
      <Underline isFocused={isFocused} />
    </Container>
  );
};

export default Input;
