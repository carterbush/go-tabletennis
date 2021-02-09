import React from 'react';
import ReporterList from './components/ReporterList'
import MatchesList from './components/MatchesList'
import { ReportersProvider } from './hooks/ReportersProvider'
import { MatchesProvider } from './hooks/MatchesProvider'

function App() {
  const [selectedReporterId, setSelectedReporterId] = React.useState<string>('')
  const [selectedMatchId, setSelectedMatchId] = React.useState<string>('')
  return (
    <ReportersProvider>
      <MatchesProvider>
        <ReporterList selectedReporterId={selectedReporterId} onSelectReporterId={setSelectedReporterId} />
        <MatchesList selectedMatchId={selectedMatchId} onSelectMatchId={setSelectedMatchId}/>
      </MatchesProvider>
    </ReportersProvider>
  );
}

export default App;
