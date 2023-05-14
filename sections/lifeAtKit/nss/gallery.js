import Reat from "react"
import ImageGrid from "../../../components/imageGrid";

const Gallery = () => {

    let SrcList = [
     
      {
        "src":"images/LifeAtKit/nss/nss-activity-01.jpg"
      },
      {
        "src":"images/LifeAtKit/nss/nss-activity-02.jpg"
      },
      {
        "src":"images/LifeAtKit/nss/nss-activity-03.jpg"
      },
      {
        "src":"images/LifeAtKit/nss/nss-activity-04.jpg"
      },
      {
        "src":"images/LifeAtKit/nss/nss-activity-05.jpg"
      },
      {
        "src":"images/LifeAtKit/nss/nss-activity-06.jpg"
      },
      {
        "src":"images/LifeAtKit/nss/nss-activity-07.jpg"
      },
      {
        "src":"images/LifeAtKit/nss/nss-activity-08.jpg"
      },
      {
        "src":"images/LifeAtKit/nss/nss-activity-09.jpg"
      },
      {
        "src":"images/LifeAtKit/nss/nss-activity-10.jpg"
      },
      {
        "src":"images/LifeAtKit/nss/nss-activity-11.jpg"
      },
      {
        "src":"images/LifeAtKit/nss/nss-activity-12.jpg"
      },
      {
        "src":"images/LifeAtKit/nss/nss-activity-13.jpg"
      },
      {
        "src":"images/LifeAtKit/nss/nss-activity-14.jpg"
      },
      {
        "src":"images/LifeAtKit/nss/nss-activity-15.jpg"
      },
      {
        "src":"images/LifeAtKit/nss/nss-activity-16.jpg"
      },
      {
        "src":"images/LifeAtKit/nss/nss-activity-17.jpg"
      },
      {
        "src":"images/LifeAtKit/nss/nss-activity-18.jpg"
      },
      {
        "src":"images/LifeAtKit/nss/nss-activity-19.jpg"
      },
      {
        "src":"images/LifeAtKit/nss/nss-activity-20.jpg"
      },
     
     
    ]

    return (
        <>
          <div>
          <ImageGrid SrcList = {SrcList} />
          <a href="documents/lifeAtKit/kit-nss-activities-2020.pdf"  className=" hover:cursor-pointer mt-8 mb-8 text-xl  text-primary bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="fill-current w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>View All Activities</span>
          </a>
          <a href="documents/lifeAtKit/nss.pdf"  className=" hover:cursor-pointer mt-8 mb-8 text-xl  text-primary bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="fill-current w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Administrative Structure</span>
          </a>
          </div>
        </>
    );
};

export default Gallery