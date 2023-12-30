import { Errors } from "@/core/constants/Errors"
import { Validator } from "@/core/utils/Validator"

export class PeopleName {

    readonly name: string

    constructor(name: string){
        this.name = name.trim()
        const errors = Validator.joinErrors(
            Validator.isNotEmpty(this.name, Errors.EMPTY_NAME).errorMessage,
            Validator.isGreaterThan(this.name, 4, Errors.SMALL_NAME).errorMessage,
            Validator.isLessThan(this.name, 120, Errors.BIG_NAME).errorMessage,
            Validator.isNotEmpty(this.name.split(' ')[1], Errors.NAME_WITHOUT_LAST_NAME).errorMessage,
            Validator.isValidRegex(this.name, /^[a-zA-ZÀ-ú\s]+$/,Errors.NAME_WITH_INVALID_CHARACTERS).errorMessage
        )
        if (errors !== null) throw new Error(errors.join(','))
    }

    get fullname() {
        return this.name
    }

    get firstname() {
        const [fistname] = this.name.split(' ')
        return fistname
    }

    get surnames() {
        return this.name.split(' ').slice(1).join(' ')
    }

    get lastname() {
        return this.name.split(' ').pop()
    }

}
