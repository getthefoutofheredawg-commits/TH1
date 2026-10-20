export const products = [
 {id:1,slug:'heritage-automatic',name:'Heritage Automatic',brand:'CHRONOS',category:'Nam',price:6890000,oldPrice:8200000,badge:'BÁN CHẠY',color:'silver',description:'Thiết kế cổ điển với bộ máy tự động, mặt số thanh lịch và dây thép không gỉ.'},
 {id:2,slug:'midnight-classic',name:'Midnight Classic',brand:'CHRONOS',category:'Nam',price:4250000,badge:'MỚI',color:'black',description:'Sắc đen tối giản, đường nét tinh tế, phù hợp cả công sở lẫn những buổi tối đặc biệt.'},
 {id:3,slug:'rose-elegance',name:'Rose Elegance',brand:'CHRONOS',category:'Nữ',price:5390000,color:'rose',description:'Sự kết hợp dịu dàng giữa sắc vàng hồng, mặt số trang nhã và phong cách hiện đại.'},
 {id:4,slug:'ocean-diver',name:'Ocean Diver',brand:'CHRONOS',category:'Thể thao',price:7950000,badge:'NỔI BẬT',color:'navy',description:'Lấy cảm hứng từ đại dương, dành cho người yêu khám phá và chuyển động.'},
 {id:5,slug:'leather-heritage',name:'Leather Heritage',brand:'CHRONOS',category:'Nam',price:3690000,color:'brown',description:'Mặt số sáng phối cùng dây da nâu đem đến vẻ đẹp lịch lãm, không lỗi thời.'},
 {id:6,slug:'pearl-minimal',name:'Pearl Minimal',brand:'CHRONOS',category:'Nữ',price:4590000,color:'cream',description:'Nhẹ nhàng, tối giản, nổi bật với sắc ngọc trai dịu mắt.'},
 {id:7,slug:'golden-hour',name:'Golden Hour',brand:'CHRONOS',category:'Nữ',price:6190000,color:'gold',description:'Chi tiết ánh vàng sang trọng dành cho mọi khoảnh khắc đáng nhớ.'},
 {id:8,slug:'urban-steel',name:'Urban Steel',brand:'CHRONOS',category:'Nam',price:4790000,color:'steel',description:'Thiết kế hiện đại cùng dây thép bền bỉ cho nhịp sống thành thị.'},
];
export const money = amount => new Intl.NumberFormat('vi-VN', { style:'currency', currency:'VND' }).format(amount);
