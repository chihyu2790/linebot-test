import 'dotenv/config'
import linebot from 'linebot'
import schedule from 'node-schedule'
import data from './data.js'

data.fetchData()

schedule.scheduleJob('0 0 * * *', () => {
  data.fetchData()
})

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', (event) => {
  if (data.courses.length === 0) {
    console.log(data.courses)
    event.reply('資料讀取中，請稍後再試')
  } else if (event.message.type === 'text') {
    // 使用者輸入回復不同內容
    if (event.message.text === '共通課程') {
      data.replyCourses(event)
    }
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('貓狗機器人啟動...逼..逼逼')
})
