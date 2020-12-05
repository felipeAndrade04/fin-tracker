import React, { useState, useCallback } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Card, Title } from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<String>();
  const [password, setPassword] = useState<String>();

  const showSignIn = useCallback(() => {
    console.log(email, password);
  }, [email, password]);

  return (
    <Container>
      <Card>
        <Title>
          Faça seu Login
        </Title>

        <Input
          placeholder="E-mail"
          onChangeText={email => setEmail(email)} />
        <Input
          secureTextEntry
          placeholder="Senha"
          onChangeText={password => setPassword(password)} />

        <Button onPress={showSignIn}>Entrar</Button>
      </Card>
    </Container>
  );
};

export default SignIn;
