import React from 'react'
import styled from 'styled-components'
import ReporterList from './ReporterList'
import MatchesList from './MatchesList'
import MatchEventEntry from './MatchEventEntry'
import ReportersContext from '../hooks/ReportersProvider'
import MatchesContext from '../hooks/MatchesProvider'

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.grayweb};
`

const Prompt = styled.h1`
    margin: 0;
    padding: 0;
`

const Screen = () => {
    const [selectedReporterId, setSelectedReporterId] = React.useState<string>('')
    const [selectedMatchId, setSelectedMatchId] = React.useState<string>('')
    const reporters = React.useContext(ReportersContext)
    const matches = React.useContext(MatchesContext)

    const filteredReporters = reporters.filter(r => r.id === selectedReporterId)
    const reporterName = filteredReporters.length > 0 ? filteredReporters[0].name : ''

    const filteredMatches = matches.filter(m => m.id === selectedMatchId)
    const match = filteredMatches.length > 0 ? filteredMatches[0] : null

    let childComponent: JSX.Element
    if (!selectedReporterId) {
        childComponent =
            <>
                <Prompt>Please select yourself</Prompt>
                <ReporterList selectedReporterId={selectedReporterId} onSelectReporterId={setSelectedReporterId} />
            </>
    } else if (!selectedMatchId) {
        childComponent =
            <>
                <Prompt>Welcome, {reporterName}. Which match would you like to record?</Prompt>
                <MatchesList selectedMatchId={selectedMatchId} onSelectMatchId={setSelectedMatchId}/>
            </>
    } else if (match !== null) {
        childComponent = 
            <>
                <Prompt>Okay, {reporterName}. Let's do this!</Prompt>
                <MatchEventEntry match={match} />
            </>
    } else {
        childComponent = <Prompt>Something has gone terribly wrong :(</Prompt>
    }

    return (
        <Wrapper>
            {childComponent}
        </Wrapper>
    )
}

export default Screen