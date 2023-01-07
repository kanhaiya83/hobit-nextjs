import GradientText from "./GradientText"

const WorkshopDetailsSection = ()=>{
   return <div class="bg-white-w-full py-10">
        <div class="max-w-[1000px] mx-auto grid grid-cols-3 gap-4 grid-rows-[160px_160px]">
            <div class="rounded-lg pl-[10%] pb-[15%] overflow-hidden testimonial-bg-image-1">
               <div class="flex flex-col justify-end h-full">
                <h5 class="text-sm font-thin mb-2">Attented the workshop</h5>
                <h1 class="text-5xl font-semibold"><GradientText>40,000+</GradientText></h1>
               </div>
            </div>
            <div class="rounded-lg overflow-hidden bg-red-300 relative">
                <img src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/5fed796845a05dfc86483284_vedika-leads-2.png" alt="" class="absolute l-0 t-0 w-full"/>
            </div>
            <div class="rounded-lg overflow-hidden bg-red-300 relative">
                <img src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/5fed796845a05dfc86483284_vedika-leads-2.png" alt="" class="absolute l-0 t-0 w-full"/>
            </div>
            <div class="rounded-lg pl-[10%] pb-[15%] overflow-hidden testimonial-bg-image-1">
               <div class="flex flex-col justify-end h-full">
                <h5 class="text-sm font-thin mb-2">Average rating</h5>
                <h1 class="text-5xl font-semibold"><GradientText>9.3</GradientText></h1>
               </div>
            </div>
            <div class="rounded-lg overflow-hidden bg-red-300 relative">
                <img src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/5fed796845a05dfc86483284_vedika-leads-2.png" alt="" class="absolute l-0 t-0 w-full"/>
            </div>
            <div class="rounded-lg overflow-hidden bg-red-300 relative">
                <img src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/5fed796845a05dfc86483284_vedika-leads-2.png" alt="" class="absolute l-0 t-0 w-full"/>
            </div>
        </div>
        
    </div>
}

export default WorkshopDetailsSection