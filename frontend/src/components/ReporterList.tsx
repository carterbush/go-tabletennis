import React from 'react'
import styled from 'styled-components'
import ReportersContext from '../hooks/ReportersProvider'

const Select = styled.select`
    background-color: ${props => props.theme.colors.blackcoffee};
    color: ${props => props.theme.colors.lightashgray};
    min-width: 250px;
    min-height: 75px;
    font-size: 24px;
    border-radius: 50px;
    padding: 0 15px;
`

const Option = styled.option`
    background-color: ${props => props.theme.colors.blackcoffee};
    color: ${props => props.theme.colors.lightashgray};
    padding: 0 15px;
`

const ReporterList = (props: {
    selectedReporterId: string,
    onSelectReporterId: (id: string) => void
}) => {
    const reporters = React.useContext(ReportersContext)

    return (
        <div>
            <Select value={props.selectedReporterId} onChange={e => props.onSelectReporterId(e.target.value)}>
                <Option value='' key='' disabled>Who are you?</Option>
                {reporters.map(r => <Option value={r.id} key={r.id}>{r.name}</Option>)}
            </Select>
        </div>
    )
}

export default ReporterList