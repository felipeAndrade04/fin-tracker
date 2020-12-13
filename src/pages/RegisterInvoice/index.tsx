import React, {useState, useCallback} from 'react';
import ImagePicker from 'react-native-image-picker';
import {Alert} from 'react-native';

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

  const handlePhotoInvoice = useCallback(() => {
    ImagePicker.showImagePicker(
      {
        title: 'Selecione sua nota',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Usar câmera',
        chooseFromLibraryButtonTitle: 'Escolher da galeria',
      },
      (response) => {
        if (response.didCancel) {
          return;
        }

        if (response.error) {
          Alert.alert('Erro ao adicionar imagem da nota fiscal');
          return;
        }

        const source = {uri: response.uri};

        console.log(source);
      },
    );
  }, []);

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

        <PhotoInvoiceButton onPress={handlePhotoInvoice}>
          <PhotoInvoiceText>Adicionar imagem</PhotoInvoiceText>
        </PhotoInvoiceButton>

        <Button onPress={navigateToDashboard}>Cadastrar</Button>
      </Card>
    </Container>
  );
};

export default SignIn;
