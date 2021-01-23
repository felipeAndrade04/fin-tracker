import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import {InvoiceData} from '.';

export const Container = styled.View`
  flex: 1;
  background: #dcdcdd;
  position: relative;
`;

export const Header = styled.View`
  width: 100%;
  height: 200px;
  background: #529471;
  padding: 10px 20px 0 20px;
`;

export const HeaderAlignTopContent = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserName = styled.Text`
  color: #46494c;
  font-size: 20px;
  flex: 1;
`;

export const ButtonSignout = styled.TouchableOpacity``;

export const HeaderListingText = styled.Text`
  position: absolute;
  bottom: 65px;
  left: 20px;
  color: #46494c;
  font-size: 45px;
  font-weight: bold;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
`;

export const SearchByDate = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  margin: -30px 0 0 20px;
  background: #fff;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const SearchByCompanyContainer = styled.View`
  flex: 1;
  height: 60px;
  padding: 0 10px;
  margin: -30px 20px 10px 20px;
  background: #fff;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputSearchByCompany = styled.TextInput`
  flex: 1;
  font-size: 18px;
  color: #bebccc;
`;

export const InvoicesList = styled(FlatList as new () => FlatList<InvoiceData>)`
  width: 105%;
  margin-left: -2.5%;
  padding: 10px 0;
`;

export const InvoiceContainer = styled.View`
  height: 120px;
  background: #fff;
  border-radius: 8px;
  flex-direction: row;
  margin: 10px 30px;
`;

export const InvoiceImage = styled.Image`
  height: 120px;
  width: 120px;
  margin-left: 0;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;

export const InvoiceInfo = styled.View`
  position: relative;
  flex: 1;
  margin: 8px 10px;
`;

export const InvoiceCompany = styled.Text`
  font-size: 18px;
  color: #46494c;
`;

export const InvoiceDateText = styled.Text`
  color: #46494c;
  position: absolute;
  bottom: 0;
`;

export const InvoiceValueText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #c72828;
  margin-top: 5px;
`;

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ButtonAddInvoice = styled.TouchableOpacity`
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background: #529471;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  margin: 20px;
`;
