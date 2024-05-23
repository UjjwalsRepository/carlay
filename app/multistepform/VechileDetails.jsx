import React from 'react'
import { Label, Select } from "flowbite-react";

const VechileDetails = () => {
    return (
        <>
            <div className='flex flex-row'>

                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="countries" value="Select your country" />
                    </div>
                    <Select id="countries" required>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </Select>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="countries" value="Select your country" />
                    </div>
                    <Select id="countries" required>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </Select>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="countries" value="Select your country" />
                    </div>
                    <Select id="countries" required>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </Select>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="countries" value="Select your country" />
                    </div>
                    <Select id="countries" required>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </Select>
                </div>
            </div>
        </>
    )
}

export default VechileDetails