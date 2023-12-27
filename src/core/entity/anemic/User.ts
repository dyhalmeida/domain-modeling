import { Errors } from "@/core/constants/Errors"
import { Validator } from "@/core/utils/Validator"

export class User {
    constructor(
        private _id: number,
        private _name: string,
        private _email: string,
        private _password?: string
    ){
        this.id = _id
        this.name = _name
        this.email = _email
        this.password = _password
    }

    get id(): number {
        return this._id
    }

    set id(id: number) {
        this._id = id
    }

    get name(): string {
        return this._name
    }

    set name(name: string) {
        this._name = name
    }

    get email(): string {
        return this._email
    }

    set email(email: string) {
        if (!Validator.isValidEmail(email)) throw new Error(Errors.INVALID_EMAIL)
        this._email = email
    }

    get password(): string | undefined {
        return this._password
    }

    set password(password: string | undefined) {
        if (!password || password.length < 6) throw new Error(Errors.INVALID_PASSWORD)
        this._password = password
    }
}
