import Image from "next/image"
const FeaturedSection =()=>{
    return(
        <div class="my-10 md:my-15 py-6 w-full flex flex-col items-center px-[5%]">
            <h1 class="text-3xl text-slate-800 font-bold mb-8">Featured In</h1>
            <div class="grid grid-cols-2 md:grid-cols-4 max-w-[900px] w-full gap-x-[5%] gap-y-8">
                <div className="relative h-[70px]">
                    <Image src="/images/featured_in_logos/business-insider.png" alt="" fill={true} style={{objectFit:"contain"}}/>
                </div>
                <div className="relative h-[70px]">
                    <Image src="/images/featured_in_logos/ani.png" alt="" fill={true} style={{objectFit:"contain",backgroundColor:"black"}}/>
                </div>
                <div className="relative h-[70px]">
                    <Image src="/images/featured_in_logos/the-print.webp" alt="" fill={true} style={{objectFit:"contain"}}/>
                </div>
                <div className="relative h-[70px]">
                    <Image src="/images/featured_in_logos/yourstory.png" alt="" fill={true} style={{objectFit:"contain"}}/>
                </div>
            </div>
        </div>
    )
}
export default FeaturedSection