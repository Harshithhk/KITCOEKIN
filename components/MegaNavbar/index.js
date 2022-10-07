import React from "react";

const MegaNavbar = (props) => {



    return(<>
            <section>
                <div className={`grid grid-cols-${props.MenuList.length} p-6 divide-x `}>
                    {
                        props.MenuList.map((menuItem,menuIndex)=>{

                            return(<>
                                <div className="flex flex-col">
                                    <div className="mt-6 sm:mt-0 sm:ml-4 mb-2 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit ">
                                    {menuItem.title}
                                    </div>  
                                    <div className="p-4 px-2 ">
                                    
                                    
                                   
                                        {menuItem.subMenu1.map((subMenu1Item,subMenu1Index)=>{

                                           
                                                return(<>
                                                     <div className={` ${subMenu1Item.subMenu2.length > 1?`mt-2 mb-2`:null} sm:mt-0 sm:ml-4  text-[#24346D] text-2xl   sm:text-2xl font-semibold flex h-fit`}>
                                                            {subMenu1Item.title}
                                                     </div> 
                                                     <div>
                                                            {
                                                                 subMenu1Item.subMenu2.map((subMenu2Item,subMenu2Index) =>{
                                                                    return(<>
                                                                       
                                                                        <div className=" sm:mt-0 sm:ml-4 text-[#24346D] text-lg sm:text-2xl font-normal flex h-fit hover:bg-slate-50 hover:cursor-pointer ">
                                                                            <a href={subMenu1Item.links[subMenu2Index]}>{subMenu2Item}</a>
                                                                        </div> 
                                                                    </>)
                                                                })
                                                            }
                                                    </div>
                                                </>)
                                               
                                                
                                           
                                            
                                        })}
                                    </div>       
                                </div>
                            </>)

                        })
                    }
                </div>
          </section>
    </>)
};

export default MegaNavbar;