import { Errors } from "@/core/constants/Errors"
import { Cpf } from "@/core/shared/values-objects/Cpf"

describe('Cpf', () => {

    it('Deve retornar isValid (false) e errorMessage com mensagem de error, se o cpf for uma string vazia', () => {
        const { isValid, errorMessage } = Cpf.isValid('')
        expect(isValid).toBeFalsy()
        expect(errorMessage).toBe(Errors.INVALID_CPF)
    })

    it('Deve retornar isValid (false) e errorMessage com mensagem de error, se o cpf for incompleto', () => {
        expect(Cpf.isValid('123').isValid).toBeFalsy()
        expect(Cpf.isValid('').errorMessage).toBe(Errors.INVALID_CPF)

        expect(Cpf.isValid('123456').isValid).toBeFalsy()
        expect(Cpf.isValid('123456').errorMessage).toBe(Errors.INVALID_CPF)

        expect(Cpf.isValid('123.456.789-2').isValid).toBeFalsy()
        expect(Cpf.isValid('123.456.789-2').errorMessage).toBe(Errors.INVALID_CPF)
    })

    it('Deve retornar isValid (false) e errorMessage com mensagem de error, para cpf com DV inválido', () => {
        expect(Cpf.isValid('123.456.789-00').isValid).toBeFalsy()
        expect(Cpf.isValid('123.456.789-00').errorMessage).toBe(Errors.INVALID_CPF)
    })

    it('Deve retornar isValid (true) e errorMessage (null), para cpf com DV válido', () => {
        expect(Cpf.isValid('394.514.220-21').isValid).toBeTruthy()
        expect(Cpf.isValid('394.514.220-21').errorMessage).toBeNull()
    })

    it('Deve lançar uma exceção se instanciar um CPF inválido', () => {
        expect(() => new Cpf('')).toThrow(Errors.INVALID_CPF)
        expect(() => new Cpf('123.456.789-00')).toThrow(Errors.INVALID_CPF)
    })

    it('Deve retonar o dígito verificador do CPF', () => {
        expect(new Cpf('394.514.220-21').checkersDigits).toBe('21')
    })

    it('Deve retonar o CPF formatado', () => {
        expect(new Cpf('39451422021').formatted).toBe('394.514.220-21')
    })

})