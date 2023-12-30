import { Errors } from "@/core/constants/Errors"
import { PeopleName } from "@/core/shared/values-objects/PeopleName"

describe('PeopleName', () => {
    it('Should throw an error if the name is empty', () => {
        expect(() => new PeopleName('')).toThrow(Errors.EMPTY_NAME)
    })

    it('Should throw an error if name is less than 4 characters', () => {
        expect(() => new PeopleName('Rô A')).toThrow(Errors.SMALL_NAME)
    })

    it('Should throw an error if name is less than 120 characters', () => {
        const bigName = 'Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga de Bragança e Habsburgo'
        expect(() => new PeopleName(bigName)).toThrow(Errors.BIG_NAME)
    })

    it('Should throw an error if the name does not have a lastname', () => {
        expect(() => new PeopleName('Diego')).toThrow(Errors.NAME_WITHOUT_LAST_NAME)
    })

    it('Should throw an error if the name has special characters', () => {
        expect(() => new PeopleName('An@ Lim@')).toThrow(Errors.NAME_WITH_INVALID_CHARACTERS)
    })

    it('Should return full name', () => {
        const name = 'John Doe'
        const peopleName = new PeopleName(name)
        expect(peopleName.fullname).toBe(name)
    })

    it('Should return first name', () => {
        const peopleName = new PeopleName('John Doe')
        expect(peopleName.firstname).toBe('John')
    })

    it('Should return surnames', () => {
        const peopleName = new PeopleName('John Doe Gin')
        expect(peopleName.surnames).toBe('Doe Gin')
    })

    it('Should return lastname', () => {
        const peopleName = new PeopleName('John Doe Gin')
        expect(peopleName.lastname).toBe('Gin')
    })
})
