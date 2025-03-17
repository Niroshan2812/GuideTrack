import React from "react";
import style from "./GuideAdd.module.css"
import GuideForm from "../../components/GuideForm";
import GuideStepForm from "../../components/GuideStepForm";

function GuideAdd (){

    return(
        
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
               <GuideStepForm/>
      </div>
        
    )

}

export default GuideAdd;