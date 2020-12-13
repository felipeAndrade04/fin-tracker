import React, {useState, useCallback} from 'react';

import {useNavigation} from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Card, Title, Register, RegisterText} from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<String>();
  const [password, setPassword] = useState<String>();

  const {navigate} = useNavigation();

  const navigateToDashboard = useCallback(() => {
    navigate('Dashboard');
  }, [navigate]);

  const navigateToSignUp = useCallback(() => {
    navigate('SignUp');
  }, [navigate]);

  return (
    <Container>
      <Card>
        <Title>Faça seu Login</Title>

        <Input placeholder="E-mail" onChangeText={(value) => setEmail(value)} />
        <Input
          secureTextEntry
          placeholder="Senha"
          onChangeText={(value) => setPassword(value)}
        />

        <Button onPress={navigateToDashboard}>Entrar</Button>

        <Register onPress={navigateToSignUp}>
          <RegisterText>Registre-se</RegisterText>
        </Register>
      </Card>
    </Container>
  );
};

export default SignIn;
