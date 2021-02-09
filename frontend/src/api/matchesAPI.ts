import Api from './api'
import Match from '../types/match.interface'

export const GetAllMatches = (): Promise<Match[]> => {
    return Api('matches')
        .then(resp => resp.json())
        .then(resp => resp as Match[])
}

export const GetMatch = (id: String): Promise<Match> => {
    return Api(`matches/${id}`)
        .then(resp => resp.json())
        .then(resp => resp as Match)
}