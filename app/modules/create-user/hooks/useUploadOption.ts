import {
  launchCamera,
  Asset,
  launchImageLibrary,
} from 'react-native-image-picker';
import {globalMetrics} from '../../../theme';
import {checkPermission, customAlert} from '../../../utils';
import {PERMISSIONS} from 'react-native-permissions';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {manageAddedUserActions} from '../../../redux/reducers/AddedUsersReducer';
import {UnexpectedErrorStrings} from '../../../constants';
import {RootState, manageCustomerActions} from '../../../redux';

export interface UploadOptionsHookReturnType {
  handleCameraUploadImage: (setIsPickerVisible: Function) => Promise<void>;
  handleGalleryUploadImage: (setIsPickerVisible: Function) => Promise<void>;
  closeModal: () => void;
}

const useUploadOptions = (
  isProfile: boolean,
  setIsPickerVisible: (value: React.SetStateAction<boolean>) => void,
): UploadOptionsHookReturnType => {
  const [selectedImage, setSelectedImage] = useState<Asset[] | []>([]);
  const dispatch = useDispatch();
  const customers = useSelector(
    (state: RootState) => state.manageCustomers.customers,
  );
  const loggedInUser = useSelector(
    (state: RootState) => state.manageCustomers.loggedInUser,
  );

  const closeModal = (): void => {
    setIsPickerVisible(false);
  };

  const handleCameraUploadImage = async (
    setIsPickerVisible: Function,
  ): Promise<void> => {
    try {
      const permission = globalMetrics.isAndroid
        ? PERMISSIONS.ANDROID.CAMERA
        : PERMISSIONS.IOS.CAMERA;

      const res = await checkPermission(permission);
      if (res === true) {
        const result = await launchCamera({
          mediaType: 'photo',
          presentationStyle: 'fullScreen',
          includeExtra: true,
        });
        setIsPickerVisible(false);
        setPicture(result?.assets as Asset[]);
      }
    } catch (e) {
      customAlert({
        title: UnexpectedErrorStrings.title,
        desc: UnexpectedErrorStrings.desc,
      });
    }
  };

  const handleGalleryUploadImage = async (
    setIsPickerVisible: Function,
  ): Promise<void> => {
    try {
      const permission = globalMetrics.isAndroid
        ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
        : PERMISSIONS.IOS.PHOTO_LIBRARY;

      const res = await checkPermission(permission);
      if (res === true) {
        const result = await launchImageLibrary({
          mediaType: 'photo',
          presentationStyle: 'fullScreen',
          includeExtra: true,
          selectionLimit: 1,
        });
        setIsPickerVisible(false);
        setPicture(result?.assets as Asset[]);
      }
    } catch (e) {
      customAlert({
        title: UnexpectedErrorStrings.title,
        desc: UnexpectedErrorStrings.desc,
      });
    }
  };

  const setPicture = (assets: Asset[]): void => {
    if (isProfile && assets) {
      const userIndex = customers.findIndex(
        customer => customer.email === loggedInUser.email,
      );
      dispatch(
        manageCustomerActions.updateProfilePictureSuccess({
          uri: assets[0].uri,
          customerIndex: userIndex,
        }),
      );
    } else setSelectedImage(assets || []);
  };

  useEffect(() => {
    dispatch(
      manageAddedUserActions.getImageUriSuccess({uri: selectedImage[0]?.uri}),
    );
  }, [selectedImage]);

  return {
    handleCameraUploadImage,
    handleGalleryUploadImage,
    closeModal,
  };
};

export default useUploadOptions;
