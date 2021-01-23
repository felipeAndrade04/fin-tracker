import React, {useCallback, useState} from 'react';
import {Alert, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImagePicker from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Header,
  HeaderAlignTopContent,
  UserName,
  ButtonSignout,
  HeaderListingText,
  SearchContainer,
  SearchByDate,
  SearchByCompanyContainer,
  InputSearchByCompany,
  InvoicesList,
  InvoiceContainer,
  InvoiceImage,
  InvoiceInfo,
  InvoiceCompany,
  InvoiceDateText,
  InvoiceValueText,
  IconContainer,
  ButtonAddInvoice,
  ModalRegisterInvoice,
  ViewBlurBackground,
  ModalContainer,
  HeaderModal,
  ModalTitle,
  ButtonClosedModal,
  ContainerButtons,
  OpenDatePickerButton,
  OpenDatePickerButtonText,
  PhotoInvoiceButton,
  PhotoInvoiceText,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

export interface InvoiceData {
  id: string;
  name: string;
  uri: string;
  value: string;
  date: string;
}

const Dashboard: React.FC = () => {
  const {navigate} = useNavigation();

  const invoices: InvoiceData[] = [
    {
      id: '1',
      name: 'Super mercado econômico',
      uri:
        'https://th.bing.com/th/id/OIP.QWE-kBKexUBOVtd4ZYjozwHaJQ?pid=Api&rs=1',
      value: 'R$ 109,99',
      date: '11/12/2020',
    },
    {
      id: '2',
      name: 'Super mercado econômico',
      uri:
        'https://th.bing.com/th/id/OIP.QWE-kBKexUBOVtd4ZYjozwHaJQ?pid=Api&rs=1',
      value: 'R$ 109,99',
      date: '11/12/2020',
    },
    {
      id: '3',
      name: 'Super mercado econômico',
      uri:
        'https://th.bing.com/th/id/OIP.QWE-kBKexUBOVtd4ZYjozwHaJQ?pid=Api&rs=1',
      value: 'R$ 109,99',
      date: '11/12/2020',
    },
    {
      id: '4',
      name: 'Super mercado econômico',
      uri:
        'https://th.bing.com/th/id/OIP.QWE-kBKexUBOVtd4ZYjozwHaJQ?pid=Api&rs=1',
      value: 'R$ 109,99',
      date: '11/12/2020',
    },
    {
      id: '5',
      name: 'Super mercado econômico',
      uri:
        'https://th.bing.com/th/id/OIP.QWE-kBKexUBOVtd4ZYjozwHaJQ?pid=Api&rs=1',
      value: 'R$ 109,99',
      date: '11/12/2020',
    },
    {
      id: '6',
      name: 'Super mercado econômico',
      uri:
        'https://th.bing.com/th/id/OIP.QWE-kBKexUBOVtd4ZYjozwHaJQ?pid=Api&rs=1',
      value: 'R$ 109,99',
      date: '11/12/2020',
    },
    {
      id: '7',
      name: 'Super mercado econômico',
      uri:
        'https://th.bing.com/th/id/OIP.QWE-kBKexUBOVtd4ZYjozwHaJQ?pid=Api&rs=1',
      value: 'R$ 109,99',
      date: '11/12/2020',
    },
    {
      id: '8',
      name: 'Super mercado econômico',
      uri:
        'https://th.bing.com/th/id/OIP.QWE-kBKexUBOVtd4ZYjozwHaJQ?pid=Api&rs=1',
      value: 'R$ 109,99',
      date: '11/12/2020',
    },
  ];

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [company, setCompany] = useState<String>();
  const [price, setPrice] = useState<String>();
  const [date, setDate] = useState<String>();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const navigateToRegisterInvoice = useCallback(() => {
    navigate('RegisterInvoice');
  }, [navigate]);

  const HandleToggleDatePicker = useCallback(() => {
    setShowDatePicker((state) => !state);
  }, []);

  const handleDateChanged = useCallback(
    (event: any, date: Date | undefined) => {
      if (Platform.OS === 'android') {
        setShowDatePicker(false);
      }

      if (date) {
        setSelectedDate(date);
      }

      console.log(selectedDate);
    },
    [],
  );

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
      <Header>
        <HeaderAlignTopContent>
          <UserName>Bem vindo,{'\n'}Felipe Andrade</UserName>
          <ButtonSignout>
            <Icon name="log-out" size={30} color="#46494C" />
          </ButtonSignout>
        </HeaderAlignTopContent>
        <HeaderListingText>Listagem</HeaderListingText>
      </Header>
      <SearchContainer>
        <SearchByDate onPress={() => console.log('teste')}>
          <Icon name="calendar" size={25} color="#BEBCCC" />
        </SearchByDate>
        <SearchByCompanyContainer>
          <InputSearchByCompany placeholder="Filtrar por empresa" />
          <Icon name="search" size={25} color="#BEBCCC" />
        </SearchByCompanyContainer>
      </SearchContainer>

      <InvoicesList
        data={invoices}
        keyExtractor={(invoice) => invoice.id}
        renderItem={({item: invoice}) => (
          <InvoiceContainer>
            <InvoiceImage source={{uri: invoice.uri}} />
            <InvoiceInfo>
              <InvoiceCompany>{invoice.name}</InvoiceCompany>
              <InvoiceValueText>{invoice.value}</InvoiceValueText>
              <InvoiceDateText>{invoice.date}</InvoiceDateText>
            </InvoiceInfo>
            <IconContainer>
              <Icon name="chevron-right" size={30} color="#46494c" />
            </IconContainer>
          </InvoiceContainer>
        )}
      />
      <ButtonAddInvoice onPress={() => setModalVisible(!modalVisible)}>
        <Icon name="plus" size={35} color="#46494c" />
      </ButtonAddInvoice>
      <ModalRegisterInvoice
        animationType="slide"
        transparent
        visible={modalVisible}>
        <ViewBlurBackground />
        <ModalContainer>
          <HeaderModal>
            <ModalTitle>Cadastrar nota</ModalTitle>
            <ButtonClosedModal onPress={() => setModalVisible(!modalVisible)}>
              <Icon name="x" size={40} color="#46494c" />
            </ButtonClosedModal>
          </HeaderModal>

          <Input
            placeholder="Empresa"
            onChangeText={(value) => setCompany(value)}
          />

          <Input
            placeholder="Valor"
            onChangeText={(value) => setPrice(value)}
          />

          <ContainerButtons>
            <OpenDatePickerButton onPress={HandleToggleDatePicker}>
              <Icon name="calendar" size={25} color="#46494c" />
              <OpenDatePickerButtonText>
                Selecionar Data
              </OpenDatePickerButtonText>
            </OpenDatePickerButton>

            <PhotoInvoiceButton onPress={handlePhotoInvoice}>
              <Icon name="camera" size={25} color="#46494c" />
              <PhotoInvoiceText>Add imagem</PhotoInvoiceText>
            </PhotoInvoiceButton>
          </ContainerButtons>

          {showDatePicker && (
            <DateTimePicker
              mode="date"
              display="calendar"
              onChange={handleDateChanged}
              // textColor="#f4ede8"
              value={selectedDate}
            />
          )}

          <Button onPress={() => console.log('cadastrado')}>Cadastrar</Button>
        </ModalContainer>
      </ModalRegisterInvoice>
    </Container>
  );
};

export default Dashboard;
