import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #dcdcdd;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 80px;
  background: #529471;
  padding: 15px;

  flex-direction: row;
  align-items: center;
`;

export const ButtonGoBackDashboard = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  color: #46494c;
  margin-left: 10px;
  font-weight: normal;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 18px;
`;

export const ImageInvoice = styled.Image`
  height: 400px;
  width: 100%;
  margin: 30px auto 10px;
  border-radius: 20px;
`;

export const CompanyInvoice = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #46494c;
  margin-top: 20px;
`;

export const InfoInvoice = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const DateInvoice = styled.Text`
  font-size: 18px;
  color: #46494c;
`;

export const ValueInvoice = styled.Text`
  font-size: 18px;
  color: #dc1637;
  margin-left: 13px;
  font-weight: 700;
`;
