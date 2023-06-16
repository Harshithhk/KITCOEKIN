import React from "react";

const AdmissionForm = () => {
    return (
        <>


<form action="#" method="POST">
<div className="mt-10 sm:mt-0  pt-[100px]">
  <div className="grid grid-cols-3">
    <div className="sm:col-span-2 pb-2">
      <div className="px-4 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
        <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
      </div>
    </div>
    <div className="mt-5 sm:mt-0 col-span-2 sm:col-span-3">
      
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label for="first-name"  className="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" required name="first-name" id="first-name" autocomplete="given-name" className=" border p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" className=" border p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>

              <div className="col-span-6 ">
                <label for="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" required name="email-address" id="email-address" autocomplete="email" className=" border p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>

              <div className="col-span-6">
                <label  className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input type="number" name="mobileNumber" required id="mobileNumber" autocomplete="mobileNumber" className=" border p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>

         
              <div className="col-span-6">
                <label for="taluka" className="block text-sm font-medium text-gray-700">Taluka</label>
                <input type="text" name="taluka" required id="taluka" autocomplete="taluka" className=" border p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>

              <div className="col-span-6">
                <label for="disctrict"  className="block text-sm font-medium text-gray-700">District</label>
                <input type="text" required name="disctrict" id="disctrict" autocomplete="disctrict" className=" border p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" required name="city" id="city" autocomplete="address-level2" className=" border p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="region" className="block text-sm font-medium text-gray-700">State / Province</label>
                <input type="text" required name="region" id="region" autocomplete="address-level1" className=" border p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md " />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="postal-code"  className="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                <input type="text" required name="postal-code" id="postal-code" autocomplete="postal-code" className=" border p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
          </div>
          {/* <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
          </div> */}
        </div>
      
    </div>
  </div>
</div>

<div className="hidden sm:block" aria-hidden="true">
  <div className="py-5">
    <div className="border-t border-gray-200"></div>
  </div>
</div>

<div className="mt-10 sm:mt-0">
  <div className="grid grid-cols-3">
    <div className="sm:col-span-2 pb-2">
      <div className="px-4 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Academic Information</h3>
        <p className="mt-1 text-sm text-gray-600">Decide which course you'd like to apply for.</p>
      </div>
    </div>
    <div className="mt-5 sm:mt-0 col-span-2 sm:col-span-3">
     
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="col-span-6 sm:col-span-3">
                <label for="country" className="text-base font-medium text-gray-900">Interested Branch </label>
                <select id="country" required name="country" autocomplete="country-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Biotechnology Engineering</option>
                  <option>Civil Engineering</option>
                  <option>Computer Sci. & Engineering</option>
                  <option>Computer Science & Business Systems</option>
                  <option>Computer Sci. & Engg. [Data Science]</option>
                  <option>Computer Sci. & Engg. [AI & ML]</option>
                  <option>Electrical Engineering</option>
                  <option>Electronics & Telecomm Engineering</option>
                  <option>Civil & Environmental Engineering</option>
                  <option>Mechanical Engineering</option>
                </select>
              </div>
  
            <fieldset>
              <legend className="contents text-base font-medium text-gray-900">Admission Level</legend>
              <p className="text-sm text-gray-500">These are admission levels to apply.</p>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <input id="push-everything" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700"> First Year B. Tech </label>
                </div>
                <div className="flex items-center">
                  <input id="push-email" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700"> Direct Second Year </label>
                </div>
                <div className="flex items-center">
                  <input id="push-nothing" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label for="push-nothing" className="ml-3 block text-sm font-medium text-gray-700"> F. Y. M. Tech </label>
                </div>
              </div>
            </fieldset>

            <div>
              <label for="about" className="contents text-base font-medium text-gray-900"> Message [Queries if any] </label>
              <div className="mt-1">
                <textarea id="about" name="about" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
              </div>
              <p className="mt-2 text-sm text-gray-500">Brief description for your requirement. URLs are hyperlinked.</p>
            </div>
          </div>
        
        </div>
    
    </div>
   
  </div>
  <div className="px-4 mt-8 py-3 bg-gray-50 text-right sm:px-6">
  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#24346D] hover:bg-[#24346D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#24346D]">Send Your Message</button>
          </div>
</div>
</form>


</>
    )
}

export default AdmissionForm