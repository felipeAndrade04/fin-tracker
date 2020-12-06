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
  width: 90%;
  height: 510px;
  background: #fff;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #232129;
  margin: 20px 0 50px 0;
`;

export const GoBack = styled.TouchableOpacity`
  margin-top: 15px;
`;

export const GoBackText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #232129;
`;
