import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Layout = () => {
    const navigate = useNavigate();
    return(
        <>
        <p>Layout</p>
        <button onClick={e => {navigate("/")}}>Root</button>
        <ul>
            <li><a href="/first">Direct First</a></li>
            <li><Link to={`/first`}>Client Routing First</Link></li>
            <li><a href="/second">Direct Second</a></li>
            <li><Link to={`/second`}>Second</Link></li>
            <li><Link to={`/third`}>Third</Link></li>
            <li><Link to={`/third/1`}>Third 1</Link></li>
            <li><Link to={`/fourth`}>Fourth</Link></li>
        </ul>
        <Outlet />
    </>
    );
}

export default Layout;