import React from "react";

const ContactUsForm = () => {

  const cardsData = [
    {
      name: "Dr. V. V. Karjinni",
      mobile: ["7769001199", "9168781199"],
      email: "info@kitcoek.in",
      role: "Executive Director",
    },
    {
      name: "Dr. Mohan. B. Vanarotti",
      mobile: ["9902544599"],
      email: "vanarotti.mohan@kitcoek.in",
      role: "Director",
    },
    {
      name: "Dr. Mahesh B. Shinde",
      mobile: ["7030861199"],
      email: "admissions@kitcoek.in",
      role: "Central Admission Coordinator",
    },
  ];


    return (
        <>


<form action="#" method="POST">
<div className="mt-10 sm:mt-0  pt-[100px]">
  <div className="grid grid-cols-3">
    <div className="sm:col-span-3 pb-2">
      <div className="px-4 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">KIT's College of Engineering Kolhapur</h3>
        <p className="mt-1 text-sm text-gray-600">Please feel free to contact us by filling the form below</p>
        
          {/* -- */}


          <div className="flex flex-wrap  sm:hidden justify-center gap-5 p-4 text-[#24346D]">
      {cardsData.map((card, index) => (
       <div key={index} className="bg-white shadow-md rounded-md p-4 w-80">
       <h2 className="text-xl font-bold mb-2 text-[#F07C00]">{card.name}</h2>
       <p className="mb-2">{card.role}</p>
       <ul className="list-disc pl-5 mb-4 font-semibold">
         {card.mobile.map((number, index) => (
           <li key={index}>{number}</li>
         ))}
       </ul>
       <p>{card.email}</p>
     </div>
      ))}
    </div>

          {/* -- */}
      </div>
    </div>
    <div className="mt-5 pt-6 sm:mt-0 col-span-2 sm:col-span-3">
      
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6 py-4">
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

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" required name="city" id="city" autocomplete="address-level2" className="border  p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              
            </div>
            <div>
              <label for="about" className="contents text-base font-medium text-gray-900 pt-2"> Message [Queries if any] </label>
              <div className="mt-1">
                <textarea id="about" name="about" rows="3" className=" border p-1 shadow-sm focus:ring-indigo-500  focus:border-indigo-500 mt-1 block w-full sm:text-sm  border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
              </div>
              <p className="mt-2 text-sm text-gray-500">Brief description for your requirement. URLs are hyperlinked.</p>
            </div>
          </div>
          
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send Your Message</button>
          </div>
        </div>
      
    </div>
  </div>
</div>

<div className="hidden sm:block" aria-hidden="true">
  <div className="py-5">
    <div className="border-t border-gray-200"></div>
  </div>
</div>


</form>


</>
    )
}

export default ContactUsForm