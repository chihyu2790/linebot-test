export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
    size: 'full',
    aspectRatio: '1:1',
    aspectMode: 'cover',
    action: {
      type: 'uri',
      uri: 'http://linecorp.com/'
    }
  },
  body: {
    type: 'box',
    layout: 'vertical',
    spacing: 'md',
    contents: [
      // {
      //   type: 'text',
      //   text: '領養代替購買，給浪浪一個家。',
      //   wrap: true,
      //   weight: 'bold',
      //   gravity: 'center',
      //   size: 'xl'
      // },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '類別',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1
              },
              {
                type: 'text',
                text: '類別未輸入',
                wrap: true,
                size: 'sm',
                color: '#666666',
                flex: 5
              }
            ]
          }, {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '品種',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1
              },
              {
                type: 'text',
                text: '品種未輸入',
                wrap: true,
                size: 'sm',
                color: '#666666',
                flex: 5
              }
            ]
          }, {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '毛色',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1
              },
              {
                type: 'text',
                text: '毛色未輸入',
                wrap: true,
                size: 'sm',
                color: '#666666',
                flex: 5
              }
            ]
          }, {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '體型',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1
              },
              {
                type: 'text',
                text: '體型未輸入',
                wrap: true,
                size: 'sm',
                color: '#666666',
                flex: 5
              }
            ]
          }, {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '性別',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1
              },
              {
                type: 'text',
                text: '性別未輸入',
                wrap: true,
                size: 'sm',
                color: '#666666',
                flex: 5
              }
            ]
          }, {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '尋獲地址',
                color: '#aaaaaa',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '尋獲地址地未輸入',
                wrap: true,
                size: 'sm',
                color: '#666666',
                flex: 5
              }
            ]
          }, {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '收容所名稱',
                color: '#aaaaaa',
                size: 'sm',
                flex: 3
              },
              {
                type: 'text',
                text: '公告收容所名稱未輸入',
                wrap: true,
                size: 'sm',
                color: '#666666',
                flex: 5
              }
            ]
          }, {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '收容所位址',
                color: '#aaaaaa',
                size: 'sm',
                flex: 3
              },
              {
                type: 'text',
                text: '收容所位址未輸入',
                wrap: true,
                size: 'sm',
                color: '#666666',
                flex: 5
              }
            ]
          }, {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '連絡電話',
                color: '#aaaaaa',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '連絡電話未輸入',
                wrap: true,
                size: 'sm',
                color: '#666666',
                flex: 5
              }
            ]
          }, {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '收容編號',
                color: '#aaaaaa',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '收容編號未輸入',
                wrap: true,
                size: 'sm',
                color: '#666666',
                flex: 5
              }
            ]
          }, {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '是否開放領養',
                color: '#aaaaaa',
                size: 'sm',
                flex: 3
              },
              {
                type: 'text',
                text: '是否開放領養未輸入',
                wrap: true,
                size: 'sm',
                color: '#666666',
                flex: 5
              }
            ]
          }, {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '資料備註',
                color: '#aaaaaa',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '資料備註未輸入',
                wrap: true,
                size: 'sm',
                color: '#666666',
                flex: 5
              }
            ]
          }, {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '資料更新時間',
                color: '#aaaaaa',
                size: 'sm',
                flex: 3
              },
              {
                type: 'text',
                text: '資料更新時間未輸入',
                wrap: true,
                size: 'sm',
                color: '#666666',
                flex: 5
              }
            ]
          }
        ]
      }
    ]
  }
}

// export default {
//   type: 'bubble',
//   hero: {
//     type: 'image',
//     url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
//     size: 'full',
//     aspectRatio: '20:13',
//     aspectMode: 'cover'
//   },
//   body: {
//     type: 'box',
//     layout: 'vertical',
//     contents: [
//       {
//         type: 'text',
//         text: 'Brown Cafe',
//         weight: 'bold',
//         size: 'xl'
//       },
//       {
//         type: 'text',
//         text: 'hello, world'
//       }
//     ]
//   }
// }
