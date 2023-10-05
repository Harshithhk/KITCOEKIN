import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/alumni/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"
import React,{useState,useEffect,useMemo,useCallback,useRef} from "react"
// import { createRoot } from 'react-dom/client';
import { useRouter } from 'next/router';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Filters from "../sections/alumni/filters";



  const MyComp = params => {
    return (
    <span className="flex items-center float-left" >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 rounded-full text-[#24346D]">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                        </svg>    {params.value}
    </span>
    );
    };


const CseEngineeringMous = (props) => {

    const router = useRouter();

    const [modalToggle, setModalToggle] = React.useState("");
    const [showFilter, setShowFilter] = React.useState(0);
    const [alumniList, setAlumniList] = React.useState(null);

 

    
    const gridRef = useRef();
    const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

 // Each Column Definition results in one Column.
 const [columnDefs, setColumnDefs] = useState([
   {headerName:'Name',field: 'name.full_name', filter: true, cellRenderer:MyComp,},
   {field: 'email', filter: true},
   {field: 'branch', filter: true,enableRowGroup: true},
   {headerName:'Batch Year',field: 'pass_out_year', filter: true},
   {headerName:'Location',field: 'current_address.display_name', filter: true}
 ]);

 const onCellValueChanged = (params) => {
  const { data, colDef, newValue } = params;
  if (colDef.field === 'columnNameToUpdate') {
    const updatedRowData = rowData.map((row) => {
      if (row.id === data.id) {
        return { ...row, [colDef.field]: newValue };
      }
      return row;
    });
    setRowData(updatedRowData);
  }
};

 const gridOptions = {
    floatingFilter: false,
   
  }

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

 // Example of consuming Grid Event
 const cellClickedListener = useCallback( event => {
  //  console.log('cellClicked', event);
 }, []);

 // Example load data from server
 useEffect(() => {
   fetch( `${process.env.SERVER_API}/api/alumni/`)
   .then(result => result.json())
   .then(rowData => {
    rowData.map(item=>item.name.full_name = item.name.first_name + " " + item.name.middle_name + " "+ item.name.last_name)
      setRowData(rowData)
      setAlumniList(rowData)
    })
 }, []);

 
 const getRowStyle = params => {
    return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      margin: '0.5rem 0',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      borderRadius: '0.5rem',
      cursor: 'pointer'
    };
  };

  const containerStyle = useMemo(() => ({ width: 'auto' , height: 800 }), []);
  const gridStyle = useMemo(() => ({ height: 900, width:'auto' }), []);
  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    const tempData = selectedRows[0];
    const data = {
      "fullName" : tempData.name.first_name +" "+  tempData.name.middle_name +" "+ tempData.name.last_name,
      "current_address": tempData.current_address.display_name,
      "date_of_birth":tempData.date_of_birth,
      "photoUrl":tempData.photoUrl,
      "pass_out_year":tempData.pass_out_year,
      "branch":tempData.branch,
      "company":tempData.company,
      "designation":tempData.designation,
      "email":tempData.email,
      "bytes":tempData.bytes,
      "id":tempData._id

    } // The data you want to pass to the next page
    const queryParams = new URLSearchParams(data).toString(); // Convert data to query parameters
    
    router.push({
      pathname: '/alumni-list-profile',
      query: queryParams,
    });
  }, []);

  const handleClick =  (selectedRows) => {
    
    const tempData = selectedRows;
    const data = {
      "fullName" : tempData.name.first_name +" "+  tempData.name.middle_name +" "+ tempData.name.last_name,
      "current_address": tempData.current_address.display_name,
      "date_of_birth":tempData.date_of_birth,
      "photoUrl":tempData.photoUrl,
      "pass_out_year":tempData.pass_out_year,
      "branch":tempData.branch,
      "company":tempData.company,
      "designation":tempData.designation,
      "email":tempData.email,
      "bytes":tempData.bytes,
      "id":tempData._id

    } // The data you want to pass to the next page
    const queryParams = new URLSearchParams(data).toString(); // Convert data to query parameters
    
    router.push({
      pathname: '/alumni-list-profile',
      query: queryParams,
    });
  };

    return (
        <DefaultLayout modalToggle = {modalToggle} setModalToggle = {setModalToggle}>
            <div  className="w-full ">
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
                         Alumni List
                    </h1>
                    <br></br>
                    <br></br>
                    <h6
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
                    >
                    <a href="alumni">
            <span className="hover:text-primary hover:cursor-pointer">
              {" "}
              
              Alumni Home
            </span>{" "}</a> <span className=" ">|</span> Alumni List

                    </h6>
                </section>
                {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}

                <section className="overflow-hidden max-w-auto mx-auto md:mx-0  bg-secondary">



                <div className="grid grid-cols-3  sm:px-0 px-2 sm:flex sm:flex-col pb-20 mt-6">

                <section className="col-start-1  col-end-3 sm:mr-0 sm:ml-0 sm:mt-6 sm:px-4 sm:pb-10  pb-20 mx-10  h-fit   ">
                            <div className="mt-6 sm:mt-0 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                               <div className="flex justify-between w-full">
                               ALUMNI LIST 
                            
                            <div  onClick={()=>{setShowFilter(!showFilter)}} className="hidden hover:bg-slate-200 rounded-xl px-2 py-1 sm:flex items-center text-sm font-medium mr-4">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6  text-[#24346D]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                              </svg>Filters
                            </div>
                               </div>
                            
                            </div>
                            {/* -------------- */}

                            <div className="rounded-xl divide-y-2 bg-white hidden sm:block p-4 sm:p-2">
                                      {rowData?rowData.map((item,index)=>{
                                          return(<>
                                        
                                          <div className="    px-4 pt-2">
                                              <div className="w-full relative  flex sm:flex-col text-sm pb-2 text-left sm:items-start items-center justify-evenly  text-gray-500  dark:text-gray-400">
                                                          <div className="flex space-x-2 sm:p-2 ">
                                                              <div className="flex-shrink-0">
                                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 rounded-full text-[#24346D]">
                                                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                                                              </svg>                    </div>
                                                              <div className="flex-1 min-w-0">
                                                                  <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                                                                  {item.name.full_name}
                                                                  </p>
                                                                  <p className="text-sm text-gray-500  truncate dark:text-gray-400">
                                                                  {item.email}
                                                                  </p>
                                                              </div>
                                                          </div>
                                                          
                                                          <div className="px-4 py-4 sm:py-[0.6px]  ">
                                                          <span className="font-bold"> Branch: </span>{item.branch} 
                                                          </div>
                                                         
                                                          <div className="px-4 py-4 sm:py-[0.6px]  ">
                                                          <span className="font-bold"> Batch Year: </span> {item.pass_out_year}
                                                          </div>
                                                          <div className="px-4 py-4 sm:py-[0.6px]  ">
                                                          <span className="font-bold"> Location: </span>{item.current_address.display_name} 
                                                          </div>
                                                          
                                                          <div onClick={()=>{handleClick(item)}} className="text-primary float-right text-right  right-0 hover:text-orange-800 hover:cursor-pointer px-4 py-4 sm:py-[0.6px]  max-w-[250px]">
                                                              Show More
                                                          </div>
                                                        
                                              </div>
                                            
                                          </div>

                                          </>)
                                      }):null}
                            </div>
                            <style >{`
                                .ag-theme-alpine {
                                    // --ag-header-height: 30px;
                                    --ag-header-foreground-color: black;
                                    --ag-header-background-color: rgb(248, 247, 252);
                                    // --ag-header-cell-hover-background-color: rgb(248, 247, 252);
                                    // --ag-header-cell-moving-background-color: rgb(248, 247, 252);
                                  }
                                  
                                  
                                  .ag-theme-alpine {
                                        /* disable all borders */

                                        --ag-borders: none;

                                        /* then add back a border between rows */

                                        // --ag-row-border-style: dashed;
                                        // --ag-row-border-width: 5px;
                                        // --ag-row-border-color: rgb(150, 150, 200);
                                    }
                                    .ag-theme-alpine {
                                        // --ag-foreground-color: rgb(126, 46, 132);
                                        --ag-background-color: rgb(248, 247, 252);
                                        // --ag-header-foreground-color: rgb(204, 245, 172);
                                        // --ag-header-background-color: rgb(209, 64, 129);
                                        // --ag-odd-row-background-color: rgb(0, 0, 0, 0.03);
                                        // --ag-header-column-resize-handle-color: rgb(126, 46, 132);
                                      
                                        // --ag-font-size: 17px;
                                        // --ag-font-family: monospace;
                                      }

                                      .ag-theme-alpine {
                                        --ag-borders-input: solid 2px;
                                        --ag-input-border-color: orange;
                                    }
                                  
                                  `}
                             </style>
                              <div   className="my-8 sm:hidden ">
                                    <div style={gridStyle} className="ag-theme-alpine h-[900px] -mb-20 ">
                                        <AgGridReact
                                            className="w-full h-full hover:cursor-pointer"
                                            ref={gridRef}

                                            getRowStyle={getRowStyle}

                                            defaultColDef={defaultColDef}
                                            rowData={rowData}
                                            columnDefs={columnDefs}
                                            pagination={true}
                                            rowSelection={'single'}
                                            onSelectionChanged={onSelectionChanged}

                                            >
                                              
                                              
                                        </AgGridReact>
                                    </div>
                              </div>
               
                              <Filters showFilter = {showFilter} setShowFilter = {setShowFilter} rowData ={rowData} setRowData ={setRowData} alumniList ={alumniList} />
    
                  </section>


                        {/* -------------col2--------------- */}
                        <div className="flex flex-col justify-start sm:mx-1"><QuickLinksCard setModalToggle = {setModalToggle}/>  </div>


                    </div>
                </section>
                <Footer />
            </div>
        </DefaultLayout>
    )
}
export default CseEngineeringMous
