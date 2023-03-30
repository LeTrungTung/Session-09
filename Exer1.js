// Bai tap 1
let Diem1 = +prompt("Nhập điểm môn Vật lý:");
let Diem2 = +prompt("Nhập điểm môn Hoá học:");
let Diem3 = +prompt("Nhập điểm môn Sinh học:");
AverMark = +(Diem1 + Diem2 + Diem3) / 3;

document.write("Điểm trung bình 3 môn là: ", AverMark + "<br>");
console.log("Điểm trung bình 3 môn là: ", AverMark);

// Bai tap 2
let C = +prompt("Nhập vào độ C:");
const F = (C * 5) / 9 + 32;
document.write("Độ F là: ", F + "<br>");
console.log("Độ F là:", F);

// Bai tap 3

let R = +prompt("Nhập vào bán kính hình tròn:");
S = (3.14 * R * R) / 4;
document.write("Diện tích hình tròn là: ", S + "<br>");
console.log("Diện tích hình tròn là:", S);
