const { default: axios } = require('axios');



exports.handler = async (event, context) => {
  const targetURL = 'https://medium.com/feed/@georgekoureas';

  try {
    const response = await axios.get(targetURL);
    return {
      statusCode: 200,
      body: response.data
    }
  } catch(error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    }
  }


};

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   next()
// })

// app.get('/medium', (req, res) => {
//   request(
//     { url: 'https://medium.com/feed/@georgekoureas' },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message:
//       err.message })
//     }
    
//     res.set('Content-Type', 'application/rss+xml')
//     res.send(Buffer.from(body))
//   })
// })
// const PORT = process.env.PORT || 4050
// app.listen(PORT, () => console.log(`listening on ${PORT}`))