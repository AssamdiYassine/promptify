import * as React from "react";
import SearshBar from "./searshBar"
import SVG from "react-inlinesvg";

interface dataTopics {
    id: number;
    topic: string;
}
interface dataSubject {
    id: number;
    subject: string;
    img: string
}

export default function FirstSection() {
    const [topics ] = React.useState<dataTopics[]>([
        {
            "id": 1,
            "topic": "Personal Finance"
        },
        {
            "id": 2,
            "topic": "ChatGPT4"
        },
        {
            "id": 3,
            "topic": "Learning"
        },
        {
            "id": 4,
            "topic": "Books"
        },
        {
            "id": 5,
            "topic": "Scenario"
        },


    ]);
    const [subject ] = React.useState<dataSubject[]>([
        {
            "id": 1,
            "subject": "All Directions",
            "img": "../../public/image.svg"
        },
        {
            "id": 2,
            "subject": "Personal Development",
            "img": "../../public/image.svg"
        },
        {
            "id": 3,
            "subject": "Wellness",
            "img": "../../public/image.svg"
        },
        {
            "id": 4,
            "subject": "Content Marketing",
            "img": "../../public/image.svg"
        },
        {
            "id": 5,
            "subject": "Creative Writing",
            "img": "../../public/image.svg"
        },
        {
            "id": 6,
            "subject": "Professional Writing",
            "img": "../../public/image.svg"
        },
        {
            "id": 7,
            "subject": "Entertainment & Social",
            "img": "../../public/image.svg"
        },
        {
            "id": 8,
            "subject": "Art",
            "img": "../../public/image.svg"
        },
        {
            "id": 9,
            "subject": "Sustainability",
            "img": "../../public/image.svg"
        },
        {
            "id": 10,
            "subject": "Tourism & Leisure",
            "img": "../../public/image.svg"
        },


    ]);




    return <>
        <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8 ">
            <div className="flex justify-center align-middle pt-20">

                <h1 className=" sm:text-5xl md:text-5xl lg:text-7xl whitespace-nowrap	welcome 	">Welcome to Promptify</h1>
            </div>
            <div className="flex justify-center align-middle mt-10">
                <p className="text-center">Unleash your creative potential using Promptify, the ultimate ChatGPT and AI-<br />driven content generation and idea inspiration platform. Try it today!</p>


            </div>
            <div className="flex justify-center align-middle mt-10 bodySearch " >

            <SearshBar />

            </div>
            <div className="flex justify-center  items-center flex-wrap	 mt-10 pb-10 ">

                <h3>Popular topics:</h3>
                {topics.map((el) => (
                    <button key={el.id} className="bg-white hover:bg-gray-100 text-black  drop-shadow-sm rounded-full p-4 ml-5 mb-3">
                        {el.topic}
                    </button>

                ))}

            </div>
            <div className="flex justify-center  items-center sm:flex-wrap	 mt-10 pb-10 ">


                {subject.map((el) => (
                    <div key={el.id} className="bg-white hover:bg-gray-100 text-black  drop-shadow-sm rounded-full  m-2 py-3 pr-2 pl-1">
                        <div className="flex items-center ">


                            <SVG
                                src={el.img}
                                className="mx-1"

                            />
                            <p className="text-[14px] font-medium	">
                            {el.subject}
                      </p>
                        </div>
                    </div>

                ))}

            </div>



        </div>

    </>
}