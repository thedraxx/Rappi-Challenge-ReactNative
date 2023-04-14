import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const HeaderFlatList = styled.View`
  padding: 1px;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: #efefef;
  width: 100%;
  position: relative;
`;

export const Button = styled.TouchableOpacity`
  background-color: #fff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
