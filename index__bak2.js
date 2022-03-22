const express = require('express');
const app = express();
const port = 8080;

// thiết lập route cho các file tĩnh, giả sử các file css để trong thư mục public

app.use('/static',express.static('./public'));




app.get('/', (req,res)=>{
    res.send("<h1>Xin chào Express, phương thức GET</h1>");
});

app.post('/', (req,res)=>{
    res.send("Bạn đã gọi phương thức POST, phương thức này dùng cho thêm mới")
});

app.put('/', (req,res)=>{
    res.send("Bạn đã gọi phương thức PUT, dùng cho sửa dữ liệu")
});

app.delete('/', (req,res)=>{
    res.send("Bạn đã gọi phương thức DELETE, dùng cho xóa dữ liệu")
});



// khởi động lắng nghe
app.listen(port, ()=>{
    console.log(`Địa chỉ vào web sẽ là: http://localhost:${port}`);
});
 