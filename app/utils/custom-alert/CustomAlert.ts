import {Alert} from 'react-native';
import {CustomAlertProps} from './CustomAlertTypes';

// Reusable Custom Alert Dialog
const customAlert = ({
  title,
  desc,
  positiveBtnText = 'Ok',
  negativeBtnText,
  onPress,
}: CustomAlertProps) => {
  const buttons = [{text: positiveBtnText, onPress: onPress}];
  if (negativeBtnText) {
    buttons.push({text: negativeBtnText, onPress: () => {}});
  }
  Alert.alert(title, desc, buttons);
};

// Setting default values
customAlert.defaultProps = {
  title: '',
  desc: '',
  positiveBtnText: '',
  negativeBtnText: '',
};

export default customAlert;
