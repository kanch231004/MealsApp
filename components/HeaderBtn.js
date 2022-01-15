
import { Platform } from 'react-native';
import { HeaderButton} from 'react-navigation-header-buttons';
import Colors from '../consts/Colors';
import {Ionicons} from '@expo/vector-icons';

const HeaderBtn = props => {
    return <HeaderButton 
            {...props} 
            color = {Platform.OS == 'ios' ? Colors.primaryColor : 'white'}
            iconSize = {23}
            IconComponent = {Ionicons}
        />
}

export default HeaderBtn;