import axios from 'axios'

import template from './template.js'
import fs from 'fs'

const courses = []

const fetchData = async () => {
  try {
    const { data } = await axios.get('https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=1000&$skip=0')

    for (const i of data) {
      courses.push(i)
    }
  } catch (error) {
    console.log(error)
  }
}

const replyCourses = (event) => {
  const bubbles = courses.map(course => {
    const bubble = JSON.parse(JSON.stringify(template))

    if (course.album_file !== '') {
      bubble.hero.url = course.album_file
      bubble.hero.action.uri = course.album_file
    } else {
      bubble.hero.url = 'https://raw.githubusercontent.com/chihyu2790/practice/main/img/lineBot/3733459.jpg'
    }

    bubble.body.contents[0].contents[0].contents[1].text = course.animal_kind
    bubble.body.contents[0].contents[1].contents[1].text = course.animal_Variety
    bubble.body.contents[0].contents[2].contents[1].text = course.animal_colour
    bubble.body.contents[0].contents[3].contents[1].text = course.animal_bodytype
    bubble.body.contents[0].contents[4].contents[1].text = course.animal_sex
    bubble.body.contents[0].contents[5].contents[1].text = course.animal_foundplace
    bubble.body.contents[0].contents[6].contents[1].text = course.shelter_name
    bubble.body.contents[0].contents[7].contents[1].text = course.shelter_address
    bubble.body.contents[0].contents[8].contents[1].text = course.shelter_tel
    bubble.body.contents[0].contents[9].contents[1].text = course.animal_subid
    bubble.body.contents[0].contents[10].contents[1].text = course.animal_status

    if (course.animal_remark !== '') {
      bubble.body.contents[0].contents[11].contents[1].text = course.animal_remark
    } else {
      bubble.body.contents[0].contents[11].contents[1].text = '沒有備註'
    }
    bubble.body.contents[0].contents[12].contents[1].text = course.cDate

    return bubble
  })

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
