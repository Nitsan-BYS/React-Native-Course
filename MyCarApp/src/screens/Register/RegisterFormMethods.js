import DocumentPicker from 'react-native-document-picker';

export const closeFormModal = setIsFormOpen => {
  setIsFormOpen(false);
};

export const hideModal = setModalVisible => {
  setModalVisible(false);
};

export const submitForm = (
  firstName,
  lastName,
  employeeNumber,
  email,
  setInputError,
  setIsFormOpen,
  setModalVisible,
) => {
  if (
    firstName.trim() === '' ||
    lastName.trim() === '' ||
    employeeNumber === null ||
    email.trim() === ''
  ) {
    setInputError('All required fields must be filled.');
  } else {
    setInputError(null);
    setIsFormOpen(false);
    setModalVisible(true); //Render Experience Modal
  }
};

const renderDataItem = (item, styles) => {
  return (
    <View style={styles.item}>
      <Text style={styles.selectedTextStyle}>{item.label}</Text>
    </View>
  );
};

const uploadDocs = async () => {
  try {
    const doc = await DocumentPicker.pick({
      type: [DocumentPicker.types.images],
    });
    console.log(doc);
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      // User cancelled the upload
      console.log(err);
    } else {
      throw err;
    }
  }
};

const RegisterFormMethods = {
  closeFormModal,
  hideModal,
  submitForm,
  renderDataItem,
  uploadDocs,
};

export default RegisterFormMethods;
