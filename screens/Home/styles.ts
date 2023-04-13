import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  width: auto;
  flex: 1;
`;

export const ContainerText = styled.View`
  align-items: center;
  justify-content: center;
  text-align: center;
  width: auto;
  width: 80%;
  margin-top: 20px;
`;

export const TitleText = styled.Text`
  font-size: 26px;
  text-align: center;
  color: #b2b2b2;
  align-items: center;
`;

export const GridContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: auto;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ContainerFoodText = styled.View`
  align-items: center;
  justify-content: center;
  text-align: center;
  width: auto;
  width: 50%;
  margin-top: 20px;
`;

export const GridItem = styled.View`
  width: 65%;
  aspect-ratio: 1;
  margin-bottom: 15px;
  background-color: #ccc;
`;

export const ImageGrid = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #b2b2b2;
`;

export const FoodText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #b2b2b2;
  align-items: center;
`;
