import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa"
import ButtonComponent from "../../components/ButtonComponent"

function Dashboard() {
    const navigate = useNavigate()

    const navContainner = () => {
        navigate("/guideadd")
    }

    return (
        <div className="flex flex-col items-center  h-screen">
            <h1 className="text-3xl font-bold pt-3.5">Welcome to GuideTrack</h1>
            <div className="flex mt-3 ">
               <ButtonComponent onclick={()=>navigate("/guideadd")} text="Add guide" icon={<FaPlus />} iconClassName="pr-2" />

            </div>
        </div>
    )
}
export default Dashboard;