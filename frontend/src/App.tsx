import React from 'react';
import ReporterList from './components/ReporterList'
import { ReportersProvider } from './hooks/ReportersProvider'

function App() {
  const [selectedReporterId, setSelectedReporterId] = React.useState<string>('')
  return (
    <ReportersProvider>
        <ReporterList selectedReporterId={selectedReporterId} onSelectReporterId={setSelectedReporterId} />
    </ReportersProvider>
  );
}

export default App;
