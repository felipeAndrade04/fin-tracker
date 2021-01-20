import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
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
  width: 55px;
  bottom: 3px;
  left: 3px;
  border-radius: 8px;
  background: #529471;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: -20px;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 14px;
  text-align: right;
  color: #46494c;
`;

export const Register = styled.TouchableOpacity`
  margin-top: 15px;
`;

export const RegisterText = styled.Text`
  font-size: 14px;
  align-self: center;
  color: #46494c;
`;
