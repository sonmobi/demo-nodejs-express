// const express = require('express'); // cách nhúng thư viện js thường
import express from 'express';  // cách nhúng theo tên module có sẵn
import {create} from 'express-handlebars' // create là tên có sẵn trong handlebar nên không thay đổi được

const app = express(); // tạo đối tượng app chính
const port = 8080;
// thiết lập route cho các file tĩnh, giả sử các file css để trong thư mục public
app.use('/static',express.static('./public')); 
//----- 
// thiết lập template
const hbs = create({extname: '.hbs'}); // tạo đối tượng hbs để quản lý template engine, 
//thiết lập đuôi mở rộng cho các file view là .hbs, sử dụng file layout mặc định với tên là main.hbs

app.engine('.hbs', hbs.engine ); // thiết lập cho app sử dụng engine giao diện ( bộ máy điều khiển lắp ghép giao diện vào ứng dụng )
app.set('view engine','.hbs')  ;
app.set('views','./views') // thiết lập thư mục chứa các file view
 
//-----------
app.get('/', (req,res)=>{
    res.render('home') // vào trang chủ thì trả về file view
 });

 app.get('/trang2', (req,res)=>{
    res.render('trang2') // vào trang 2 thì trả về view của trang 2
 });
 
// khởi động lắng nghe
app.listen(port, ()=>{
    console.log(`Địa chỉ vào web sẽ là: http://localhost:${port}`);
});
 