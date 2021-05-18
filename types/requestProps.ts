type requestProps = {
    method: 'post' | 'get' | 'patch' | 'POST' | 'GET' | 'PATCH'
    type: 'user' | 'pages' | 'databases' | 'blocks' | 'search'
    id: string
}

export default requestProps
