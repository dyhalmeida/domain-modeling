import { Cpf } from "@/core/shared/values-objects/Cpf";
import { Id } from "@/core/shared/values-objects/Id";
import { PeopleName } from "@/core/shared/values-objects/PeopleName";

export interface IPeopleProps {
    id?: string
    name: string
    cpf: string
}

export class People {
    
    readonly id: Id
    readonly name: PeopleName
    readonly cpf: Cpf

    constructor(private props: IPeopleProps) {
        this.id = new Id(props.id)
        this.name = new PeopleName(props.name)
        this.cpf = new Cpf(props.cpf)
        
        this.props = {...props, id: this.id.value }
    }

    clone(props: Partial<IPeopleProps>) {
        return new People({ ...this.props, ...props })
    }
}