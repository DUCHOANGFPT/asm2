import data from '../db.json' assert { type: 'json' };

console.log(data);
const listBookElement = document.querySelector('#list-book');
let _content = '';
data.forEach(function (book) {
  _content =
    _content +
    /*html*/ `
      <a href="./detail/index.html?id=${book.id}">
    <div class="ml-7 md:ml-0">
        <img class="max-h-[295px] w-auto hover:scale-105 transition-all " src='${book.images[0].base_url}' alt="Image">
        <div class="md:ml-[50px] mt-[10px]">
           <img src="images/sldiebartikinow.png" alt="">
      <p class="text-[#00AB56]">GIAO SIÊU TỐC 2H</p>
        <p class="font-bold">${book.name}</p>
         <div class="flex items-center">
    <img src="images/saodetail.png" alt="" class="object-contain">
    <img src="images/saodetail.png" alt="" class="object-contain">
    <img src="images/saodetail.png" alt="" class="object-contain">
    <img src="images/saodetail.png" alt="" class="object-contain">
    <img src="images/saodetail.png" alt="" class="object-contain">
    <p class="text-[#C7C7C7] mx-[8px]">|</p>
  <p class="text-[#787878]">${book.quantity_sold?.text}</p>
  
        </div>
   <p class="text-[#FF424E]">${book.current_seller.price}đ </p>
  </div>
    </div>
    `;
});

listBookElement.innerHTML = _content;
