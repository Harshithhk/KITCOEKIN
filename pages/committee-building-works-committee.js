import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const BuildingCommittee = () => {
  let Committee = [
    {
      "Sr.No": 1,
      "Name & Address": "Shri. Sunil S. Kulkarni\n\"Kulashree\" 210/33, E Ward,Rukmininagar,KOLHAPUR - 416 005\nMob. No. 9823171542\nEmail ID - syco_kolhapur@yahoo.com",
      "Designation": "Chairman",
      "Affiliation": "Director, S. Yashwant & Company Engineers Pvt. Ltd., Kolhapur."
    },
    {
      "Sr.No": 2,
      "Name & Address": "Shri. Sajid M. Hudli\n\"Ashiyana\",1954, Rajarampuri,11th Lane, KOLHAPUR – 416008\nMob. No. 9822351371\nEmail ID - sajid_hudli@yahoo.com",
      "Designation": "Vice Chairman",
      "Affiliation": "Partner, M.S. Hudli & Sons,Kolhapur,Proprietor, SAPPHIRE Enterprises, Kolhapur."
    },
    {
      "Sr.No": 3,
      "Name & Address": "Shri. Dipak Laxman Chougule\n36, Hindurao Ghatage colony,KOLHAPUR - 416 006.\nMob. No 9326677999\nEmail ID - dipakchougule72@gmail.com",
      "Designation": "Secretary",
      "Affiliation": "Managing Partner,Bharat Udyog, Kolhapur."
    },
    {
      "Sr.No": 4,
      "Name & Address": "Shri. Bharat D. Patil\n\"Kusum\" 209 A/73/9/2/3,Karande Mala, Tarabai Park,Behind Eagle Pipe Factory,KOLHAPUR - 416 003\nMob. No. 9923147700\nEmail ID - bharat@deccanequipments.com",
      "Designation": "Trustee",
      "Affiliation": "Chief Managing Director,Deccan Farm Equipment Pvt. Ltd.Annapurna Machinen Fabrics Pvt.Ltd., Kolhapur."
    },
    {
      "Sr.No": 5,
      "Name & Address": "Shri. Sachin Menon\n“AUM” Menon Enclave – II, R.S.No.262, E Ward, Laxminarayan Nagar,Kasaba Karveer,KOLHAPUR – 416 005.\nMob. No. 9325058000\nEmail ID - oad@menonpistons.com",
      "Designation": "Trustee",
      "Affiliation": "Managing Director,Menon Pistons Ltd., Kolhapur;Director, Menon Bearings Ltd.;Menon Alkop Ltd.;Director, Menon Piston Rings Ltd.,Kolhapur."
    },
    {
      "Sr.No": 6,
      "Name & Address": "Mrs. Shilpaja P. Kangutkar (Pungaonkar) Plot No. 16, Torna Banglow,Adarshanagar, Pune-satara Road PUNE – 37\nMob. No. 9822636010\nEmail ID - shilpaja.kangutkar@yahoo.com",
      "Designation": "Trustee",
      "Affiliation": "Proprietor,Gruhshilp Architect & Engineers,Kolhapur."
    },
    {
      "Sr.No": 7,
      "Name & Address": "Shri. Dilip C. Joshi\nVrundawan Banglow, Shahu colony,Karande Mala, Tarabai Park,KOLHAPUR\nMob. No. 9226075677\nEmail ID - synerbuild@gmail.com",
      "Designation": "Trustee",
      "Affiliation": "Proprietor,Syner Build System, Kolhapur."
    }
   ]
  return (
    <DefaultLayout>
      <div className="w-full ">
        <section className="flex flex-col h-[250px] items-center w-full relative">
          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-24 h-24 absolute top-0 left-[25%] z-10 sm:w-16 sm:h-16 sm:top-[5%]"
            alt=""
          />

          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-32 h-32 absolute top-[10%] left-[5%] z-10 sm:w-24 sm:h-24 sm:top-[35%]"
            alt=""
          />

          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-40 h-40 absolute top-[10%] left-[60%] z-10 sm:w-20 sm:h-20 sm:top-[17%]"
            alt=""
          />
          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-28 h-28 absolute top-[12.5%] left-[85%] z-10 sm:hidden"
            alt=""
          />
          <div className="absolute w-full h-[250px] top-0 left-0 bg-[#24346D] z-0"></div>
          <h1
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] mt-14 sm:text-xl  text-4xl font-bold text-center text-white z-20"
          >
            Building & Works Committee
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Building & Works Committee 
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        
        <section className=" max-w-fit mx-auto md:mx-0  bg-secondary">
          <section className="relative z-30  mt-2 sm:mt-6 md:w-full pb-20 mx-auto md:mx-0 h-fit px-14 sm:px-4 sm:pb-10  ">
          <div className="sm:hidden grid grid-cols-4 sm:grid-cols-7 items-center text-slate-500 justify-items-center mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
              <div className=" sm:hidden">Sr.No.</div>
              <div className=" ">Name & Address</div>
              <div className=" ">Designation</div>
              <div className=" ">Affiliation</div>
          
          </div> 

            {Committee.map((item, index) => {
               return (
                <>
                <div className="sm:hidden grid grid-cols-4 sm:grid-cols-7 items-center justify-items-center sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                    <div className=" sm:hidden ">{item["Sr.No"]}</div>
                    <div className="">{item["Name & Address"]}</div>
                    <div className="">{item["Designation"]}</div>
                    <div className="">{item["Affiliation"]}</div>
                    
                </div>
                <div className=" sm:grid 3xl:hidden 2xl:hidden gap-y-2 divide-y grid-rows-1 items-center text-left  w-full h-fit overflow-x-hidden sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                 
                  <div className="grid grid-cols-1 gap-y-2">
                    <div className="text-slate-400">Sr.No.</div>   
                    <div className="">{item["Sr.No"]}</div>      
                  </div>
                  <div className="grid grid-cols-1 gap-y-2">
                  <div className=" text-slate-400">Name & Address</div>
                    <div className="">{item["Name & Address"]}</div>      
                  </div>
                  <div className="grid grid-cols-1 gap-y-2">
                  <div className=" text-slate-400">Designation</div>  
                    <div className="">{item["Designation"]}</div>      
                  </div>
                  <div className="grid grid-cols-1 gap-y-2">
                  <div className=" text-slate-400">Affiliation</div> 
                    <div className="">{item["Affiliation"]}</div>      
                  </div>
                
                </div>
                </>
              )
            })}
          </section>
        </section>
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default BuildingCommittee
