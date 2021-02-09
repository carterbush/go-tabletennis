import React from 'react'
import styled from 'styled-components'
import ReporterList from './ReporterList'
import MatchesList from './MatchesList'

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.grayweb};
`

const Screen = () => {
    const [selectedReporterId, setSelectedReporterId] = React.useState<string>('')
    const [selectedMatchId, setSelectedMatchId] = React.useState<string>('')
    return (
        <Wrapper>
          <ReporterList selectedReporterId={selectedReporterId} onSelectReporterId={setSelectedReporterId} />
          <MatchesList selectedMatchId={selectedMatchId} onSelectMatchId={setSelectedMatchId}/>
        </Wrapper>
    )
}

export default Screen