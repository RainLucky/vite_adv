/*
 * @Description: 
 * @Version: 2.0
 * @Author: Rain
 * @Date: 2021-11-25 15:03:04
 * @LastEditiors: Rain
 * @LastEditTime: 2021-12-01 15:43:59
 */
// const http = require("http");
// const app = http.createServer();
// const fs = require("fs");
// app.on("request", (req, res) => {

//     console.log('服务器接收到请求');
//     if (req.method == "POST") {
//         console.log('接收post方法')
//         var data = [];
//         req.on("data", (chunk) => {
//             console.log('data chunk')
//             data.push(chunk)
//         })
//         req.on("end", () => {
//             console.log('data end', data)
//             var buffer = Buffer.concat(data);
//             console.log('buffer', buffer)
//             fs.writeFile("./tmpfile/a.txt", buffer, (err) => {
//                 console.log('成功吗', err)
//                 if (!err) {
//                     res.writeHead(200, {
//                         'content-type': 'application/json; charset=utf-8'
//                     })
//                     res.end("文件接收成功")
//                 } else {
//                     console.log(err)
//                     res.writeHead(403, {
//                         'content-type': 'application/json; charset=utf-8'
//                     })
//                     res.end("文件接收失败")
//                 }
//             })
//         })
//     }
// })
// app.listen(3001, () => {
//     console.log("ok");
// })

const express = require('express');
const formidable = require('formidable')
const path = require('path');
const fs = require('fs');
const {
    dirname
} = require('path');
const app = express();

app.post('/', (req, res, next) => {
    console.log('服务器接收到请求')
    const form = formidable({
        keepExtensions: true,
        multiples: true,
        uploadDir: path.join(__dirname, './tmpfile')
    })

    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }
        // 重命名
        let extname = path.extname(files.file.originalFilename);
        let oldpath = __dirname + '/tmpfile/' + files.file.newFilename;
        let newpath = __dirname + '/tmpfile/' + files.file.originalFilename
        // console.log('extname', extname)
        // console.log('oldpath', oldpath);
        // console.log('newpath', newpath);
        fs.rename(oldpath, newpath, function (err) {
            if (err) {
                console.log('改名失败', err)
            }
        })
        files.file.newFilename = files.file.originalFilename;

        console.log('-----filesname-------', files.file.originalFilename, files.file.newFilename)
        // console.log('-----fields------', fields)

    })


})

app.listen(3001, () => {
    console.log('Server listening on http://localhost:3001 ...');
});