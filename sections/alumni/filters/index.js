import React from "react";

const Filters = ({showFilter,setShowFilter,rowData,setRowData,alumniList})=>{

    const [filters, setFilters] = React.useState({
        name: "",
        email: "",
        branch: "",
        year: "",
        location: ""
      });


    const handleInput = (e)=>{
        const { name, value } = e.target;
        const filterName = name.substring(6);
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: value.toLowerCase()
          }));
    }
    const handleFilter = (e) => {
   
   
        // Apply the filter logic based on the updated filter values
        const filteredData = alumniList.filter((row) => {
          const isNameMatch = filters.name ? row.name.full_name.toLowerCase().includes(filters.name) : true;
          const isEmailMatch = filters.email ? row.email.toLowerCase().includes(filters.email) : true;
          const isBranchMatch = filters.branch ? row.branch.toLowerCase().includes(filters.branch) : true;
          const isYearMatch = filters.year ? row.pass_out_year.toLowerCase().includes(filters.year) : true;
          const isLocationMatch = filters.location ? row.location.toLowerCase().includes(filters.location) : true;
      
          return isNameMatch && isEmailMatch && isBranchMatch && isYearMatch && isLocationMatch;
        });
      
        // Update the filtered data in the state
        // console.log("filteredData",filteredData)
        setRowData(filteredData);
        setShowFilter(0)
      };
      

    const resetFilter = (e) => {
        document.getElementById('input-name').value = null
        document.getElementById('input-email').value = null
        document.getElementById('input-branch').value = null
        document.getElementById('input-year').value = null
        document.getElementById('input-location').value = null

        setRowData(alumniList);
    }

    return(
        <div id="drawer-navigation" className={` hidden sm:inline fixed top-0 left-0 z-50 w-64 h-screen p-4 overflow-y-auto transition-transform  bg-white dark:bg-gray-800 ${showFilter?"-translate-x-0":"-translate-x-full"} `} tabindex="-1" aria-labelledby="drawer-navigation-label">
    <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Filter Alumni List</h5>
    <button type="button" onClick={()=>{setShowFilter(0)}} data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Close menu</span>
    </button>
  <div className="py-4 overflow-y-auto">
      <ul className="space-y-2 font-medium">
      <li>
            <div className="flex justify-between p-4">
                <div className="flex gap-2" onClick={resetFilter}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg> reset 
                </div>
                <div className="flex gap-2 hover:bg-slate-300 rounded-xl" onClick={handleFilter}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>set

                </div>
            </div>
         </li>
         <li>
            <label for="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <div className="relative mb-3 py-2">
              <input type="text" id="input-name" name="input-name" onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" />
            </div>
         </li>
         <li>
            <label for="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <div className="relative mb-3 py-2">
              <input type="text" id="input-email" name="input-email" onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
            </div>
         </li>
         <li>
            <label for="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Branch</label>
            <div className="relative mb-3 py-2">
              <input type="text" id="input-branch" name="input-branch" onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="computer science and engineering" />
            </div>
         </li>
         <li>
            <label for="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
            <div className="relative mb-3 py-2">
              <input type="text" id="input-year" name="input-year" onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2019" />
            </div>
         </li>
         <li>
            <label for="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
            <div className="relative mb-3 py-2">
              <input type="text" id="input-location" name="input-location" onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="kolhapur" />
            </div>
         </li>
      </ul>
   </div>
</div>
    )
}

export default Filters