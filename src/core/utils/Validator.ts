export class Validator {

    static isLessThan(value: string | any[], maxLength: number, errorMessage: string) {
        if (value.length < maxLength) {
            return {
                isValid: true,
                errorMessage: null
            }
        }

        return {
            isValid: false,
            errorMessage
        }
    }

    static isNotEmpty(value: string, errorMessage: string) {
        const invalid = {
            isValid: false,
            errorMessage
        }
        if (!Validator.isNotNull(value, errorMessage).isValid) {
            return invalid
        }

        if (value.trim() === '') return invalid

        return {
            isValid: true,
            errorMessage: null
        }
    }

    static isNotNull(value: any, errorMessage: string) {
        if (value !== null && value !== undefined) {
            return {
                isValid: true,
                errorMessage: null
            }
        }
        return {
            isValid: false,
            errorMessage
        }
    }

    static isValidEmail(email: string): boolean {
        const regex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        return regex.test(email)
    }
}
