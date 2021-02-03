import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  ButtonGoBackDashboard,
  HeaderTitle,
  Content,
  ImageInvoice,
  CompanyInvoice,
  InfoInvoice,
  DateInvoice,
  ValueInvoice,
} from './styles';

import Button from '../../components/Button';

const DetailsInvoice: React.FC = () => {
  const {goBack} = useNavigation();

  return (
    <Container>
      <Header>
        <ButtonGoBackDashboard onPress={goBack}>
          <Icon name="arrow-left" color="#46494c" size={28} />
        </ButtonGoBackDashboard>
        <HeaderTitle>Detalhes da nota</HeaderTitle>
      </Header>

      <Content>
        <ImageInvoice
          source={{
            uri:
              'https://th.bing.com/th/id/OIP.QWE-kBKexUBOVtd4ZYjozwHaJQ?pid=Api&rs=1',
          }}
        />
        <CompanyInvoice>Super mercado econômico</CompanyInvoice>
        <InfoInvoice>
          <DateInvoice>11/12/2021</DateInvoice>
          <ValueInvoice>R$ 150,00</ValueInvoice>
        </InfoInvoice>

        <Button
          containerStyle={{
            backgroundColor: '#DC1637',
            position: 'absolute',
            bottom: 30,
            left: 18,
          }}>
          Excluir nota
        </Button>
      </Content>
    </Container>
  );
};

export default DetailsInvoice;
