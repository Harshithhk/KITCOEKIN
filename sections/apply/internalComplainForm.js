import React from "react";

const InternalComplainForm = () => {
    return (
        <>


<form action="#" method="POST" className="mt-20 mb-20">


<div className="hidden sm:block " aria-hidden="true">
  <div className="py-5">
    <div className="border-t border-gray-200"></div>
  </div>
</div>

<div className="mt-10 sm:mt-0">
  <div className="grid grid-cols-3">
    <div className="sm:col-span-2 pb-2">
      <div className="px-4 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">REGISTER YOUR COMPLAINT</h3>
        <p className="mt-1 text-sm text-gray-600">Fill in the form.</p>
      </div>
    </div>
    <div className="mt-5 sm:mt-0 col-span-2 sm:col-span-3">
     
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="col-span-6 sm:col-span-3">
                <label for="last-name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label for="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" required name="email-address" id="email-address" autocomplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              <div className="col-span-6">
                <label  className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input type="number" name="mobileNumber" required id="mobileNumber" autocomplete="mobileNumber" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
       
  
            <fieldset>
              <legend className="contents text-base font-medium text-gray-900">Category *</legend>
              <p className="text-sm text-gray-500"></p>
              <div className="mt-4 md:space-y-4 2xl:space-y-0 grid 2xl:grid-cols-6 md:grid-cols-1 ">
                <div className="flex items-center">
                  <input id="push-everything" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700"> Open </label>
                </div>
                <div className="flex items-center">
                  <input id="push-email" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700"> SC </label>
                </div>
                <div className="flex items-center">
                  <input id="push-nothing" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label for="push-nothing" className="ml-3 block text-sm font-medium text-gray-700"> ST </label>
                </div>
                <div className="flex items-center">
                  <input id="push-nothing" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label for="push-nothing" className="ml-3 block text-sm font-medium text-gray-700"> NT </label>
                </div>
                <div className="flex items-center">
                  <input id="push-nothing" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label for="push-nothing" className="ml-3 block text-sm font-medium text-gray-700"> OBC </label>
                </div>
                <div className="flex items-center">
                  <input id="push-nothing" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label for="push-nothing" className="ml-3 block text-sm font-medium text-gray-700"> Other </label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="contents text-base font-medium text-gray-900">Religion *</legend>
              <p className="text-sm text-gray-500"></p>
              <div className="mt-4 md:space-y-4 2xl:space-y-0 grid 2xl:grid-cols-4 md:grid-cols-1 ">
                <div className="flex items-center">
                  <input id="push-everything" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700"> Hindu </label>
                </div>
                <div className="flex items-center">
                  <input id="push-email" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700"> Muslim    </label>
                </div>
                <div className="flex items-center">
                  <input id="push-nothing" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label for="push-nothing" className="ml-3 block text-sm font-medium text-gray-700"> Buddha    </label>
                </div>
             
                <div className="flex items-center">
                  <input id="push-nothing" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label for="push-nothing" className="ml-3 block text-sm font-medium text-gray-700"> Other </label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="contents text-base font-medium text-gray-900">Role *</legend>
              <p className="text-sm text-gray-500"></p>
              <div className="mt-4 md:space-y-4 2xl:space-y-0 grid 2xl:grid-cols-6 md:grid-cols-1 ">
                <div className="flex items-center">
                  <input id="push-everything" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700"> Student     </label>
                </div>
                <div className="flex items-center">
                  <input id="push-email" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700"> Staff    </label>
                </div>
                <div className="flex items-center">
                  <input id="push-nothing" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label for="push-nothing" className="ml-3 block text-sm font-medium text-gray-700"> Faculty </label>
                </div>
             
              </div>
            </fieldset>
            <fieldset>
              <legend className="contents text-base font-medium text-gray-900">Designation (Only For Staff)</legend>
              <p className="text-sm text-gray-500"></p>
              <div className="mt-4 md:space-y-4 2xl:space-y-0 grid 2xl:grid-cols-6 md:grid-cols-1 ">
                <div className="flex items-center">
                  <input id="push-everything" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700"> Teaching </label>
                </div>
                <div className="flex items-center">
                  <input id="push-email" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700"> Non Teaching </label>
                </div>
                <div className="flex items-center">
                  <input id="push-nothing" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label for="push-nothing" className="ml-3 block text-sm font-medium text-gray-700"> ST </label>
                </div>
               
              </div>
            </fieldset>
            <div>
              <label for="about" className="contents text-base font-medium text-gray-900"> Complaint Description * </label>
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

export default InternalComplainForm