import React from 'react'
import styled from 'styled-components'
import MatchesContext from '../hooks/MatchesProvider'
import Match from '../types/match.interface'

const MatchTitle = styled.h2`
    padding: 0;
    margin: 0;
`

const MatchSubtitle = styled.h3`
    padding: 0;
    margin: 0;
`

const MatchBlock = (props: {
    match: Match,
    onClick: () => void
}) => {
    const date = new Date(props.match.scheduledStartTime)
    return (
        <div onClick={props.onClick}>
            <MatchTitle>{props.match.player1.name} vs {props.match.player2.name}</MatchTitle>
            <MatchSubtitle>{date.toLocaleDateString()} {date.toLocaleTimeString()} | Best of {props.match.numGames}</MatchSubtitle>
        </div>
    )
}

const MatchesList = (props: {
    selectedMatchId: string,
    onSelectMatchId: (id: string) => void
}) => {
    const matches = React.useContext(MatchesContext)
    return (
        <div>
            <h1>{props.selectedMatchId}</h1>
            {matches.map(m => <MatchBlock key={m.id} match={m} onClick={() => props.onSelectMatchId(m.id)}/>)}
        </div>
    )
}

export default MatchesList