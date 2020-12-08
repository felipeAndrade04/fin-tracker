import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Header,
  UserName,
  LogOut,
  InvoicesList,
  InvoiceContainer,
  InvoiceImage,
  InvoiceInfo,
  InvoiceCompany,
  InvoiceDateText,
  InvoiceValue,
  InvoiceValueText,
  ButtonAddInvoice,
  Icon,
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
        <UserName>Felipe Andrade</UserName>
        <LogOut />
      </Header>
      <InvoicesList
        data={invoices}
        keyExtractor={(invoice) => invoice.id}
        renderItem={({item: invoice}) => (
          <InvoiceContainer>
            <InvoiceImage source={{uri: invoice.uri}} />
            <InvoiceInfo>
              <InvoiceCompany>{invoice.name}</InvoiceCompany>
              <InvoiceDateText>{invoice.date}</InvoiceDateText>
              <InvoiceValue>
                <InvoiceValueText>{invoice.value}</InvoiceValueText>
              </InvoiceValue>
            </InvoiceInfo>
          </InvoiceContainer>
        )}
      />
      <ButtonAddInvoice onPress={navigateToRegisterInvoice}>
        <Icon>+</Icon>
      </ButtonAddInvoice>
    </Container>
  );
};

export default Dashboard;
