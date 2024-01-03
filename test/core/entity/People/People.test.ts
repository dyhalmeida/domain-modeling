import { Errors } from "@/core/constants/Errors"
import { People } from "@/core/entity/People/People"
import { Id } from "@/core/shared/values-objects/Id"

describe('People', () => {

    it('Should create a valid people object', () => {
        const people = new People({
            name: 'Diego Almeida',
            cpf: '15160630589'
        })
        expect(people.id.value).toHaveLength(36)
        expect(people.id.isNew).toBeTruthy()
        expect(people.name.firstname).toBe('Diego')
        expect(people.name.lastname).toBe('Almeida')
        expect(people.cpf.formatted).toBe('151.606.305-89')
        expect(people.cpf.checkersDigits).toBe('89')
    })

    it('Should throw an error when creating an unnamed people object', () => {
        expect(() => new People({ name: '', cpf: '15160630589' })).toThrow(Errors.EMPTY_NAME)
    })

    it('Should throw an error when creating a people object without the cpf', () => {
        expect(() => new People({ name: 'Diego Almeida', cpf: '' })).toThrow(Errors.INVALID_CPF)
    })

    it('Should clone the people object with the changed name', () => {
        const people1 = new People({ name: 'Diego Almeida', cpf: '15160630589' })
        const people2 = people1.clone({ name: 'Diego de Jesus Almeida' })

        expect(people2.id.value).toBe(people1.id.value)
        expect(people2.cpf.value).toBe(people1.cpf.value)
        expect(people2.name.fullname).not.toBe(people1.name.fullname)
    })

    it('Should clone the person object with a new ID', () => {
        const people1 = new People({ name: 'Diego Almeida', cpf: '15160630589' })
        const people2 = people1.clone({ id: Id.new.value })

        expect(people2.id.value).not.toBe(people1.id.value)
        expect(people2.cpf.value).toBe(people1.cpf.value)
        expect(people2.name.fullname).toBe(people1.name.fullname)
    })

})