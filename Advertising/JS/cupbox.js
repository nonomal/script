var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="{div[class*="mobile-nav"]{display: none! important}
div[class*="model"]{display: none! important}
div[class*="hongbao"]{display: none! important}
div[class*="jsx-ad"]{display: none! important}
.adsbygoogle{display: none! important}
.banner-box{display: none! important}
a[href*="shopping"]{display: none! important}
a[href*="donate"]{display: none! important}
div[class*="notice"]{display: none! important}}" type="text/css">');
$done({ body });
