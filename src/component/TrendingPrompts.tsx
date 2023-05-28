import * as React from "react";
import { toAbsoluteUrl  } from '../helpers'

import SVG from "react-inlinesvg";
interface dataTopics {
    id: number;
    title: string;
    fullName: string;
    like: number;
    img: string;
    tags: string[];

}

export default function TrendingPrompts() {


    const [prompts] = React.useState<dataTopics[]>([
        {
            "id": 1,
            "img": '/CartImage.svg',
            "title": "UX/UI Designer v2.1 - Rachel Johnson",
            "fullName": "John Bananus",
            "like": 256,
            "tags": [

                "Writer", "Books", "Drama", "Story"
            ]
        },
        {
            "id": 2,
            "img": '/CartImage.svg',
            "title": "UX/UI Designer v2.1 - Rachel Johnson",
            "fullName": "John Bananus",
            "like": 256,
            "tags": [

                "Writer", "Books", "Drama", "Story"
            ]
        },
        {
            "id": 3,
            "img": '/CartImage.svg',
            "title": "UX/UI Designer v2.1 - Rachel Johnson",
            "fullName": "John Bananus",
            "like": 256,
            "tags": [

                "Writer", "Books", "Drama", "Story"
            ]
        },
        {
            "id": 4,
            "img": '/CartImage.svg',
            "title": "UX/UI Designer v2.1 - Rachel Johnson",
            "fullName": "John Bananus",
            "like": 256,
            "tags": [

                "Writer", "Books", "Drama", "Story"
            ]
        },
        {
            "id": 5,
            "img": '/CartImage.svg',
            "title": "UX/UI Designer v2.1 - Rachel Johnson",
            "fullName": "John Bananus",
            "like": 256,
            "tags": [

                "Writer", "Books", "Drama", "Story"
            ]
        },
        {
            "id": 6,
            "img": '/CartImage.svg',
            "title": "UX/UI Designer v2.1 - Rachel Johnson",
            "fullName": "John Bananus",
            "like": 256,
            "tags": [

                "Writer", "Books", "Drama", "Story"
            ]
        },
        {
            "id": 7,
            "img": '/CartImage.svg',
            "title": "UX/UI Designer v2.1 - Rachel Johnson",
            "fullName": "John Bananus",
            "like": 256,
            "tags": [

                "Writer", "Books", "Drama", "Story"
            ]
        },
        {
            "id": 8,
            "img": '/CartImage.svg',
            "title": "UX/UI Designer v2.1 - Rachel Johnson",
            "fullName": "John Bananus",
            "like": 256,
            "tags": [

                "Writer", "Books", "Drama", "Story"
            ]
        },

    ]);
    return <>

        <div className="sm:container-sm lg:container md:container-md md:mx-auto ">
            <h1 className="text-[20px] font-medium my-10">
                Trending Prompts
            </h1>



            <div className=" grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  sm:gap-3 md:gap-5  lg:gap-10 my-5   justify-center  ">
                {prompts.map((el) => (
                    <div key={el.id} className="  rounded-lg  shadow-sm "
                        style={{ borderRadius: "20px 20px 20px 20px ", backgroundColor: "#F6F5FF" }}
                    >

                        <div className={`bg-[url('/CartImage.svg')] bg-cover bg-no-repeat w-100px h-200px `}
                            style={{ height: 300, borderRadius: "20px 20px 0 0 " }}>
                                

                        </div>


                        <div className="p-5  px-8">
                            <button >
                                <h6 className="mb-2 text-2xl text-left font-medium  tracking-tight text-[#1D2028] ">{el.title}</h6>
                            </button>
                            <div className="flex justify-start items-center	 mt-4 mb-7 flex-wrap ">


                                {el.tags.map((el) => (
                                    <button className="bg-white hover:bg-gray-100 font-medium text-black  drop-shadow-sm rounded-full text-[13px]  p-2  px-3 m-1">
                                        {el}
                                    </button>

                                ))}

                            </div>
                            <div className="flex justify-between">


                                <div className=" flex content-center ">
                                    <SVG
                                        src={"/Avatar.svg"  }
                                        className="mx-1"

                                    />
                                    <h6 className="text-md font-light">{el.fullName}</h6>

                                </div>

                                <div className=" flex content-center  "
                                    style={{ alignItems: 'center' }}
                                >
                                    <SVG
                                        src={ "/Favorite.svg"}
                                        className=""

                                    />
                                    <h6 className="text-md font-light">{el.like}</h6>

                                </div>

                            </div>


                        </div>
                    </div>
                ))}
            </div>


        </div>
    </>
}


