import React, {useCallback, useEffect, useState} from 'react';
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
import api from '../../services/api';
import formatValue from '../../utils/formatValue';

export interface InvoiceData {
  id: number;
  name: string;
  image_uri: string;
  value: number;
  date: string;
}

const Dashboard: React.FC = () => {
  const {navigate} = useNavigation();

  const [invoices, setInvoices] = useState<InvoiceData[]>([]);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [company, setCompany] = useState<String>();
  const [price, setPrice] = useState<String>();
  const [date, setDate] = useState<String>();
  const [seachValue, setSearchValue] = useState('');

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    async function loadInvoices(): Promise<void> {
      const response = await api.get('/invoices');

      // setInvoices(
      //   response.data.map((invoice: InvoiceData) => ({
      //     ...invoice,
      //     formattedValue: formatValue(invoice.value),
      //   })),
      // );
      setInvoices(response.data);
    }
    loadInvoices();
  }, [seachValue]);

  const navigateToDetailsInvoice = useCallback(() => {
    navigate('DetailsInvoice');
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
        keyExtractor={(invoice) => String(invoice.id)}
        renderItem={({item: invoice}) => (
          <InvoiceContainer key={invoice.id} onPress={navigateToDetailsInvoice}>
            <InvoiceImage source={{uri: invoice.image_uri}} />
            <InvoiceInfo>
              <InvoiceCompany>{invoice.name}</InvoiceCompany>
              <InvoiceDateText>{invoice.date}</InvoiceDateText>
              <InvoiceValueText>
                {formatValue(invoice.value, 2)}
              </InvoiceValueText>
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
