import axios from 'axios'
import dotenv from 'dotenv'
import { requestProps } from '../../types'
dotenv.config()

const request = async ({ method, type, id } : requestProps) => {
    const response = await axios({
        url: `$https://api.notion.com/v1/${type}/${id}`,
        method: method,
        headers: {
            'Authorization': `Bearer ${process.env.NOTION_TOKEN}`
        }
    })

    return response
}

export default request
