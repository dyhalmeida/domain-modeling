import { Errors } from "@/core/constants/Errors";
import { User } from "@/core/entity/anemic/User";

describe('Anemic User', () => {

    const builderUser = () => new User(999, 'John Doe', 'john.doe@mail.com', '123456')

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

    it('Should allow user with valid email', () => {
        const user = builderUser()
        user.email = 'ping.pong@mail.com' 
        expect(user.email).toBe('ping.pong@mail.com')
    })

    it('Should thorow an invalid email erorr if the email is invalid', () => {
        const user = builderUser()
        expect(() => user.email = 'ping@pong@..com').toThrow(Errors.INVALID_EMAIL)
    })

    it('Should allow user with password valid', () => {
        const user = builderUser()
        user.password = '987654'
        expect(user.password).toBe('987654')
    })

    it('Should throw an invalid password error if the password is less than 6 characters', () => {
        const user = builderUser()
        expect(() => user.password = '1234').toThrow(Errors.INVALID_PASSWORD)
    })

    it('Should throw an invalid password error if the password is undefined', () => {
        const user = builderUser()
        expect(() => user.password = undefined).toThrow(Errors.INVALID_PASSWORD)
    })
})