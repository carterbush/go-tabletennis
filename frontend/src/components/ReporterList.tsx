import React from 'react'
import ReportersContext from '../hooks/ReportersProvider'

const ReporterList = (props: {
    selectedReporterId: string,
    onSelectReporterId: (id: string) => void
}) => {
    const reporters = React.useContext(ReportersContext)

    return (
        <div>
            <select value={props.selectedReporterId} onChange={e => props.onSelectReporterId(e.target.value)}>
                <option value='' key='' disabled>Who are you?</option>
                {reporters.map(r => <option value={r.id} key={r.id}>{r.name}</option>)}
            </select>
        </div>
    )
}

export default ReporterList