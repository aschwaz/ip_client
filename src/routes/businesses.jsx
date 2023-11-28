import { Outlet } from "react-router-dom"
import Lead from "./lead"
import Info from "./info"

export default function Businesses() {
    return (
        <div>
            <h1>Hi I'm businesses!</h1>
            <Outlet />
        </div>
    )
}