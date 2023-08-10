import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux';
import {moderateScale} from '../../../../theme';

export interface ChangeThemeHookReturnType {
  themeStyles: {
    mainContainer: {
      backgroundColor: string;
      shadowColor: string;
      borderColor: string;
      borderWidth: number;
    };
  };
}

const useChangeTheme = (): ChangeThemeHookReturnType => {
  const styles = useSelector((state: RootState) => state.manageTheme.styles);
  const themeStyles = {
    mainContainer: {
      backgroundColor: styles.modalBackgroundColor,
      shadowColor: styles.shadowColor,
      borderColor: styles.color,
      borderWidth: moderateScale(5),
    },
  };

  return {
    themeStyles,
  };
};

export default useChangeTheme;
