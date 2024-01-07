import { People } from "@/core/entity/People/People"
import { PeopleByRegion } from "@/core/shared/domain-services/PeopleByRegion"
import { CpfRegion } from "@/core/shared/values-objects/CpfRegion"

describe('PeopleByRegion', () => {

    it('Should bring together all people from the SP region', () => {

        const peoples = [
            new People({ name: 'Murilo Eduardo Porto', cpf: '67033637810' }),
            new People({ name: 'Bernardo Nathan Nunes', cpf: '75392538517' }),
            new People({ name: 'Bárbara Beatriz Pereira', cpf: '73800663821' }),
            new People({ name: 'Elias Cauê Bryan Fernandes', cpf: '19521202505' }),
            new People({ name: 'Lavínia Bianca Malu das Neves', cpf: '20841831890' }),
            new People({ name: 'Enzo Lucca Elias de Paula', cpf: '98351939595' }),
            new People({ name: 'Murilo Elias Renan da Luz', cpf: '47387982864' })
        ]

        const groupedPeoples = PeopleByRegion.group(peoples)
        const peoplesFromSP = groupedPeoples.get(CpfRegion.SP) ?? []
        const isSPRegion = peoplesFromSP.every(p => p.cpf.region.isEqual(CpfRegion.SP))

        expect(peoplesFromSP.length).toBe(4)
        expect(isSPRegion).toBeTruthy()

    })

})