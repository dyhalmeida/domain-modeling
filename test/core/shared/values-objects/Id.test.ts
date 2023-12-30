import { Errors } from "@/core/constants/Errors"
import { Id } from "@/core/shared/values-objects/Id"

describe('Id', () => {

    it('Should create a new valid id', () => {
        const id = Id.new
        expect(id.value).toHaveLength(36)
        expect(id.isNew).toBeTruthy()
    })

    it('Should throw an error when creating an invalid id', () => {
        expect(() => new Id('1234')).toThrow(Errors.INVALID_UUID)
    })

    it('Should create a valid id from an existing id', () => {
        const existingId = Id.new.value
        const id = new Id(existingId)
        expect(id.value).toHaveLength(36)
        expect(id.isNew).toBeFalsy()

    })
})
