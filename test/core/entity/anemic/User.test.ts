import { User } from "@/core/entity/anemic/User";

describe('Anemic User', () => {

    const user: User = {
        id: 999,
        name: 'John Doe',
        email: 'john.doe@mail.com',
        password: '1234'
    }

    it('Should allow unnamed user', () => {
        const unnamedUser: User = {...user, name: ''}
        expect(unnamedUser.name).toBe('')
    })

    it('Should allow user with negative id', () => {
        const unnamedUser: User = {...user, id: -999}
        expect(unnamedUser.id).toBe(-999)
    })

    it('Should allow user with invalid email', () => {
        const unnamedUser: User = {...user, email: '!@#$%'}
        expect(unnamedUser.email).toBe('!@#$%')
    })

    it('Should allow user with invalid password', () => {
        const unnamedUser: User = {...user, password: 'a'}
        expect(unnamedUser.password).toBe('a')
    })
})