import { User } from "@/core/entity/anemic/User";

describe('Anemic User', () => {

    const builderUser = () => new User(999, 'John Doe', 'john.doe@mail.com', '1234')

    it('Should allow unnamed user', () => {
        const user = builderUser()
        user.name = ''
        expect(user.name).toBe('')
    })

    it('Should allow user with negative id', () => {
        const user = builderUser()
        user.id = -999
        expect(user.id).toBe(-999)
    })

    it('Should allow user with invalid email', () => {
        const user = builderUser()
        user.email = '!@#$%'
        expect(user.email).toBe('!@#$%')
    })

    it('Should allow user with invalid password', () => {
        const user = builderUser()
        user.password = 'a'
        expect(user.password).toBe('a')
    })
})