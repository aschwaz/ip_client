import { Outlet } from "react-router-dom"

export default function Root() {
    return (
        <div>
            <h1>Hi I'm root!</h1>
            <Outlet />
        </div>
    )
}