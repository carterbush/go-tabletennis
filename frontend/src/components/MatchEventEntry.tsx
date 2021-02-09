import React from 'react'
import styled from 'styled-components'
import Match from '../types/match.interface'

const Wrapper = styled.div`
    display: flex;
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

const MatchEventEntry = (props: {
    match: Match
}) => {
    return (
        <Wrapper>
            {[props.match.player1, props.match.player2].map(p => (
                <Column key={p.id}>
                    <div>{p.name}</div>
                    <Button>Serve</Button>
                    <Button>Fault</Button>
                    <Button>Let</Button>
                    <Button>Foul</Button>
                    <Button>Point Scored</Button>
                </Column>
            ))}
        </Wrapper>
    )
}

export default MatchEventEntry