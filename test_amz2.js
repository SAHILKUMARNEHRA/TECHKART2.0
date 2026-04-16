const https = require('https');
https.get('https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg', (res) => {
  console.log(res.statusCode);
});
