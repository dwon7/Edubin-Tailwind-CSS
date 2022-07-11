var courseList = document.querySelector('.course-list');

fetch("https://60d4611a61160900173cb070.mockapi.io/courses")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let html="";

    data.map((x) => {
        let rate = "";
        for(let i = 0; i < x.rate; i++){
            rate += `<i class="fa-solid fa-star"></i>`;
        }

        for(let i =0; i < 5 -x.rate; i++){
            rate += `<i class="fa-solid fa-star-sharp"></i>`
        }

        html += `<div class="col px-[15px]">
                    <div class="single-course bg-white rounded-md">
                        <div class="thum relative">
                            <div class="image h-[270px] ">
                                <img src="${x.image}" alt="" class="w-full h-full rounded-md">
                            </div>

                            <div class="price absolute right-[60px] bottom-[-24px] w-[55px] h-[55px] rounded-full bg-[#ffc600] text-center">
                                <span class="text-sm text-[#07294d] font-bold leading-[55px]">
                                Free
                                </span>
                            </div>
                        </div>

                        <div class="cont pt-[28px] pb-[34px] px-[30px]">
                            <div class="flex">
                                <ul class="flex mr-[10px]">
                                    <li class="mx-1 my-1">
                                        <i class="fa-solid fa-star  text-[#ffc600]"></i>
                                    </li class="mx-1 my-1">

                                    <li class="mx-1 my-1">
                                        <i class="fa-solid fa-star text-sm text-[#ffc600]"></i>
                                    </li>
                                    <li class="mx-1 my-1">
                                        <i class="fa-solid fa-star text-sm text-[#ffc600]"></i>
                                    </li>
                                    <li class="mx-1 my-1">
                                        <i class="fa-solid fa-star text-sm text-[#ffc600]"></i>
                                    </li>
                                    <li class="mx-1 my-1">
                                        <i class="fa-solid fa-star text-sm text-[#ffc600]  "></i>
                                    </li>
                                </ul>
                                <span class="text-[13px] my-2">(20 Reviews)</span>
                            </div>
                            <a href="#">
                                <h4 class="text-2xl font-semibold pt-[15px] pb-[40px] hover:text-[#ffc600]">${x.name}</h4>
                            </a>

                            <div class="course-teacher flex justify-around pt-[20px] border-t-2">
                                <div class="thum flex">
                                    <a href="#">
                                        <img 
                                            src="./images/image_icon/teacher_1.jpg" 
                                            alt=""
                                            class="w-[40px] h-[40px] rounded-full"
                                        >
                                    </a>

                                    <div class="name">
                                    <a href="#">
                                        <h6 class="mt-[10px] ml-[10px] hover:text-[#ffc600]">${x.teacher}</h6>
                                    </a>
                                </div>
                                </div>

                                <div class="admin">
                                    <ul class="flex mt-[10px]">
                                        <li class="mr-[20px]">
                                            <a href="#">
                                                <i class="fa-solid fa-user hover:text-[#ffc600]"></i>
                                                <span>31</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <i class="fa-solid fa-heart hover:text-[#ffc600]"></i>
                                                <span>10</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
    });
    courseList.innerHTML = html;
    $(document).ready(function(){
        $('.course-list').slick({
           slidesToShow: 3,
           prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
           nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
           autoplay: true,
        });
    });
  })


