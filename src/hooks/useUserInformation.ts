import { User, Token } from '../interfaces/interfaces'

export const useUserInformation = () => {
  const getUser = () => {
    const fulluser = localStorage.getItem('user')
    let user: User | null = {
      _id: '',
      name: '',
      lastname: '',
      dni: 0,
      enabled: false,
      email: '',
      verified: false,
      creationDate: '',
    }

    if (fulluser) {
      user = JSON.parse(fulluser)
    } else {
      user = null
    }

    return user
  }

  const saveUser = (user: User, token: Token) => {
    let userString = JSON.stringify(user)

    localStorage.setItem('user', userString)
    localStorage.setItem('userId', user._id)
    localStorage.setItem('token', token.token)
  }

  return { getUser, saveUser }
}