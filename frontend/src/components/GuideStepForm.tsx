import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";

const GuideStepForm:React.FC =()=>{
    const [formData, setFormData] = useState({
        stepNumber:1,
        whatToDo:"",
        hint:"",
        image:null as File |null,
        voice:null as File |null,

    });

    //for input changes 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setFormData({...formData,[e.target.name]: e.target.value});
    };

    //for file upload 
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        if (e.target.files && e.target.files.length >0){
            setFormData({...formData, [e.target.name]:e.target.files[0]})
        }
     
    };

    const handleSubmit = ()=>{
      
        console.log("Step Data Submitted", formData)

    }

    const handleNextStep =()=>{
        setFormData({...formData, stepNumber:formData.stepNumber+1,whatToDo:"",hint:"",image:null,voice:null});
    }

    return(
        <div className=" max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Guide Step</h2>

            <label className="block text-lg font-semibold text-gray-800 mb-2">Guide title</label>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Step Number</label>
                    <input type="number"
                    name="stepNumber"
                    value={formData.stepNumber}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                    readOnly/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">What to do</label>
                    <textarea 
                    name="whatToDo"
                    value={formData.whatToDo}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                    placeholder="Describe your step Here "
                    rows={3}
                    required/>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Upload Image </label>
                    <input 
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full mt-2 p-2 border rounded-lg focus:ring focus:ring-blue-200"/>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Upload Voice Clip</label>
                    <input 
                        type="file"
                        name="voice"
                        accept="audio/*"
                        onChange={handleFileChange}
                        className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"/>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">What to do</label>
                    <textarea 
                    name="whatToDo"
                    value={formData.hint}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                    placeholder="Provide any hints "
                    rows={2}
                    required/>
                </div>

                <div className="flex justify-between mt-4">
                    <ButtonComponent onclick={handleNextStep} text="Next Step"/>
                    <ButtonComponent onclick={ handleSubmit} text="Finish"/>
                </div>

            </form>
        </div>
    )
}
export default GuideStepForm;