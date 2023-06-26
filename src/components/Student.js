import { useLocation } from "react-router-dom";

export default function Student() {
    const { state } = useLocation();

    const student = JSON.parse(state);

    return (
        <div>
            <h1>Detail student {student.name}</h1>
            <h4>Id: {student.id}</h4>
            <h4>Age: {student.age}</h4>
            <h4>Description: {student.description}</h4>
        </div>
    );
}