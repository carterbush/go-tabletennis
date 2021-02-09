import Api from './api'
import Match from '../types/match.interface'
import { MatchEventType } from '../types/matchEvent.interface'

export const GetAllMatches = (): Promise<Match[]> => {
    return Api('matches')
        .then(resp => resp.json())
        .then(resp => resp as Match[])
}

export const GetMatch = (id: string): Promise<Match> => {
    return Api(`matches/${id}`)
        .then(resp => resp.json())
        .then(resp => resp as Match)
}

export const PostMatchEvent = (
    matchId: string,
    type: MatchEventType,
    context: string,
    reporterId: string
): Promise<Match> => {
    return Api(
        `matches/${matchId}/event`,
        'POST',
        {
            Type: type,
            Context: context,
            ReporterId: reporterId
        })
        .then(resp => resp.json())
        .then(resp => resp as Match)
}