import {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';

export interface ThemeCardHookReturnType {
  isThemeModalOpen: boolean;
  setIsThemeModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTheme: string;
}

const useThemeCard = (): ThemeCardHookReturnType => {
  const [isThemeModalOpen, setIsThemeModalOpen] = useState<boolean>(false);
  const selectedTheme = useSelector(
    (state: RootState) => state.manageTheme.theme,
  );

  return {
    isThemeModalOpen,
    setIsThemeModalOpen,
    selectedTheme,
  };
};

export default useThemeCard;
