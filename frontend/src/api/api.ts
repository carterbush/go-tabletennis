import { ApiPath } from '../common/constants'

const Api = (
    api: string,
    method: 'GET'|'POST'|'PUT'|'DELETE' = 'GET',
    data: any = ''
) => fetch(`${ApiPath}/${api}`, {
    method,
    mode: 'cors',
    body: !!data ? JSON.stringify(data) : null,
})

export default Api