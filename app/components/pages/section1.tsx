import React from "react"
import Link from "next/link"

const ProjectsItems = [
    { id: 1, name: 'Website Project', src: '/projects/web1.png', type:'WEBSITE' },
    { id: 2, name: 'Website internship', src: '/projects/web2.png', type:'WEBSITE'},
    { id: 3, name: 'Thesis', src: '/projects/web3.png', type:'WEBSITE' },
    { id: 4, name: 'Software Develop', src: '/projects/web3.png', type:'WEBSITE' }
]

export default function Section1() {
    return (
        <div className="grid grid-cols-3 mt-[100px] gap-4 mx-4 overflow-hidden">
            {ProjectsItems.map((item) => (
                <div key={item.id} className="max-w-auto">
                    <div className="rounded relative group">
                        <Link href="/">
                            <img className="rounded group-hover:brightness-50 transition-all duration-500" src={item.src} alt={item.name} style={{ width: '100%', height: 'auto' }} />
                        </Link>
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-white">
                            <p className="absolute top-[68%] mx-4 text-[15px]">{item.type}</p>
                            <p className="absolute top-[75%] mx-4 text-[25px]">{item.name}</p>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}
