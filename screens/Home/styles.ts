import styled from 'styled-components/native';

export const ScrollViewCustom = styled.ScrollView`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const ContainerLocation = styled.View`
  background-color: #ffffff;
  top: 0;
  left: 0;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  padding-left: 10px;
  padding-top: 20px;
`;

export const TextLocation = styled.Text`
  font-size: 20px;
  color: #666666;
  align-items: flex-start;
  font-weight: bold;
  padding-left: 10px;
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

export const Container = styled.View`
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  width: auto;
  padding-top: 50px;
`;

export const Input = styled.TextInput`
  width: 60%;
  height: 50px;
  border-radius: 10px;
  background-color: #f2f2f2;
  padding-left: 10px;
  border: 2px solid #f2f2f2;
  color: #666666;
`;

export const ContainerIcon = styled.View`
  border-radius: 10px;
  background-color: 'blue';
  padding: 50px;
`;

export const ContainerText = styled.View`
  text-align: flex-start;
  width: auto;
  width: 95%;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleText = styled.Text`
  font-size: 23px;
  color: #b2b2b2;
  align-items: flex-start;
  font-weight: bold;
`;

export const TextMore = styled.Text`
  font-size: 17px;
  color: #03c988;
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
  width: 35%;
  margin-top: 20px;
`;

export const GridItem = styled.View`
  width: 50%;
  aspect-ratio: 1;
  margin-bottom: 15px;
`;

export const ImageGrid = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: #ffffff;
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
`;

export const ContainerRestaurants = styled.View`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 10px;
`;
