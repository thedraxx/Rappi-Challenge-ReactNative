import styled from 'styled-components/native';
import {Colors} from '../../utilities/colors';

export const ScrollViewCustom = styled.ScrollView`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const ContainerLocation = styled.View`
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
  color: ${Colors.clearDark};
  align-items: flex-start;
  font-weight: bold;
  padding-left: 10px;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: auto;
  padding-top: 50px;
`;

export const ContainerIcon = styled.View`
  border-radius: 10px;
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
  color: ${Colors.lightGray};
  align-items: flex-start;
  font-weight: bold;
`;

export const TextMore = styled.Text`
  font-size: 17px;
  color: ${Colors.green};
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
`;

export const FoodText = styled.Text`
  font-size: 15px;
  text-align: center;
  color: ${Colors.lightGray};
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const ContainerBanner = styled.View`
  width: 100%;
  height: 100px;
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
  border-radius: 10px;
`;
