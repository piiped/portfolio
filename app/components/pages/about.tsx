import React from "react"

export default function About() {
    return (
        <div className="bg-primary mt-[200px] z-10">
        <div id="about" className="py-[100px] flex justify-around items-center relative ">
            <p className="text-white font-normal text-[120px] absolute mt-[-450px]">ABOUT ME</p>
            <div>
                <img src="/about/profile.JPG" alt="profile" style={{ width: '500px', height: 'auto' }}/>
            </div>
            <div className="max-w-[500px]">
                
                <p className="text-white font-normal text-[20px] whitespace-normal">
                    Hello, My name is Papitchaya Kadang 
                    My Nickname is Aommie. I am 22 years old. 
                    Now I am recent graduate in Applied Computer Science-Multimedia at King Mongkut's University of Technology Thonburi. 
                    I am interested in Front-end Developer. <br/>
                    
                </p>
                <p className="mt-[20px] text-white font-normal text-[20px] whitespace-normal">
                    So I made this portfolio for 
                    an entry level Front-end developer position to utilize my problem-solving skills, 
                    collaboration, and knowledge of the website development.
                </p>
            </div>
        </div>
        </div>
    )
}