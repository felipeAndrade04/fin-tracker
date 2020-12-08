import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import {InvoiceData} from '.';

export const Container = styled.View`
  flex: 1;
  background: #e6e5ec;
  position: relative;
`;

export const Header = styled.View`
  width: 100%;
  height: 80px;
  background: #232129;
  padding: 10px 20px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserName = styled.Text`
  color: #fff;
  font-size: 25px;
  flex: 1;
  margin-right: 10px;
`;

export const LogOut = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background: #fff;
`;

export const InvoicesList = styled(FlatList as new () => FlatList<InvoiceData>)`
  padding: 20px 0;
`;

export const InvoiceContainer = styled.View`
  height: 100px;
  background: #fff;
  border-radius: 8px;
  flex-direction: row;
  margin: 10px 30px;
`;

export const InvoiceImage = styled.Image`
  height: 100px;
  width: 100px;
  margin-left: 0;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;

export const InvoiceInfo = styled.View`
  position: relative;
  flex: 1;
  margin: 5px 10px;
`;

export const InvoiceCompany = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const InvoiceDateText = styled.Text`
  color: #232129;
`;

export const InvoiceValue = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
`;
export const InvoiceValueText = styled.Text`
  font-size: 20px;
  color: #c72828;
`;

export const ButtonAddInvoice = styled.TouchableOpacity`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background: #232129;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  margin: 20px;
`;

export const Icon = styled.Text`
  font-size: 60px;
  color: #fff;
  margin-bottom: 0px;
`;
