# Notion API check module

This program only check notion api response

### setup
.env have your notion api token `NOTION_TOKEN`
Guide check of [notion developer page](https://developers.notion.com/)

`ver0.1`
- Only check default option
**index.tsx**
```typescript
{
    const prop: requestProps = {
    method: 'get', /* method only get/post/patch */
    type: 'pages', /* type only user/block/pages/databases */
    id: 'id of type' /* check id from */
}
}
```
