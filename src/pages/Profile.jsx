import { useAuth } from "../context/authContext";

function Profile() {
    const { user } = useAuth();
    console.log('Datos del usuario',user.username);
    return (
        <>
            <h1>Hello {user.username},</h1>
            <h2>We are happy to see you again :D</h2>
        </>
    )
}

export default Profile;