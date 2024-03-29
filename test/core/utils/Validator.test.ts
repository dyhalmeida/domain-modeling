import { Errors } from "@/core/constants/Errors"
import { Validator } from "@/core/utils/Validator"

describe('Validator', () => {

    it('Should return isValid true and errorMessage null, if the value is not null', () => {
        const value = 'any value'
        const result = Validator.isNotNull(value, Errors.NULL_OR_UNDEFINED)
        expect(result.isValid).toBeTruthy()
        expect(result.errorMessage).toBeNull()
    })

    it('Should return isValid false and errorMessage with an error message if the value is null', () => {
        const result = Validator.isNotNull(null, Errors.NULL_OR_UNDEFINED)
        expect(result.isValid).toBeFalsy()
        expect(result.errorMessage).toBe(Errors.NULL_OR_UNDEFINED)
    })

    it('Should return isValid false and errorMessage with an error message if the value is undefined', () => {
        const result = Validator.isNotNull(undefined, Errors.NULL_OR_UNDEFINED)
        expect(result.isValid).toBeFalsy()
        expect(result.errorMessage).toBe(Errors.NULL_OR_UNDEFINED)
    })

    it('Should return isValid true and errorMessage null, if the value is not empty', () => {
        const { isValid, errorMessage } = Validator.isNotEmpty('Any value', Errors.EMPTY)
        expect(isValid).toBeTruthy()
        expect(errorMessage).toBeNull()
    })

    it('Should return isValid false and errorMessage with an error message, if the value is empty', () => {
        const { isValid, errorMessage } = Validator.isNotEmpty('   ', Errors.EMPTY)
        expect(isValid).toBeFalsy()
        expect(errorMessage).toBe(Errors.EMPTY)
    })

    it('Should return isValid false and errorMessage with an error message, if the value is null', () => {
        const { isValid, errorMessage } = Validator.isNotEmpty(null as any as string, Errors.EMPTY)
        expect(isValid).toBeFalsy()
        expect(errorMessage).toBe(Errors.EMPTY)
    })

    it('Should return isValid true and errorMessage null, if the value is less than max length', () => {
        const { isValid, errorMessage } = Validator.isLessThan('Any text', 10, Errors.INVALID_LESS_THAN)
        expect(isValid).toBeTruthy()
        expect(errorMessage).toBeNull()
    })

    it('Should return isValid false and errorMessage with an error message, if the value is not less than max length', () => {
        const { isValid, errorMessage } = Validator.isLessThan('Any text', 6, Errors.INVALID_LESS_THAN)
        expect(isValid).toBeFalsy()
        expect(errorMessage).toBe(Errors.INVALID_LESS_THAN)
    })

    it('Should return an array of errors', () => {
        const errors = Validator.joinErrors(
            Validator.isNotEmpty('', Errors.EMPTY).errorMessage,
            Validator.isNotNull(null, Errors.NULL_OR_UNDEFINED).errorMessage
        )
        expect(errors).toStrictEqual([Errors.EMPTY, Errors.NULL_OR_UNDEFINED])
    })

    it('Should return null if there are no errors', () => {
        const errors = Validator.joinErrors(
            Validator.isNotEmpty('any', Errors.EMPTY).errorMessage,
            Validator.isNotNull(10, Errors.NULL_OR_UNDEFINED).errorMessage
        )
        expect(errors).toBeNull()
    })

    it('Should return isValid true and errorMessage null, if the value is greater than min length', () => {
        const { isValid, errorMessage } = Validator.isGreaterThan('Any text', 6, Errors.INVALID_GREATER_THAN)
        expect(isValid).toBeTruthy()
        expect(errorMessage).toBeNull()
    })

    it('Should return isValid false and errorMessage with an error message, if the value is not greater than min length', () => {
        const { isValid, errorMessage } = Validator.isGreaterThan('Any text', 10, Errors.INVALID_GREATER_THAN)
        expect(isValid).toBeFalsy()
        expect(errorMessage).toBe(Errors.INVALID_GREATER_THAN)
    })

    it('Should throw an error if the regex is not valid', () => {
        const { isValid, errorMessage } = Validator.isValidRegex('@dyhalmeida_5g', /^[a-zA-ZÀ-ú\s]+$/, Errors.NAME_WITH_INVALID_CHARACTERS)
        expect(isValid).toBeFalsy()
        expect(errorMessage).toBe(Errors.NAME_WITH_INVALID_CHARACTERS)
    })

    it('Should not throw an error if the regex is valid', () => {
        const { isValid, errorMessage } = Validator.isValidRegex('dyhalmeida', /^[a-zA-ZÀ-ú\s]+$/, Errors.NAME_WITH_INVALID_CHARACTERS)
        expect(isValid).toBeTruthy()
        expect(errorMessage).toBeNull()
    })

})