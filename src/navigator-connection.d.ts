/** TODO: Contribute this upstream */
interface Navigator {
    connection?: {
        downlink: number
        downlinkMax: number
        effectiveType: "slow-2g"|"2g"|"3g"|"4g"
        rtt: number
        saveData: boolean
        type: string
    } 
}
