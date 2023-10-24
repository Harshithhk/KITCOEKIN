import React from 'react';

function SyllabusTab(props) {
    const Syllabus = [
        {
            "scheme":"2022",
            "academicLevel":"B.Tech",
            "academicYear":"First Year",
            "branch":"F.Y. B.Tech [Circuit Branches] (CSE /AIML /DS /ETC /ELE)",
            "structure":{
                "title":"Download Structure Here",
                "fileUrl":""
            },
            "syllabus":[
                {
                    "title":"F.Y. B.Tech [Circuit Branches] Syllabus",
                    "fileUrl":""
                }
            ]
        },
        {
            "scheme":"2022",
            "academicLevel":"B.Tech",
            "academicYear":"First Year",
            "branch":"Biotechnology Engineering",
            "structure":{
                "title":"Download Structure Here",
                "fileUrl":""
            },            
            "syllabus":[
                {
                    "title":"F.Y. B.Tech [Circuit Branches] Syllabus",
                    "fileUrl":""
                }
            ]        
        },
        {
            "scheme":"2023",
            "academicLevel":"B.Tech",
            "academicYear":"First Year",
            "branch":"Civil & Environmental Engg",
            "structure":{
                "title":"Download Structure Here",
                "fileUrl":""
            },            
            "syllabus":[
                {
                    "title":"F.Y. B.Tech [Circuit Branches] Syllabus",
                    "fileUrl":""
                },
                {
                    "title":"F.Y. B.Tech [Circuit Branches] Syllabus",
                    "fileUrl":""
                },
                {
                    "title":"F.Y. B.Tech [Circuit Branches] Syllabus",
                    "fileUrl":""
                }
            ]        
        }
    ]
    return (
        <section className="w-full bg-secondary py-20 flex flex-col items-center justify-center gap-16">
            <div className="   bg-white rounded-lg py-3 px-10 w-[80%] flex items-center justify-between md:flex-col md:gap-6 md:items-start  shadow-md" >
                <div className="flex items-center justify-start gap-6 md:flex-col md:items-start">
                                <div className="flex items-center gap-2  " >
                                    <label htmlFor="blood_group" className="text-base font-medium text-gray-900"> Scheme </label>
                                    <select id="blood_group" required name="blood_group"   autoComplete="blood-group" className="mt-1 block w-32 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                      {/* <option aria-readonly value="">Select</option> */}
                                      <option>2023</option>
                                      <option>2022</option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-2  " >
                                    <label htmlFor="blood_group" className="text-base font-medium text-gray-900"> Academic Level </label>
                                    <select id="blood_group" required name="blood_group"   autoComplete="blood-group" className="mt-1 block w-32 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                      {/* <option aria-readonly value="">Select</option> */}
                                      <option>B. Tech.</option>
                                      <option>M. Tech.</option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-2  " >
                                    <label htmlFor="blood_group" className="text-base font-medium text-gray-900"> Academic Year </label>
                                    <select id="blood_group" required name="blood_group"   autoComplete="blood-group" className="mt-1 block w-32 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                      {/* <option aria-readonly value="">Select</option> */}
                                      <option>First Year</option>
                                      <option>Second Year</option>
                                      <option>Third Year</option>
                                      <option>Final Year</option>
                                    </select>
                                </div>
                </div>
                <div title="Show All Year Syllabus" className="p-2 rounded-lg bg-secondary hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
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
                            Syllabus.map((item,index)=>{
                                return(
                                    <tr className=" ">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm font-medium text-gray-900">
                                                {item.branch}
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900 flex gap-1 hover:text-primary hover:cursor-pointer">
                                                {item.structure.title}
                                                <svg xmlns="http://www.w3.org/2000/svg" className="   h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap flex flex-col gap-2">
                                            {item.syllabus.map((syllabusItem,index)=>{
                                                return(
                                                    <div class="text-sm font-medium text-gray-900 flex gap-1 hover:text-primary hover:cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                                        </svg>
                                                        {syllabusItem.title}
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