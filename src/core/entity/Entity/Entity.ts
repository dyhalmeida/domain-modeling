import { Id } from "@/core/shared/values-objects/Id";

export interface IEntityProps {
    id?: string
}

export abstract class Entity<ReturnTypeClone, T extends IEntityProps> {
    readonly id: Id
    readonly props: T

    constructor(props: T) {
        this.id = new Id(props.id)
        this.props = {...props, id: this.id.value}
    }

    isEqual(entity: Entity<ReturnTypeClone, T>) {
        return this.id.isEqual(entity?.id)
    }

    isDifferent(entity: Entity<ReturnTypeClone, T>) {
        return this.id.isDifferent(entity?.id)
    }

    clone(props: Partial<T>, ...args: any): ReturnTypeClone {
        /**
         * Chama o construtor da classe filha
         * new (this.constructor as any)()
         */
        return new (this.constructor as any)({ ...this.props, ...props }, ...args)
    }
}
