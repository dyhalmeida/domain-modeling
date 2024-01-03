import { Errors } from "@/core/constants/Errors";

const TOTAL_DIGITS = 11

export class Cpf {

    readonly value: string

    constructor(value: string) {
        this.value = value.replace(/\D/g, '')
        const { isValid, errorMessage } = Cpf.isValid(this.value)
        if (!isValid) throw new Error(Errors.INVALID_CPF)
    }

    get formatted() {
        return this.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    }

    get checkersDigits() {
        return this.value.slice(9)
    }

    static isValid(value: string) {
        if (!value) return {
            isValid: false,
            errorMessage: Errors.INVALID_CPF
        }

        const onlyNumbers = value.replace(/\D/g, '').split('')

        if (onlyNumbers.length !== TOTAL_DIGITS) return {
            isValid: false,
            errorMessage: Errors.INVALID_CPF
        }

        const dv1 = Cpf.isValidDV(onlyNumbers.slice(0, 9), onlyNumbers[9])
        const dv2 = Cpf.isValidDV(onlyNumbers.slice(1, 10), onlyNumbers[10])

        if (dv1 === false || dv2 === false) return {
            isValid: false,
            errorMessage: Errors.INVALID_CPF
        }

        return {
            isValid: true,
            errorMessage: null
        }
    }

    static isValidDV(digits: string[], dv: string) {

        const factors = [10, 9, 8, 7, 6, 5, 4, 3, 2]
        const total = digits.reduce((total, digit, index) => {
            return total + (Number(digit) * factors[index])
        }, 0)

        const rest = total % TOTAL_DIGITS
        const calculatedDV = rest < 2 ? 0 : TOTAL_DIGITS - rest

        const isValid = calculatedDV === Number(dv)

        return isValid
    }
}
