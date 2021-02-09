import React from 'react'
import { GetAllReporters } from '../api/reportersAPI'
import Reporter from '../types/reporter.interface'

const ReportersContext = React.createContext<Reporter[]>([])

export const ReportersProvider: React.FunctionComponent<{}> = (props) => {
    const [reporters, setReporters] = React.useState<Reporter[]>([])
    React.useEffect(() => {
        GetAllReporters().then(rs => setReporters(rs))
    }, [])

    return (
        <ReportersContext.Provider value={reporters}>
            {props.children}
        </ReportersContext.Provider>
    )
}

export default ReportersContext