import React, {useState, useCallback} from 'react';

import {useNavigation} from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  ContainerTitle,
  Title,
  Underline,
  ForgotPassword,
  ForgotPasswordText,
  Register,
  RegisterText,
} from './styles';

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
      <ContainerTitle>
        <Title>Login</Title>
        <Underline />
      </ContainerTitle>

      <Input placeholder="E-mail" onChangeText={(value) => setEmail(value)} />
      <Input
        secureTextEntry
        placeholder="Senha"
        onChangeText={(value) => setPassword(value)}
      />

      <ForgotPassword>
        <ForgotPasswordText>Recuperar senha</ForgotPasswordText>
      </ForgotPassword>

      <Button onPress={navigateToDashboard}>Entrar</Button>

      <Register onPress={navigateToSignUp}>
        <RegisterText>Novo por aqui? Registre-se</RegisterText>
      </Register>
    </Container>
  );
};

export default SignIn;
