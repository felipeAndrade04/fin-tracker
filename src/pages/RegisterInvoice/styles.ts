import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #e6e5ec;
`;

export const Card = styled.View`
  padding: 10px;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 550px;
  background: #fff;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #232129;
  margin: -15px 0 40px 0;
`;

export const PhotoInvoiceButton = styled.TouchableOpacity`
  width: 90%;
  height: 60px;
  border-radius: 8px;
  background: #e6e5ec;
  margin-bottom: 20px;
  border-width: 2.5px;
  border-style: dashed;

  align-items: center;
  justify-content: center;
`;

export const PhotoInvoiceText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #232129;
`;
