import { CpfRegion } from "@/core/shared/values-objects/CpfRegion"

describe('CpfRegion', () => {

    it('Should create a cpf region by code', () => {
        const code = 0
        const region = CpfRegion.getByCode(code)
        expect(region.code).toBe(code)
        expect(region.states[code]).toBe('RS')
    })

    it('Should create a cpf region by cpf', () => {
        const cpf = '215.786.278-18'
        const region = CpfRegion.getByCpf(cpf)
        expect(region.code).toBe(8)
        expect(region.states[0]).toBe('SP')
    })

    it('Should compare like regions', () => {
        const regionA = CpfRegion.getByCpf('304.985.795-14')
        const regionB = CpfRegion.getByCpf('943.406.155-52')
        expect(regionA.isEqual(regionB)).toBeTruthy()
        expect(regionA.isDifferent(regionB)).toBeFalsy()
        expect(regionA === regionB).toBeTruthy()
    })

    it('Should compare different regions', () => {
        const regionA = CpfRegion.getByCpf('304.985.795-14')
        const regionB = CpfRegion.getByCpf('625.635.984-43')
        expect(regionA.isEqual(regionB)).toBeFalsy()
        expect(regionA.isDifferent(regionB)).toBeTruthy()
    })

    it('Should compare region with undefined', () => {
        const regionA = CpfRegion.getByCpf('304.985.795-14')
        expect(regionA.isEqual(undefined as any)).toBeFalsy()
        expect(regionA.isDifferent(undefined as any)).toBeTruthy()
    })

    it('Should create an SP region', () => {
        const region = CpfRegion.SP
        expect(region.code).toBe(8)
        expect(region.states[0]).toBe('SP')
    })

    it('Should create an CE, MA, PI region', () => {
        const region = CpfRegion.CE_MA_PI
        expect(region.code).toBe(3)
        expect(region.states[0]).toBe('CE')
        expect(region.states[1]).toBe('MA')
        expect(region.states[2]).toBe('PI')
    })

})