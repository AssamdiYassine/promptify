import * as React from "react";


 

export default function SearshBar(){

    const [ChangeStyle, setChangeStyle] = React.useState<boolean>(false);
 

    return <>
        <div
            style={{ width: ` calc(100% - 50%)   ` }}
            className="  "
        >

            <div>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium    text-black sr-only dark:text-white">Search</label>
                <div className="flex relative align-middle drop-shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className=" h-5 text-black hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="block   w-full p-4 pl-10 text-sm  	  " placeholder="Search Prompts" required style={{ backgroundColor: "#F1EFFF", borderRadius: "30px" }} />
                    <div className=" flex absolute right-3.5 my-3"
                        style={{ backgroundColor: "#E9E6FF", borderRadius: "30px" }}
                    >
                        {ChangeStyle ? <>

                            <button
                                className=' px-5 w-50 drop-shadow-lg text-sm	 mr-4 text-white bg-gray-700  hover:drop-shadow-md hover:bg-gray-900 '
                                onClick={() => setChangeStyle(true)}
                                style={{ borderRadius: "30px" }}
                            >Prompts</button>


                            <button
                                onClick={() => setChangeStyle(false)}
                                className=' pr-2.5 py-1 text-black text-md	 '
                                style={{ backgroundColor: "#E8E6FF", borderRadius: "30px" }}
                            >Collections</button>

                        </>
                            :
                            <>
                                <button
                                    onClick={() => setChangeStyle(true)}
                                    className=' pr-2.5 py-1 px-5  w-50 text-black text-md	 '
                                    style={{ backgroundColor: "#E8E6FF", borderRadius: "30px" }}
                                >Prompts</button>

                                <button
                                    onClick={() => setChangeStyle(false)}
                                    className=' px-5 w-50 drop-shadow-lg text-sm	  text-white bg-gray-700  hover:drop-shadow-md hover:bg-gray-900 '
                                    style={{ borderRadius: "30px" }}
                                >Collections</button>


                            </>
                        }
                    </div>

                </div>
            </div>
        </div>
    </>
}