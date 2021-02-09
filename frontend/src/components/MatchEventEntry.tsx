import React from 'react'
import styled from 'styled-components'
import Match from '../types/match.interface'
import { PostMatchEvent } from '../api/matchesAPI'
import MatchEvent, { MatchEventType } from '../types/matchEvent.interface'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Row = styled.div`
    display: flex;
    justify-content: center;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Button = styled.button`
    min-width: 250px;
    min-height: 75px;
    background-color: ${props => props.theme.colors.blackcoffee};
    color: ${props => props.theme.colors.lightashgray};
    font-size: 32px;
    border-radius: 50px;
    border: none;
    margin: 8px;

    :hover {
        background-color: ${props => props.theme.colors.dimgray};
    }

    :focus {
        outline: none;
    }

`

const SendMatchEvent = (
    matchId: string,
    eventType: MatchEventType,
    playerId: string,
    reporterId: string,
    callback: (events: MatchEvent[]) => void
) => {
    PostMatchEvent(matchId, eventType, playerId, reporterId)
    .then(resp => callback(resp.events))
}

const MatchEventEntry = (props: {
    match: Match,
    reporterId: string
}) => {
    // TODO: This is horrible, buuuuut in the interest of time...
    const [events, setEvents] = React.useState<MatchEvent[]>(props.match.events)
    return (
        <Wrapper>
            <Row>
                {[props.match.player1, props.match.player2].map(p => (
                    <Column key={p.id}>
                        <div>{p.name}</div>
                        <Button onClick={() => SendMatchEvent(props.match.id, MatchEventType.Serve, p.id, props.reporterId, setEvents)}>Serve</Button>
                        <Button onClick={() => SendMatchEvent(props.match.id, MatchEventType.Fault, p.id, props.reporterId, setEvents)}>Fault</Button>
                        <Button onClick={() => SendMatchEvent(props.match.id, MatchEventType.Let, p.id, props.reporterId, setEvents)}>Let</Button>
                        <Button onClick={() => SendMatchEvent(props.match.id, MatchEventType.Foul, p.id, props.reporterId, setEvents)}>Foul</Button>
                        <Button onClick={() => SendMatchEvent(props.match.id, MatchEventType.PointScored, p.id, props.reporterId, setEvents)}>Point Scored</Button>
                    </Column>
                ))}
            </Row>
            <Row>
                <Column>
                    {events.slice(0).reverse().map((e, i) => (
                        <div key={e.id}>
                            {events.length - i} {MatchEventType[e.type]}
                        </div>
                    ))}
                </Column>
            </Row>
        </Wrapper>
    )
}

export default MatchEventEntry