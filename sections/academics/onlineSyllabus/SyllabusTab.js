import React, { useEffect } from 'react';



function SyllabusTab(props) {
    const [syllabus, setSyllabus] = React.useState(props.syllabus)
    const [syllabusScheme, setSyllabusScheme] = React.useState([...new Set(props.syllabus.map(item => item.scheme))])

    const [filters, setFilters] = React.useState({
        scheme: "2023",
        academicLevel: "B.Tech.",
        academicYear:"First Year",
      });

     

    const handleInput = (e)=>{
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
          }));
    }

    useEffect((e) => {
        // Apply the filter logic based on the updated filter values
        const filteredData = props.syllabus.filter((item) => {
          const isSchemeMatch = filters.scheme ? item.scheme.includes(filters.scheme) : true;
          const isAcademicLevelMatch = filters.academicLevel ? item.academicLevel.includes(filters.academicLevel) : true;
          const isAcademicYearMatch = filters.academicYear ? item.academicYear.includes(filters.academicYear) : true;
          
          return isSchemeMatch && isAcademicLevelMatch && isAcademicYearMatch;
        });
      
        // Update the filtered data in the state
        // console.log("filteredData",filteredData)
        setSyllabus(filteredData);
      },[filters])
    return (
        <section className="w-full bg-secondary py-20 flex flex-col items-center justify-center gap-16">
            <div className="   bg-white rounded-lg py-3 px-10 w-[80%] flex items-center justify-between md:flex-col md:gap-6 md:items-start  shadow-md" >
                <div className="flex items-center justify-start gap-6 md:flex-col md:items-start">
                                <div className="flex items-center gap-2  " >
                                    <label htmlFor="blood_group" className="text-base font-medium text-gray-900"> Scheme </label>
                                    <select id="scheme" required name="scheme" value={filters.scheme} onChange={(e)=>{handleInput(e)}}  autoComplete="blood-group" className="mt-1 block w-32 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                      <option aria-readonly value="">Select</option>
                                      {
                                        syllabusScheme.map((scheme,index)=>{
                                            return(<option key={index}>{scheme}</option>)
                                        })
                                      }
                                    </select>
                                </div>
                                <div className="flex items-center gap-2  " >
                                    <label htmlFor="blood_group" className="text-base font-medium text-gray-900"> Academic Level </label>
                                    <select id="academicLevel" required name="academicLevel" value={filters.academicLevel} onChange={(e)=>{handleInput(e)}}  autoComplete="blood-group" className="mt-1 block w-32 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                      <option aria-readonly value="">Select</option>
                                      <option>B.Tech.</option>
                                      <option>M.Tech.</option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-2  " >
                                    <label htmlFor="blood_group" className="text-base font-medium text-gray-900"> Academic Year </label>
                                    <select id="academicYear" required name="academicYear" value={filters.academicYear} onChange={(e)=>{handleInput(e)}}  autoComplete="blood-group" className="mt-1 block w-32 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                      <option aria-readonly value="">Select</option>
                                      <option>First Year</option>
                                      <option>Second Year</option>
                                      <option>Third Year</option>
                                      <option>Final Year</option>
                                    </select>
                                </div>
                </div>
                <div title="Show All Year Syllabus" className="p-2 rounded-lg bg-secondary hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        onClick={()=>{setFilters({
                            scheme: "2023",
                            academicLevel: "B.Tech.",
                            academicYear:"First Year",
                        })}} 
                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:cursor-pointer hover:rotate-45">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </div>         
            </div>
            <div className="w-[80%]">
                <table class="min-w-full   divide-y divide-gray-200 overflow-x-auto ">
                    <thead class="">
                        <tr className=" ">
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                                Branch
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                                Structure
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                                Syllabus
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody class="bg-white  divide-y-[1px] divide-orange-300 ">
                        {
                            syllabus.map((item,index)=>{
                                return(
                                    <tr className=" ">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm font-medium text-gray-900">
                                                {item.branch}
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap ">
                                            {item.structure.map((structureItem,index)=>{
                                                return(
                                                    <div class="text-sm  text-gray-900 flex gap-1 hover:text-primary hover:cursor-pointer">
                                                       
                                                        {structureItem.structureTitle}
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="   h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                        </svg>
                                                    </div>
                                                )
                                            })} 
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap ">
                                            {item.syllabus.map((syllabusItem,index)=>{
                                                return(
                                                    <div class="text-sm font-medium text-gray-900 flex gap-1 hover:text-primary hover:cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                                        </svg>
                                                        {syllabusItem.syllabusTitle}
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="   h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                        </svg>
                                                    </div>
                                                )
                                            })} 
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        

                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default SyllabusTab;