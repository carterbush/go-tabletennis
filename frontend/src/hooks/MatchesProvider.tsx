import React from 'react'
import { GetAllMatches } from '../api/matchesAPI'
import Match from '../types/match.interface'

const MatchesContext = React.createContext<Match[]>([])

export const MatchesProvider: React.FunctionComponent<{}> = (props) => {
    const [matches, setMatches] = React.useState<Match[]>([])
    React.useEffect(() => {
        GetAllMatches().then(rs => setMatches(rs))
    }, [])

    return (
        <MatchesContext.Provider value={matches}>
            {props.children}
        </MatchesContext.Provider>
    )
}

export default MatchesContext