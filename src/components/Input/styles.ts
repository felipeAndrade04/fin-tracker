import styled, {css} from 'styled-components/native';

interface UnderlineProps {
  isFocused: boolean;
}

export const Container = styled.View`
  position: relative;

  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #46494c;
  font-size: 20px;
  margin-left: -1%;
`;

export const Underline = styled.View<UnderlineProps>`
  position: absolute;
  height: 1.5px;
  width: 100%;
  bottom: 0;
  left: 0;
  background: #46494c;

  ${(props) =>
    props.isFocused &&
    css`
      background: #529471;
    `}
`;
