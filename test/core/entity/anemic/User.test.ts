import { User } from "@/core/entity/anemic/User";

describe('Anemic User', () => {

    const builderUser = () => new User(999, 'John Doe', 'john.doe@mail.com', '1234')

    it('Should allow unnamed user', () => {
        const user = builderUser()
        user.setName('')
        expect(user.getName()).toBe('')
    })

    it('Should allow user with negative id', () => {
        const user = builderUser()
        user.setId(-999)
        expect(user.getId()).toBe(-999)
    })

    it('Should allow user with invalid email', () => {
        const user = builderUser()
        user.setEmail('!@#$%') 
        expect(user.getEmail()).toBe('!@#$%')
    })

    it('Should allow user with invalid password', () => {
        const user = builderUser()
        user.setPassword('a')
        expect(user.getPassword()).toBe('a')
    })
})