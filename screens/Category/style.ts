import styled from 'styled-components/native';
import {Colors} from '../../utilities/colors';

export const ContainerProduct = styled.View`
  padding: 10px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ContainerTitleBanner = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-left: 30px;
  margin-bottom: 10px;
`;

export const ContainerBanner = styled.View`
  width: auto;
  height: auto;
  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const ImageBanner = styled.Image`
  width: 280px;
  height: 130px;
  border-radius: 25px;
  margin-right: 5px;
`;

export const ContainerTitleGeneral = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TitleGeneral = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${Colors.dark};
  margin-top: 10px;
`;

export const ContainerNoProduct = styled.View`
  padding: 15px;
  margin-top: 100px;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TitleNoProduct = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${Colors.dark};
  margin-top: 25px;
`;

export const ContainerProductoIndividual = styled.View`
  margin-top: 5px;
  margin-bottom: 55px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 1px solid ${Colors.gray};
  width: 100%;
`;

export const TitleProduct = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${Colors.dark};
  margin-top: 10px;
`;

export const TitlePromAndMore = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${Colors.dark};
  margin-top: 5px;
`;

export const ContainerImageInfo = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const ImageProduct = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 25px;
  margin-right: 20px;
`;

export const ContainerTitleAndInfo = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 60%;
`;

export const SubTitleProduct = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: ${Colors.lightGray};
  margin-top: 10px;
`;
