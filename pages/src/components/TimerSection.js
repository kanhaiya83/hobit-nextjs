import { useState } from "react"

const TimerSection = ()=>{
    const [timeRemaining,setTimeReamining] = useState(184000)
    const seconds=timeRemaining%60;
    const minutes = (timeRemaining-seconds)/60;
    const hourse = (timeRemaining-seconds)

    // 
    return(
        <div class="bg-white w-full">
            <div class="max-w-[1000px] mx-auto">
                <h1 class="text-4xl text-slate-800 max-w-[600px] text-center mx-auto">
                Time Is Running Out. Grab Your Spot Fast!
                </h1>

            </div>
        </div>
    )
}
export default TimerSection