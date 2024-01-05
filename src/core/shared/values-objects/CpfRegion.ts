export class CpfRegion {
    
    static readonly ALL_REGIONS = [
        new CpfRegion(0, ['RS']),
        new CpfRegion(1, ['DF', 'GO', 'MS', 'MT', 'TO']),
        new CpfRegion(2, ['AC', 'AM', 'AP', 'PA', 'RO', 'RR']),
        new CpfRegion(3, ['CE', 'MA', 'PI']),
        new CpfRegion(4, ['AL', 'PB', 'PE', 'RN']),
        new CpfRegion(5, ['BA', 'SE']),
        new CpfRegion(6, ['MG']),
        new CpfRegion(7, ['ES', 'RJ']),
        new CpfRegion(8, ['SP']),
        new CpfRegion(9, ['PR', 'SC']),
    ]

    static readonly RS = this.ALL_REGIONS[0]
    static readonly DF_GO_MS_MT_TO = this.ALL_REGIONS[1]
    static readonly AC_AM_AP_PA_RO_RR = this.ALL_REGIONS[2]
    static readonly CE_MA_PI = this.ALL_REGIONS[3]
    static readonly AL_PB_PE_RN = this.ALL_REGIONS[4]
    static readonly BA_SE = this.ALL_REGIONS[5]
    static readonly MG = this.ALL_REGIONS[6]
    static readonly ES_RJ = this.ALL_REGIONS[7]
    static readonly SP = this.ALL_REGIONS[8]
    static readonly PR_SC = this.ALL_REGIONS[9]

    private constructor(readonly code: number, readonly states: string[]) {}

    static getByCode(code: number): CpfRegion {
        return this.ALL_REGIONS[code]
    }

    static getByCpf(cpf: string): CpfRegion {
        const code = cpf.replace(/\D/g, '')[8]
        return this.getByCode(Number(code))
    }

    isEqual(cpfRegion: CpfRegion) {
        return this.code === cpfRegion?.code
    }

    isDifferent(cpfRegion: CpfRegion) {
        return this.code !== cpfRegion?.code
    }

}