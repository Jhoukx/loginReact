import { useAuth } from "../context/authContext";

function Profile() {
    const { user } = useAuth();
    return (
        <>
            <h1>Hello {user.user.username} We are happy to see you again :D</h1>
        </>
    )
}

export default Profile;