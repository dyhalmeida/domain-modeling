export class User {
    constructor(
        private id: number,
        private name: string,
        private email: string,
        private password?: string
    ){}

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
        this.email = email
    }

    getPassword(): string | undefined {
        return this.password
    }

    setPassword(password: string): void {
        this.password = password
    }
}
