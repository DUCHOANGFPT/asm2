import data from '../../db.json' assert { type: 'json' };

const urlParams = new URLSearchParams(location.search);

const id = urlParams.get('id');

let book = data.filter(function (book) {
  return book.id == id;
});

book = book[0];
console.log(book);

var number = book.list_price;
let first = Math.floor(number / 1000);
let second = number % 1000;
var giasale = first + '.' + second + '00đ';
var number1 = book.current_seller.price;
var a = 100;
let sale = Math.floor(100 - (number1 / number) * a);
let firstt = Math.floor(number1 / 1000);
let secondd = number1 % 1000;
var giagoc = firstt + '.' + secondd + 'đ';

const contentElement = document.querySelector('#content');
const category = book.categories.name;
const _content = /*html*/ `
    <div class="container mx-auto md:flex">
      <div class="md:w-1/4 w-[400px] mx-auto flex-none mt-[11px]">
        <img src="${book.images[0].base_url}" class="animate-pulse">
        <div class="md:grid md:grid-cols-5 gap-3 hidden md:block">
          ${book.images
            .map(function (image) {
              return `<img src="${image.base_url}" alt="" class="hover:animate-bounce cursor-pointer">`;
            })
            .join('')}
        </div>
         <div class="md:flex md:items-center gap-[8px] mt-[24px] mb-[42px] hidden md:block">
      <p>Chia sẻ:</p>
      <img src="../images/fb.png" alt="">
      <img src="../images/zalo.png" alt="">
      <img src="../images/pin.png" alt="">
      <img src="../images/tw.png" alt="">
      <img src="../images/link.png" alt="">
    </div>
      </div>
      <div class="grow mt-[30px] ml-10 md:ml-0">
          <div class="md:flex md:items-center hidden md:block">
      <p class="mr-[16px] ">Tác giả:  <span class="text-[#0D5CB6]">${
        book.authors[0]?.name
      }</span> </p>
      <p class="mr-[3px]">Đứng thứ 13 trong</p>
      <p class="mr-[8px] text-[#0D5CB6]">Top 1000 Sách tư duy - Kỹ năng sống</p>
      <p class="text-[#0D5CB6]">bán chạy tháng này</p>
    </div>
        <p class="text-[25px]">${book.name}</p>
         <div class="flex items-center mt-[9px] mb-[12px]">
      <img src="../images/saodetail.png" alt="">
      <img src="../images/saodetail.png" alt="">
      <img src="../images/saodetail.png" alt="">
      <img src="../images/saodetail.png" alt="">
      <img src="../images/saodetail.png" alt="">
      <p class="mx-[10px] text-[#787878]">(Xem 2942 đánh giá)</p>
      <p class="text-[#787878]">|</p>
      <p class="ml-[8px] text-[#787878]">Đã bán 1000+</p>
    </div>
          <!-- content -->
          
  <div class="flex gap-[50px]">
    <!-- left -->
    <div>
      <div class="flex items-baseline gap-[8px] mb-[10px]">
      <p class="text-red-600 text-[32px]">${giagoc}</P>
      <p class="text-[20px] text-[#808089]">${giasale}</p>
      <p class="border border-[#FF424E] text-[#FF424E] bg-[#FFF0F1] rounded-[2px]">${-sale}%</p>
    </div>
    <div class="flex ">
      <div class="flex border border-[#C6BCF8] bg-[#F2F0FE] rounded-[5px] items-center  gap-[7px]">
      <img src="../images/content.png" alt="" class="object-contain p-[8px]">
      <p class="text-[#402DA1]">Thưởng lên đến 7,31 ASA ≈ 3.969 Xu</p>
      <img src="../images/hoi.png" alt="" class="object-contain p-[10px]">
    </div>
    </div>
    <br>
    <hr>
    <div class="flex items-baseline gap-7 md:block w-[360px]">
    <h3 class="mt-[17px] mb-[7px]">15 Mã Giảm Giá</h3>
    <div class="flex gap-[12px]">
      <p class="border border-[#0D5CB6] text-[#0D5CB6]  rounded-[5px] px-[13px] py-[4px] hover:bg-[#0D5CB6] hover:text-white cursor-pointer">Giảm 10k</p>
      <p class="border border-[#0D5CB6] text-[#0D5CB6] rounded-[5px] px-[13px] py-[4px] hover:bg-[#0D5CB6] hover:text-white cursor-pointer">Giảm 20k</p>
      <p class="border border-[#0D5CB6] text-[#0D5CB6] rounded-[5px] md:px-[13px] md:py-[4px] hidden md:block hover:bg-[#0D5CB6] hover:text-white cursor-pointer">Giảm 30k</p>
        <img src="../images/muitenphai.png" alt="" class="object-contain">
    </div>
    </div>
    
    <br>
    <hr>
     <div class="md:flex mt-[18px] mb-[12px] hidden md:block">
      <p class="mr-[4px]">Giao đến</p>
      <p>Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội -</p>
      <p class="text-[#0D5CB6]">Đổi địa chỉ</p>
    </div>
    
    <div class="md:hidden flex gap-[178px] items-baseline mt-5">
    <p>Nhập Địa Chỉ Giao Hàng</p>
    <p> <img src="../images/muitenphai.png" alt="" class="object-contain"></p>
    </div>

     <div class="md:flex gap-[11px] hidden md:block ">
      <div class="border border-[#EEEEEE] pt-[9px] pb-[13px] px-[15px] rounded-[15px] hover:bg-blue-600 cursor-pointer hover:text-white">
        <div class="flex pb-[6px] ">
          <img src="../images/sldiebartikinow.png" alt="" class="object-contain ">
          <p class="text-[#787878] px-[5px]">|</p>
          <h3 class="text-[#00AB56]">Trước 18:00 hôm nay</h3>
        </div>
        <h1 class="pb-[6px]">19.000đ</h1>
        <div class="flex border border-[#C6BCF8] bg-[#F2F0FE] rounded-[5px] px-[5px] ">
          <img src="../images/content.png" alt="" class="object-contain">
          <p class="text-[#402DA1] px-[5px]">Freeship 100% chỉ với 34 ASA</p>
          <img src="../images/hoi.png" alt="" class="object-contain">
        </div>
      </div>
      <div class="border border-[#EEEEEE] pt-[9px] pb-[13px] px-[15px] rounded-[15px] hover:bg-blue-600 cursor-pointer hover:text-white">
        <div class="flex pb-[6px] ">
          <img src="../images/tikifast.png" alt="" class="object-contain">
          <p class="text-[#787878] px-[4px]">|</p>
          <h3 class=" text-[#00AB56]">Ngày mai, trước 23:00</h3>
        </div>
        <h1 class="pb-[6px]">10.000đ (Freeship 30K đh 149K)</h1>
        <div class="flex border border-[#C6BCF8] bg-[#F2F0FE] rounded-[5px] px-[5px]">
          <img src="../images/content.png" alt="" class="object-contain">
          <p  class="text-[#402DA1] px-[4px]">Freeship 100% chỉ với 18 ASA</p>
          <img src="../images/hoi.png" alt="" class="object-contain">
        </div>
      </div>
    </div>
    <br>
    <hr>
      <div class="hidden md:block">
      <h1 class="mt-[15px] mb-[10px]">Số Lượng</h1>
        <div class="flex mb-[16px]">
      <p class="border border-[#ECECEC]  px-[9px] py-[3px]">-</p>
      <p class="border border-[#ECECEC] px-[15px] py-[3px]"></p>
      <p class="border border-[#ECECEC] px-[9px] py-[3px]">+</p>
    </div>
    </div>
     <button class="bg-[#FF3945] hover:bg-red-400 text-white px-[117px] py-[12px] hidden md:block">Chọn Mua</button>
    </div>
    <!-- end left -->
    <!-- right -->
    <div>
    <div class="md:flex gap-[12px] mb-[12px] ml-[30px] hidden md:block">
      <img src="../images/tikitrading.png" alt="">
      <div>
        <p>Tiki Trading</p>
        <img src="../images/official.png" alt="">
      </div>
    </div>
     <div class="md:grid md:grid-cols-2 ml-[50px] hidden md:block">
      <div>
        <p>4.6 / 5</p>
        <p class="text-[#787878]">4.7tr+</p>
      </div>
      <div>
        <p>408k+</p>
        <p class="text-[#787878]">Theo dõi</p>
      </div>
    </div>
     <div class="md:flex text-[#0D5CB6] gap-[18px] ml-[28px] hidden md:block">
      <div class="flex border border-[#0D5CB6]rounded-[2px] p-[7px] mt-[12px] cursor-pointer ">
        <img src="../images/shop.png" alt="" class="object-contain">
        <p>Xem Shop</p>
      </div>
      <div class="flex border border-[#0D5CB6]rounded-[2px]  p-[7px] mt-[12px]">
        <img src="../images/daucong.png" alt="" class="object-contain">
        <p>Theo Dõi</p>
      </div>
    </div>
    <br>
    <hr>
     <div class="md:flex gap-3 mt-[9px] ml-[20px] hidden md:block">
      <div>
        <img src="../images/tichxanh.png" alt="" class="object-contain ml-[28px]">
        <p class="text-center">Hoàn tiền<br> 111% <br> nếu hàng giả</p>
      </div>
      <div>
        <img src="../images/like.png" alt="" class="object-contain ml-[20px]">
        <p class="text-center">Mở hộp <br> kiểm tra <br> nhận hàng</p>
      </div>
      <div>
        <img src="../images/back.png" alt="" class="object-contain ml-[23px]">
        <p class="text-center">Đổi trả trong <br> 30 ngày <br> nếu sp lỗi</p>
      </div>
    </div>
     <div class="md:flex items-center gap-[38px] mt-[24px] border rounded-[4px] justify-center p-[12px] hidden md:block">
      <div>
        <p>8 nhà bán khác</p>
        <p class="text-[#787878]">Giá từ 75.210 ₫</p>
      </div>
      
         <p class="border border-[#0D5CB6] text-[#0D5CB6] p-[10px] rounded-[6px] hover:bg-blue-600 cursor-pointer hover:text-white" >So Sánh</p>
     
    </div>
    </div>
    <!-- end right -->
  </div>
  <!-- end content -->
      </div>
    </div>

    <!-- sản phẩm tương tự -->

 <p class="text-[32px] md:container md:mx-auto ml-9  "> Sản phẩm tương tự </p>
 <div class="container mx-auto ">
        <div class="grid grid-cols-2 md:grid-cols-10 mt-[30px] w-full h-auto">
        ${data
          .filter(function (book) {
            return book.categories.name == category;
          })
          .map(function (book) {
            return /*html*/ `
                <div class="">
                    <img class="md:hover:animate-bounce cursor-pointer" src="${book.images[0].base_url} ">
                    <div class="ml-7 md:ml-0">
                     <p class="font-bold ">${book.name}</p>
                    <div class="flex items-center">
<img src="../images/saodetail.png" alt="">
<img src="../images/saodetail.png" alt="">
<img src="../images/saodetail.png" alt="">
<img src="../images/saodetail.png" alt="">
<img src="../images/saodetail.png" alt="">
                    
                    </div>
                    <div>
  <p class="text-[#787878]">${book.quantity_sold?.text}</p></div>
   <p class="text-[#FF424E]">${book.current_seller.price}đ </p>
                    </div>
                   
                </div>
            `;
          })
          .join('')}
        </div>
    </div>
    <div class="text-[32px] md:container md:mx-auto mt-8 ml-10 ">Thông tin chi tiết</div>
    <div class=" md:container md:mx-auto mt-[12px] ml-4 "> 
${
  book.specifications &&
  book.specifications[0].attributes
    .map(function (info) {
      return /*html*/ `
                <div><span class="flex gap-[15px]"> <div class=" bg-[#EFEFEF] w-[220px] h-[41px] py-[10px] pl-[31px]">
      ${info.name}
    </div> <div class="py-[8px]">
      ${info.value}
    </div> </span></div>
            `;
    })
    .join('')
}    
    </div>
  <!-- mô tả sản phẩm -->
    <div class="container mx-auto ">
     <p class="text-[32px] mt-[23px] mb-[11px] ml-10 md:ml-0">Mô Tả Sản Phẩm</p>
     <div class="grid mx-auto md:grid-cols-2 ml-4 md:ml-0"><div >${
       book.description
     }</div></div>
      
      <div class="my-[50px]">
    <button onclick="show1(true)" class="border border-[#189EFF] inline-block rounded-[5px] text-[#189EFF] px-[55px] py-[3px] ml-20  md:ml-[250px] hover:bg-blue-600 hover:text-white" >Xem Thêm Nội Dung</button>
    <div id="noidung" style="display: none;">
    <div class="grid mx-auto md:grid-cols-2 ml-4 md:ml-0 mt-[50px] "><div >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellendus a corrupti tempora commodi fugit esse reprehenderit id nobis assumenda delectus sit temporibus quod praesentium omnis totam possimus veritatis quos autem, recusandae est officiis sunt? Optio error, accusantium tempore, animi magnam eos nesciunt provident corporis soluta, sit repellat nisi totam vero quis quidem in explicabo culpa omnis nobis voluptatum ipsum iste sapiente at reiciendis. Neque magni perferendis, repellat, obcaecati laborum, nobis dignissimos quae sint ipsa assumenda sed temporibus! Libero similique nostrum minus laboriosam quis, earum, accusamus ut blanditiis facere, nisi est? Adipisci similique consequatur iure tempora nam et illum facere. </div></div>
     <button onclick="show1(false)" class="border border-[#189EFF] inline-block rounded-[5px] text-[#189EFF] px-[55px] py-[3px] ml-20  md:ml-[280px] ml-[122px] mt-[10px] hover:bg-blue-600 hover:text-white ">Ẩn Nội Dung</button>
    </div>
    
   </div>
    </div>
`;
contentElement.innerHTML = _content;
