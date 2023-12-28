export class Validator {

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
