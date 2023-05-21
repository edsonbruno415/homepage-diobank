import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        const user = {
          email: 'eb@gmail.com',
          password: '123'
        };
        login(user);
        expect(mockAlert).toHaveBeenCalledWith(`Email: ${user.email}, Password: ${user.password}`);
    })
})