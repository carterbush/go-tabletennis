import React from 'react'
import styled from 'styled-components'
import ReporterList from './ReporterList'
import MatchesList from './MatchesList'
import ReportersContext from '../hooks/ReportersProvider'

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

    const filteredReporters = reporters.filter(r => r.id === selectedReporterId)
    const reporterName = filteredReporters.length > 0 ? filteredReporters[0].name : ''

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
    } else {
        childComponent = <div>Derp</div>
    }

    return (
        <Wrapper>
            {childComponent}
        </Wrapper>
    )
}

export default Screen