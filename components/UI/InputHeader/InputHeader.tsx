import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {ContainerInput, Input} from './Style';
import {Colors} from '../../../utilities/colors';

interface Props {
  header: string;
}

const InputHeader = ({header}: Props) => {
  return (
    <ContainerInput>
      <Input placeholder={`${header}`} />
      <LinearGradient
        colors={[`${Colors.darkOrangeRed}`, `${Colors.orangeRed}`]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{borderRadius: 15, padding: 12}}>
        <Icon name="search" size={15} color="#ffffff" />
      </LinearGradient>
    </ContainerInput>
  );
};

export default InputHeader;
