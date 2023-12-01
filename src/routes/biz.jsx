import React, { useState, useEffect, createContext } from "react";
import { Switch } from "@headlessui/react";
import { Outlet, useNavigate } from "react-router-dom";
import rejig from "../assets/rejig.jpeg"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

// used to keep lead state persistent
export const LeadContext = createContext({
    leads: [],
    currentLeadIndex: 0,
    setCurrentLeadIndex: () => {}
});


export default function Biz() {
    // used for toggle
    const [enabled, setEnabled] = useState(false);
    const navigate = useNavigate();

    const handleSwitchChange = () => {
        setEnabled(!enabled);

        if (enabled) {
            navigate("/1/lead");
        } else {
            navigate('/1/info')
        }
    }

    // adding state for lead to stay persistent
    const [leads, setLeads] = useState([]);
    const [currentLeadIndex, setCurrentLeadIndex] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/lead')
            .then(res => res.json())
            .then(data => setLeads(data));
    }, []);


    return (
        <div className=" bg-gray-900">
            {/* <h1>Hi I'm biz!</h1> */}
            <div className="mx-auto max-w-7xl px-2">
            
                <Switch.Group as="div" className="flex items-center justify-between  py-1">
                <img className="rounded-full mr-4 w-12 sm:w-13 lg:w-14" src={rejig} alt="Rejig" />
                    <span className="flex flex-grow flex-col">
                        <Switch.Label as="span" className="text-sm font-medium leading-6 text-white" passive>
                        Start earning with Rejig
                        </Switch.Label>
                        <Switch.Description as="span" className="text-sm text-gray-300">
                        Use this toggle to navigate between Rejig info and leads
                        </Switch.Description>
                    </span>    
                    <Switch
                        checked={enabled}
                        onChange={handleSwitchChange}
                        className={classNames(
                            enabled ? 'bg-indigo-600' : 'bg-gray-200',
                            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                        )}
                    >
                        <span className="sr-only">Use setting</span>
                        <span
                            aria-hidden="true"
                            className={classNames(
                            enabled ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                            )}
                        />
                    </Switch>
                </Switch.Group>
            </div>
            <LeadContext.Provider value={{ leads, currentLeadIndex, setCurrentLeadIndex }}>
                <Outlet />
            </LeadContext.Provider>
        </div>
    )
}


// NEEDS ACTUAL LINK TO FETCH FROM 
export const bizLoader = async({params}) => {
    const bizResponse = await fetch(`${url}/api/businesses/${params.bizid}`)
    const bizs = await bizResponse.json()

    return bizs
}


