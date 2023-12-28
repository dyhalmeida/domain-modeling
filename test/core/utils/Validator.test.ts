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

})