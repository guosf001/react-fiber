import express from 'express'

const app = express()
app.use(express.static('dist'))

const template = `
<html>
<head>
<title>React Fiber</title>
<body>
<div id='root'></div>
<script src="bundle.js"></script>
</body>
</head>
</html>
`

app.get('*', (req,res) => {
   res.send(template) 
})

app.listen(3000, () => {
    console.log('服务器开启。。。');
})