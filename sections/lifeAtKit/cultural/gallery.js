import Reat from "react"

const Gallery = () => {
    return (
        <section class="overflow-hidden text-gray-700">
  <div class="container  py-2 mx-auto pt-20 pb-10 px-10 sm:px-4 sm:pb-5">
    <div class="flex flex-wrap sm:flex-col -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/2 sm:w-fit">
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="images/LifeAtKit/1.jpg" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="images/LifeAtKit/4.jpg" />
        </div>
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="images/LifeAtKit/3.jpg" />
        </div>
      </div>
      <div class="flex flex-wrap w-1/2 sm:w-fit">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="images/LifeAtKit/2.jpg" /> 
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="images/LifeAtKit/5.jpg" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="images/LifeAtKit/6.jpg" />
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default Gallery