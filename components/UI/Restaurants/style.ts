import styled from 'styled-components/native';

export const ContainerTitle = styled.View`
  background-color: #ffffff;
  top: 0;
  left: 0;
  flex-direction: row;
  align-items: center;
  width: auto;
  padding-top: 20px;

  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #ff6666;
  align-items: flex-start;
  font-weight: bold;
  padding-left: 5px;
`;

export const Title2 = styled.Text`
  font-size: 17px;
  color: #ff6666;
  align-items: flex-start;
  font-weight: bold;
  right: 5px;
`;

export const ContainerBanner = styled.View`
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ImageBanner = styled.Image`
  width: 300px;
  height: 100px;
  border-radius: 25px;
  margin-left: 5px;
`;
