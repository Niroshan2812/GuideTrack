import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent"

const GuideForm: React.FC = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
    });

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function btnClick(){
        console.log("Click Me")
    }
    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // You can add API call or further processing here
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Guide</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Guide Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Guide Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={formData.title} 
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                        placeholder="Enter guide title" 
                        required 
                    />
                </div>

                {/* Guide Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Guide Description</label>
                    <textarea 
                        name="description" 
                        value={formData.description} 
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                        placeholder="Enter guide description" 
                        rows={3} 
                        required
                    />
                </div>

                {/* Category Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select 
                        name="category" 
                        value={formData.category} 
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                        required
                    >
                        <option value="">Select category</option>
                        <option value="technology">Technology</option>
                        <option value="business">Business</option>
                        <option value="health">Health</option>
                        <option value="education">Education</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <ButtonComponent text="ClickMe" onclick={btnClick}/>
                </div>
            </form>
        </div>
    );
};

export default GuideForm;
