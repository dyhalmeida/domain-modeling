import { Errors } from "@/core/constants/Errors";
import { User } from "@/core/entity/anemic/User";

describe('Anemic User', () => {

    const builderUser = () => new User(999, 'John Doe', 'john.doe@mail.com', '123456')

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

    it('Should allow user with password valid', () => {
        const user = builderUser()
        user.setPassword('987654')
        expect(user.getPassword()).toBe('987654')
    })

    it('Should throw an invalid password error if the password is less than 6 characters', () => {
        const user = builderUser()
        expect(() => user.setPassword('1234')).toThrow(Errors.INVALID_PASSWORD)
    })
})