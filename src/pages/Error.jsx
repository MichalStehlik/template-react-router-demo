import { useRouteError } from "react-router-dom";

export const Error = () => {
    const error = useRouteError();
    return <>
        <p>OOPS</p>
        <p>{error.message}</p>
    </>
}

export default Error;