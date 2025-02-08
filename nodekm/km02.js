//Variable ตัวแปร มีหน้าที่เก็บข้อมูล ต้งชื่ออะำรก็ได้ ให้สื่อกับสิ่งที่เก็บ
//Variable ถือเป็น Expression นิพจน์ ประเภทหนึ่ง

var a = 10; //เปลียนค่าได้  Global ใช้ที่ไหนก็ได้
let b = 20; //เปลียนค่าได้  Local  ใช้ได้เฉพาะใน {} หนึ่งๆ
const c = 30; //เปลียนค่าไม่ได้ แล้วต้องมีค่าด้วย Local ใช้ได้เฉพาะใน {} หนึ่งๆ

a = 11;
b = 21;
//c = 31;


{
    var d = 40;
    let e = 50;
    const f = 60;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    //console.log(e);
    //console.log(f);