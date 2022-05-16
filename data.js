import axios from 'axios'
import cheerio from 'cheerio'
import template from './template.js'
import fs from 'fs'

const courses = []

// 串一張圖
const fetchData = async () => {
  try {
    // 用axios取出，並使用data的部分
    const { data } = await axios.get('https://wdaweb.github.io/')
    // 可用jq語法去解析html
    const $ = cheerio.load(data)
    // 片歷內容
    $('#general .col-md-3').each(function () {
      // 推送到陣列裡
      courses.push(
        [
          // 圖片文字處理
          'https://wdaweb.github.io/' + $(this).find('img').attr('src').slice(2),
          ...$(this).text().replace(/\t/g, '').split('\n').filter(text => text.length > 0)
        ]
      )
    })
  } catch (error) {
    console.log(error)
  }
}
// 傳入event物件
const replyCourses = (event) => {
  const bubbles = courses.map(course => {
    const bubble = JSON.parse(JSON.stringify(template))
    bubble.hero.url = course[0]
    bubble.body.contents[0].text = course[1]
    bubble.body.contents[1].text = course[2]
    return bubble
  })
  console.log('hello here' + typeof (bubbles))
  // console.log(JSON.stringify(bubbles, null, 2))
  fs.writeFileSync('bubbles.json', JSON.stringify(bubbles, null, 2))
  event.reply([
    {
      type: 'flex',
      altText: 'CAT',
      contents: {
        type: 'carousel',
        contents: bubbles.slice(0, 1)
      }
    }
  ])
}

export default {
  fetchData,
  courses,
  replyCourses
}
