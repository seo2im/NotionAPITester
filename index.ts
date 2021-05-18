import app from './srcs/app'
import { requestProps } from './types'
import { request } from 'https'

/*
    Set your props, check notion api site
    https://developers.notion.com/
*/
const prop: requestProps = {
    method: 'get', /* method only get/post/patch */
    type: 'pages', /* type only user/block/pages/databases */
    id: '917c2d83-7e0d-48d9-86d6-f12b28e4abe6' /* check id from */
}
app(prop)