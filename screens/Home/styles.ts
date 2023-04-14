import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  width: auto;
  padding-top: 50px;
`;

export const ContainerInput = styled.View`
  background-color: #ffffff;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  padding-top: 50px;
  padding-left: 10px;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  width: 70%;
  height: 50px;
  border-radius: 10px;
  background-color: #f2f2f2;
  padding-left: 10px;
`;

export const ContainerText = styled.View`
  text-align: flex-start;
  width: auto;
  width: 80%;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  color: #b2b2b2;
  align-items: flex-start;
`;

export const TextMore = styled.Text`
  font-size: 20px;
  color: #b9eddd;
  align-items: flex-end;
  font-weight: bold;
`;

export const GridContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: auto;
  align-self: center;
  margin-top: 5px;
  margin-bottom: 5px;
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
  width: 50%;
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
  font-size: 15px;
  text-align: center;
  color: #b2b2b2;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const ContainerBanner = styled.View`
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ImageBanner = styled.Image`
  width: 300px;
  height: 100px;
  border-radius: 25px;
  background-color: #ffffff;
`;
