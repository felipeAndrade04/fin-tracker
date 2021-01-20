import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background: #dcdcdd;
  padding: 30px;
`;

export const ContainerTitle = styled.View`
  position: relative;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 60px;
  font-weight: 700;
  color: #46494c;
`;

export const Underline = styled.View`
  position: absolute;
  height: 8px;
  width: 42px;
  bottom: 3px;
  left: 3px;
  border-radius: 8px;
  background: #529471;
`;

export const GoBack = styled.TouchableOpacity`
  margin-top: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const GoBackText = styled.Text`
  font-size: 14px;
  margin-left: 4px;
  color: #46494c;
`;
