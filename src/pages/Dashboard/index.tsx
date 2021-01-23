import React, {useCallback} from 'react';
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
} from './styles';

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

  const navigateToRegisterInvoice = useCallback(() => {
    navigate('RegisterInvoice');
  }, [navigate]);

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
              <Icon name="chevron-right" size={30} color="#232129" />
            </IconContainer>
          </InvoiceContainer>
        )}
      />
      <ButtonAddInvoice onPress={navigateToRegisterInvoice}>
        <Icon name="plus" size={30} color="#fff" />
      </ButtonAddInvoice>
    </Container>
  );
};

export default Dashboard;
