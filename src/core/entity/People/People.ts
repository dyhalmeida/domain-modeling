import { PeopleName } from "@/core/shared/values-objects/PeopleName";
import { Cpf } from "@/core/shared/values-objects/Cpf";
import { Entity, IEntityProps } from "../Entity/Entity";

export interface IPeopleProps extends IEntityProps{
    name: string
    cpf: string
}

export class People extends Entity<People, IPeopleProps> {
    
    readonly name: PeopleName
    readonly cpf: Cpf

    constructor(props: IPeopleProps) {
        super(props)
        this.name = new PeopleName(props.name)
        this.cpf = new Cpf(props.cpf)
    }
}