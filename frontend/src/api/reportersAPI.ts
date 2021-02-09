import Api from './api'
import Reporter from '../types/reporter.interface'

export const GetAllReporters = (): Promise<Reporter[]> => {
    return Api('reporters')
        .then(resp => resp.json())
        .then(resp => resp as Reporter[])
}