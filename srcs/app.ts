import { request } from './lib'
import { requestProps } from '../types'
import fs from 'fs'
import path from 'path'

const app = async (props: requestProps) => {
    const response = await request(props)

    const filePath = path.join(__dirname, '../response.json')
    fs.writeFileSync(filePath, JSON.stringify(response, undefined, 4));
}

export default app

