import { circleburst, dotgrid } from '../utils/svg'

function Hero() {
    const leaderboardTop = [
        { name: "Theresa", img: "/logo.webp", online: true },
        { name: "Jerome", img: "/logo.webp", online: true },
        { name: "Floyd", img: "/logo.webp", online: true },
        { name: "Annette", img: "/logo.webp", online: true },
        { name: "Courtney", img: "/logo.webp", online: true }
    ];
    return (
        <div>

            <main className=' bg-[#6357F9] w-full sm:h-[200px] h-[160px]  fixed top-0 rounded-b-[30px] flex flex-col items-baseline justify-end overflow-hidden z-50'>
                <div className=' absolute -top-1/2 -mt-12 left-0 '>
                    {dotgrid}
                </div>
                <div className=' absolute -bottom-1/2 -mt-16 -right-1/3 '>
                    {circleburst}
                </div>
                {/* Top 5 */}
                <div className="flex gap-4 overflow-x-auto pb-5 w-fit sm:mx-6 mx-auto overflow-scroll">
                    {leaderboardTop.map((s, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="relative">
                                <img src={s.img} className="sm:w-14 sm:h-14 w-10 h-10 rounded-full" />
                                {s.online && (
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0B1A37]"></span>
                                )}
                            </div>
                            <p className="text-xs mt-1 text-gray-300">{s.name}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Hero