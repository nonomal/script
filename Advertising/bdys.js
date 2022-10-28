var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/chxm1023/Html/bdys.css" type="text/css">');
$done({ body });
