import axios from 'axios'
// import cheerio from 'cheerio'
import template from './template.js'
import fs from 'fs'

const courses = []

// 串一張圖
const fetchData = async () => {
  try {
    // 用axios取出，並使用data的部分
    // data陣列
    // const { data } = await axios.get('https://wdaweb.github.io/')
    const { data } = await axios.get('https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=1000&$skip=0')

    // 可用jq語法去解析html
    // const $ = cheerio.load(data)
    // 片歷內容
    for (const i of data) {
      courses.push(i)
    }
    // $('#general .col-md-3').each(function () {
    //   // 推送到陣列裡
    //   courses.push(
    //     [
    //       // 圖片文字處理
    //       'https://wdaweb.github.io/' + $(this).find('img').attr('src').slice(2),
    //       ...$(this).text().replace(/\t/g, '').split('\n').filter(text => text.length > 0)
    //     ]
    //   )
    // })
  } catch (error) {
    console.log(error)
  }
}
// 傳入event物件
const replyCourses = (event) => {
  // const idx = data.findIndex(item => item.Name === event.message.text)
  // course陣列有0:圖片、1:文字
  // bubbles是運算整個courses陣列的每個值後產生新的陣列
  // course是參數值
  const bubbles = courses.map(course => {
    // bubble把模板轉成json
    const bubble = JSON.parse(JSON.stringify(template))
    // 模板的圖片區改成網頁圖
    bubble.hero.url = course.album_file
    // 模板的body的content陣列第一位的text改成抓到的標題
    bubble.body.contents[0].text = course.animal_kind
    // 模板的body的content陣列第二位的text改成抓到的標題
    bubble.body.contents[1].text = course.animal_colour
    // 回傳給bubbles
    return bubble
  })
  // 物件
  console.log('hello here>>>>>' + typeof (bubbles))
  console.log('hello heeeeeee>>>>>' + JSON.stringify(bubbles, null, 2))
  fs.writeFileSync('bubbles.json', JSON.stringify(bubbles, null, 2))
  event.reply([
    {
      type: 'flex',
      altText: '訊息來了',
      contents: {
        type: 'carousel',
        contents: bubbles.slice(0, 6)
      }
    }
  ])
}

export default {
  fetchData,
  courses,
  replyCourses
}
