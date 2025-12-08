import React from 'react'

function Students() {
    const students = [
        { name: "Brooklyn Simmons", msg: "Top student in Biology", img: "/logo.webp", time: "10:00 am", badge: 1 },
        { name: "Karen Castillo", msg: "Excellent performance", img: "/logo.webp", time: "09:05 am" },
        { name: "Floyd Miles", msg: "Consistent improvement", img: "/logo.webp", time: "Yesterday", online: true },
        { name: "Esther Howard", msg: "Strong in Anatomy", img: "/logo.webp", time: "Yesterday" }
    ];
    return (
        <div>

            {/* All Students */}
            <h2 className="text-lg font-semibold mt-6 mb-3">All Students</h2>

            <div className="flex flex-col gap-3 mb-3">
                {students.map((s, idx) => (
                    <div
                        key={idx}
                        className="flex items-center bg-[#6357F9] p-4 rounded-2xl justify-between"
                    >
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <img src={s.img} className="w-10 h-10 rounded-full" />
                                {s.online && (
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#6357F9]"></span>
                                )}
                            </div>
                            <div>
                                <p className="font-semibold text-white sm:text-2xl text-[12px]">{s.name}</p>
                                <p className="text-gray-300 text-xs sm:text-xl ">{s.msg}</p>
                            </div>
                        </div>
                        <button className="bg-[#0B1A37] text-white px-3 py-1 rounded-full text-xs sm:text-xl">Follow</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Students