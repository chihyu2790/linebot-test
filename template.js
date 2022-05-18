export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
    size: 'full',
    aspectRatio: '20:13',
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
      {
        type: 'text',
        text: 'BROWNS ADVENTURE IN MOVIE',
        wrap: true,
        weight: 'bold',
        gravity: 'center',
        size: 'xl'
      },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'text',
            text: '類別',
            color: '#aaaaaa',
            size: 'sm',
            flex: 1
          }, {
            type: 'text',
            text: '貓',
            wrap: true,
            color: '#666666',
            size: 'sm',
            flex: 4
          }
        ]
      }
    ]
  }
}

// {
//   "type": "bubble",
//     "hero": {
//     "type": "image",
//       "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_3_movie.png",
//         "size": "full",
//           "aspectRatio": "20:13",
//             "aspectMode": "cover",
//               "action": {
//       "type": "uri",
//         "uri": "http://linecorp.com/"
//     }
//   },
//   "body": {
//     "type": "box",
//       "layout": "vertical",
//         "spacing": "md",
//           "contents": [
//             {
//               "type": "text",
//               "text": "BROWN'S ADVENTURE\nIN MOVIE",
//               "wrap": true,
//               "weight": "bold",
//               "gravity": "center",
//               "size": "xl"
//             },
//             {
//               "type": "box",
//               "layout": "vertical",
//               "margin": "lg",
//               "spacing": "sm",
//               "contents": [
//                 {
//                   "type": "box",
//                   "layout": "baseline",
//                   "spacing": "sm",
//                   "contents": [
//                     {
//                       "type": "text",
//                       "text": "Date",
//                       "color": "#aaaaaa",
//                       "size": "sm",
//                       "flex": 1
//                     },
//                     {
//                       "type": "text",
//                       "text": "Monday 25, 9:00PM",
//                       "wrap": true,
//                       "size": "sm",
//                       "color": "#666666",
//                       "flex": 4
//                     }
//                   ]
//                 },
//                 {
//                   "type": "box",
//                   "layout": "baseline",
//                   "spacing": "sm",
//                   "contents": [
//                     {
//                       "type": "text",
//                       "text": "Place",
//                       "color": "#aaaaaa",
//                       "size": "sm",
//                       "flex": 1
//                     },
//                     {
//                       "type": "text",
//                       "text": "7 Floor, No.3",
//                       "wrap": true,
//                       "color": "#666666",
//                       "size": "sm",
//                       "flex": 4
//                     }
//                   ]
//                 },
//                 {
//                   "type": "box",
//                   "layout": "baseline",
//                   "spacing": "sm",
//                   "contents": [
//                     {
//                       "type": "text",
//                       "text": "Seats",
//                       "color": "#aaaaaa",
//                       "size": "sm",
//                       "flex": 1
//                     },
//                     {
//                       "type": "text",
//                       "text": "C Row, 18 Seat",
//                       "wrap": true,
//                       "color": "#666666",
//                       "size": "sm",
//                       "flex": 4
//                     }
//                   ]
//                 }
//               ]
//             }
//           ]
//   }
// }

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
