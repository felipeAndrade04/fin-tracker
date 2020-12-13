import React, {useState, useCallback} from 'react';

import {useNavigation} from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Card,
  Title,
  PhotoInvoiceButton,
  PhotoInvoiceText,
} from './styles';

const SignIn: React.FC = () => {
  const [company, setCompany] = useState<String>();
  const [price, setPrice] = useState<String>();
  const [date, setDate] = useState<String>();

  const {navigate, goBack} = useNavigation();

  const navigateToDashboard = useCallback(() => {
    navigate('Dashboard');
  }, [navigate]);

  const navigateToSignIn = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Card>
        <Title>Cadastrar nota</Title>
        <Input
          placeholder="Empresa"
          onChangeText={(value) => setCompany(value)}
        />

        <Input placeholder="Valor" onChangeText={(value) => setPrice(value)} />
        <Input placeholder="Data" onChangeText={(value) => setDate(value)} />

        <PhotoInvoiceButton onPress={() => {}}>
          <PhotoInvoiceText>Adicionar imagem</PhotoInvoiceText>
        </PhotoInvoiceButton>

        <Button onPress={navigateToDashboard}>Cadastrar</Button>
      </Card>
    </Container>
  );
};

export default SignIn;
