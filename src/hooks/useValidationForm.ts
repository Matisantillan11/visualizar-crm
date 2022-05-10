export const useValidateForm = () => {
  const validateField = (typeInput: string, value: string) => {
    switch (typeInput) {
      case 'text':
        return value !== '' ? true : false
      case 'dni':
        return value.length < 9 && value.length > 6 ? true : false
      case 'phone':
        return value.length > 7 ? true : false
      case 'email': {
        const mailPattern = new RegExp(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        )
        return mailPattern.test(value) ? true : false
      }
      case 'password': {
        const passwordPattern = new RegExp(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,12}$/
        )
        return passwordPattern.test(value) ? true : false
      }
      default:
        return false
    }
  }

  return { validateField }
}