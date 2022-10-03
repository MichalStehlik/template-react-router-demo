import { useParams } from 'react-router-dom';

export const Third = () => {
    let { number } = useParams();
    return (
        <p>Third page {number}</p>
    );
}

export default Third;