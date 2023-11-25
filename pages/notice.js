import DefaultLayout from "../components/DefaultLayout"
import Admission2122 from "../sections/admissions/postgraduate/Admission2122"
import Footer from "../sections/home-page/Footer"
// ----
import React,{useState,useEffect,useMemo,useCallback,useRef} from "react"
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useRouter } from "next/router"
import axios from "axios";

const MyCompButton = (params) => {
  const ActionAlumniData = async (data)=>{
          await axios.delete(process.env.SERVER_API+"api/notices", {data})
          .then((rowData) => {
            params.setReloadChild(Math.random())
          })
    
  }
      return (<>
                  <div   className="flex items-center justify-center text-transparent">.
                    

                      <a title="Download" href={params.data.fileUrl} className="flex items-center justify-center gap-2 hover:cursor-pointer text-primary font-semibold" >
                        <svg className="w-6 h-6 text-primary hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg> Download
                      </a>
                      

                      {/* <div title="Delete" onClick={()=>ActionAlumniData({_id:params.data._id,accountStatus:"DELETE"})}  className={`flex items-center justify-center gap-2 hover:cursor-pointer text-red-700 font-semibold`}>
                          <svg className="w-6 h-6 text-red-700 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>Delete

                      </div> */}


                  </div>

      

      </>
      );
      };

const AdmissionUndergraduate = () => {
 

  const router = useRouter()

    
  const gridRef = useRef();
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

   // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
      {headerName:'File Name',field: 'fileName', filter: true},
      {headerName:'Title',field: 'title', filter: true},
      {headerName:'Description',field: 'description', filter: true},
      {headerName:'Date',field: 'date', filter: true, sortable: true, sort:"desc" },
      {headerName:'Action',field: 'accountStatus', filter: false, cellRenderer: MyCompButton}, 
  ]);
  
  const defaultColDef = useMemo(() => {
      return {
        // editable: true,
        enableRowGroup: true,
        enablePivot: true,
        enableValue: true,
        sortable: true,
        resizable: true,
        filter: true,
        flex: 1,
        minWidth: 100,
        filter: 'agTextColumnFilter',
        floatingFilter: true,
      };
    }, []);


     // Example load data from server
       
     useEffect(async () => {
          await axios.get(`${process.env.SERVER_API}/api/notices`)
          .then((rowData) => {
          setRowData(rowData.data)
          })
      }, []);

  const getRowStyle = params => {
      return {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        margin: '0.5rem 0',
        backgroundColor: 'rgba(249, 250, 254, 0.7)',
        
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '0.5rem',
      //   cursor: 'pointer'
      };
    };

    const containerStyle = useMemo(() => ({
      width: 'auto',
      height: '550px', // Fixed height in pixels
    }), []);
    
    const gridStyle = useMemo(() => ({
      height: '70vh', // Responsive height based on viewport height
      width: 'auto',
    }), []);


  return (
    <DefaultLayout>
      <div className="w-full bg-[#24346D]">
        <section className="flex flex-col h-[175px] items-center w-full relative">
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
            Notices
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <a href="/">
              <span className="hover:text-primary hover:cursor-pointer">
                {" "}
                Home
              </span>{" "}
            </a>
            <span className="">|</span> Notices
          </h6>
        </section>

        <section className="mt-16 pb-[130px] -mb-[200px] overflow-hidden bg-[#F8F7FC] max-w-screen">
          {/* <div className="flex items-center w-full ml-16 sm:ml-4">
            <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
            <div className="ml-3 md:ml-2 w-fit  text-center   text-[#24346D] text-4xl font-bold leading-[54px] text-[35.97px]  md:text-[22px] ">
              INSTITUTE CODE : 6267
            </div>
          </div> */}
          <section className="relative z-30 w-full mt-2 sm:mt-6 md:w-full pb-20 mx-auto md:mx-0 h-fit px-14 sm:px-4 sm:pb-10  ">
          <style >{`
                                .ag-theme-alpine {
                                    // --ag-header-height: 10px;
                                    --ag-header-foreground-color: black;
                                    --ag-header-background-color: rgba(240, 124, 0,0);
                                    // --ag-header-background-color: rgb(248, 247, 252);
                                    // --ag-header-cell-hover-background-color: rgb(248, 247, 252);
                                    // --ag-header-cell-moving-background-color: rgb(248, 247, 252);
                                  }
                                  
                                  
                                  .ag-theme-alpine {
                                        /* disable all borders */

                                        --ag-borders: none;

                                        /* then add back a border between rows */

                                        --ag-row-border-style: solid;
                                        --ag-row-border-width: 2px;
                                        --ag-row-border-color: rgba(240, 124, 0);
                                    }
                                    .ag-theme-alpine {
                                        // --ag-foreground-color: rgb(126, 46, 132);
                                        --ag-background-color: rgba(248, 247, 252, 0.5);
                                        // --ag-header-foreground-color: rgb(204, 245, 172);
                                        // --ag-header-background-color: rgb(209, 64, 129);
                                        // --ag-odd-row-background-color:  rgba(248, 247, 252, 0.5);
                                        // --ag-header-column-resize-handle-color: rgb(126, 46, 132);
                                      
                                        // --ag-font-size: 17px;
                                        // --ag-font-family: monospace;
                                      }

                                      .ag-theme-alpine {
                                        --ag-borders-input: solid 2px;
                                        --ag-input-border-color: rgba(240, 124, 0);
                                    }
                                  
                                  `}
                             </style>
                             
                              <div   className="my-8 sm:hidden ">
                                    <div  className="ag-theme-alpine h-[900px] md:h-[70vh]  ">
                                        
                                        <AgGridReact
                                            className="w-full h-full "
                                            ref={gridRef}

                                            getRowStyle={getRowStyle}

                                            defaultColDef={defaultColDef}
                                            rowData={rowData}
                                            columnDefs={columnDefs}
                                            pagination={true}
                                            // rowSelection={'single'}
                                            // onSelectionChanged={onSelectionChanged}

                                            >
                                              
                                              
                                        </AgGridReact>
                                    </div>
                              </div>
<div>
     {rowData?rowData.map((item,index)=>{
        return(<>
            <div className="bg-white text-[#24346D] shadow-lg divide-y mt-1 hidden sm:grid rounded-lg p-2  grid-rows-3">
              <div className="flex font-semibold items-center justify-between text-sm">
                <div className="text-primary flex gap-1">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                  </svg>
                  {item.date}
                </div> 
                <a title="Download" href={item.fileUrl} className="flex items-center justify-center gap-1 hover:cursor-pointer text-primary font-semibold" >
                        <svg className="w-5 h-5 text-primary hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg> Download
                </a>
              </div>
              <div className="text-sm font-semibold">{item.title} </div>
              <div className="text-xs p-1  ">{item.description}  </div>
              <div className="text-xs  font-semibold">File: {item.fileName}</div>
            </div>
           
        </>)
     }):null}                               
</div>
           
          </section>
        </section>

        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default AdmissionUndergraduate


