import Reat from "react"

const PressReleaseGrid = () => {
  let PressRelease = [
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-01.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-02.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-03.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-04.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-05.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-06.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-07.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-08.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-09.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-10.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-11.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-12.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-13.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-14.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-15.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-16.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-17.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-18.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-19.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-20.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-21.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-22.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-23.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-24.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-25.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-26.jpg"
    },
    {
      "src":"images/Department/mech/news/kit-mech-dept-news-27.jpg"
    }

  ]




  function createGroups(arr, numGroups) {
    const chunkSize = Math.ceil(arr.length / numGroups); 
    return new Array(chunkSize).fill('').map((_, i) =>{ 
      let start = i==0?i:i*6;
      let end = start+6
      return arr.slice(start,end)
    });
  }
  const ImageGroupList = createGroups(PressRelease,6)
 
    return (
        <section className="overflow-hidden text-gray-700">
  <div className="   py-2 mx-auto pt-20 sm:pt-0 pb-10 px-10 sm:px-4 sm:pb-5">
    {/* 3 */}
    {ImageGroupList.map((image,index)=>{
      return(<>
          <div className="flex flex-wrap sm:flex-col mt-1 -m-1 md:-m-2">
      {/* 2 */}
      <div className="flex flex-wrap w-1/2 sm:w-fit">
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={ image[0] ? image[0].src : "images/noImageBG.jpg" } />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={ image[1] ? image[1].src : "images/noImageBG.jpg" } />
        </div>
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={ image[2] ? image[2].src : "images/noImageBG.jpg" } />
        </div>
      </div>
      {/* 1 */}
      <div className="flex flex-wrap w-1/2 sm:w-fit">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={ image[3] ? image[3].src : "images/noImageBG.jpg" } /> 
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={ image[4] ? image[4].src : "images/noImageBG.jpg" } />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={ image[5] ? image[5].src : "images/noImageBG.jpg" } />
        </div>
      </div>
      {/* 2 */}
    </div>
      </>)
    })}
    {/* 3 */}
  </div>
</section>
    );
};

export default PressReleaseGrid