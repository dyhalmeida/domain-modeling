import { People } from "@/core/entity/People/People";
import { CpfRegion } from "../values-objects/CpfRegion";

export abstract class PeopleByRegion {

    static group(peoples: People[]): Map<CpfRegion, People[]> {
        return peoples.reduce((map, people) => {
            const region = people.cpf.region
            const peopleRegion = map.get(region) ?? []
            peopleRegion.push(people)
            map.set(region, peopleRegion)
            return map
        }, new Map<CpfRegion, People[]>)
    }

}