interface userLogin {
  email: string
  password: string
}

export const login = ({ email, password }: userLogin) : void => {
  alert(`Email: ${email}, Password: ${password}`);
}
