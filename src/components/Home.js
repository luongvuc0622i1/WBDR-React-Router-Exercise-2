import './Home.css';
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
    let navigate = useNavigate();

    const { state } = useLocation();

    const students = [
        {
            id: 1,
            name: 'Hoa',
            age: 20,
            description: 'Tôi là Hoa'
        },
        {
            id: 2,
            name: 'Khánh',
            age: 25,
            description: 'Tôi là Khánh'
        },
        {
            id: 3,
            name: 'Tú',
            age: 22,
            description: 'Tôi là Tú'
        }
    ];

    function sendDataToStudent(student) {
        navigate("/student", { state: JSON.stringify(student) });
    }

    return (
        <div>
            <div>
                <h1>Your profile</h1>
                <h4>Email: {state.email}</h4>
                <h4>Password: {state.password}</h4>
            </div>
            <div>
                <h1>List of students</h1>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>
                                    <button onClick={() => sendDataToStudent(student)}>Detail</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}