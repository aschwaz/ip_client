import { Outlet } from "react-router-dom"

export default function Biz() {
    return (
        <div>
            <h1>Hi I'm biz!</h1>
            <Outlet />
        </div>
    )
}


// NEEDS ACTUAL LINK TO FETCH FROM 
export const bizLoader = async({params}) => {
    const bizResponse = await fetch(`${url}/api/businesses/${params.bizid}`)
    const bizs = await bizResponse.json()

    return bizs
}