import { Errors } from "@/core/constants/Errors"
import { Validator } from "@/core/utils/Validator"

export class User {
    constructor(
        private id: number,
        private name: string,
        private email: string,
        private password?: string
    ){
        this.setId(id)
        this.setName(name)
        this.setEmail(email)
        if (password) this.setPassword(password)
    }

    getId(): number {
        return this.id
    }

    setId(id: number): void {
        this.id = id
    }

    getName(): string {
        return this.name
    }

    setName(name: string): void {
        this.name = name
    }

    getEmail(): string {
        return this.email
    }

    setEmail(email: string): void {
        if (!Validator.isValidEmail(email)) throw new Error(Errors.INVALID_EMAIL)
        this.email = email
    }

    getPassword(): string | undefined {
        return this.password
    }

    setPassword(password: string): void {
        if (password.length < 6) throw new Error(Errors.INVALID_PASSWORD)
        this.password = password
    }
}
