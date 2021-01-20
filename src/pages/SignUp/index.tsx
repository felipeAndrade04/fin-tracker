import React, {useState, useCallback} from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  ContainerTitle,
  Underline,
  Title,
  GoBack,
  GoBackText,
} from './styles';

const SignIn: React.FC = () => {
  const [name, setName] = useState<String>();
  const [email, setEmail] = useState<String>();
  const [password, setPassword] = useState<String>();

  const {navigate, goBack} = useNavigation();

  const navigateToDashboard = useCallback(() => {
    navigate('SignIn');
  }, [navigate]);

  const navigateToSignIn = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <ContainerTitle>
        <Title>Sign Up</Title>
        <Underline />
      </ContainerTitle>

      <Input placeholder="Nome" onChangeText={(value) => setName(value)} />
      <Input placeholder="E-mail" onChangeText={(value) => setEmail(value)} />
      <Input
        secureTextEntry
        placeholder="Senha"
        onChangeText={(value) => setPassword(value)}
      />

      <Button onPress={navigateToDashboard}>Cadastrar</Button>

      <GoBack onPress={navigateToSignIn}>
        <Icon name="arrow-left" size={14} color="#46494c" />
        <GoBackText>Voltar para Login</GoBackText>
      </GoBack>
    </Container>
  );
};

export default SignIn;
