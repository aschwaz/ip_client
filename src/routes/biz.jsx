import { Outlet } from "react-router-dom"

export default function Biz() {
    return (
        <div>
            <h1>Hi I'm biz!</h1>
            <Outlet />
        </div>
    )
}