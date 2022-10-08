import Reat from "react"
import ImageGrid from "../../components/imageGrid";

const Gallery = (props) => {

    let SrcList = [];

        switch(parseInt(props.Tab)){
            case 0:
                SrcList = [
                    {
                      "src":"images/LifeAtKit/1.jpg"
                    },
                    {
                      "src":"images/LifeAtKit/1.jpg"
                    },
                    {
                      "src":"images/LifeAtKit/1.jpg"
                    },
                    {
                      "src":"images/LifeAtKit/1.jpg"
                    },
                    {
                      "src":"images/LifeAtKit/1.jpg"
                    },
                    {
                      "src":"images/LifeAtKit/1.jpg"
                    },
                    {
                      "src":"images/LifeAtKit/1.jpg"
                    },
                    {
                      "src":"images/LifeAtKit/1.jpg"
                    },
                    {
                      "src":"images/LifeAtKit/1.jpg"
                    }
                  ]
                break;
            case 1:
                SrcList = [
                    {
                      "src":"images/LifeAtKit/1.jpg"
                    },
                    {
                      "src":"images/LifeAtKit/1.jpg"
                    },
                    {
                      "src":"images/LifeAtKit/1.jpg"
                    },
                    {
                      "src":"images/LifeAtKit/1.jpg"
                    },
                  
                  ]
                break;
            case 2:
                SrcList = [
                    {
                      "src":"images/LifeAtKit/1.jpg"
                    },
                    
                  ]
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
              SrcList = [
                {
                  "src":"images/LifeAtKit/1.jpg"
                },
                
              ]
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                break;
            case 9:
                break;
            case 10:
                break;
            case 11:
                break;
            case 12:
                break;
            case 13:
                break;
            case 14:
                break;
            case 15:
                break;
        }
    

    return (
        <ImageGrid SrcList = {SrcList} />
    );
};

export default Gallery