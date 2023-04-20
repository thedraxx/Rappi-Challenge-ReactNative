import styled from 'styled-components/native';
import {Colors} from '../../utilities/colors';

export const ContainerProduct = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: row;
`;

export const ImageProduct = styled.Image`
  width: 20%;
  height: 40%;
  border-radius: 25px;
  background-color: blue;
`;

export const ContainerInfo = styled.View`
  width: 60%;
  height: 50%;
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
`;

export const TitleProduct = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${Colors.dark};
  margin-top: 10px;
`;

export const DescriptionProduct = styled.Text`
  font-size: 16px;
  color: ${Colors.clearDark};
  margin-top: 10px;
`;

export const ContainerDetail = styled.View`
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
