import { useAuth } from "../context/authContext";

function Profile() {
    const { user,logOut } = useAuth();
    console.log('Datos del usuario', user.username);
    return (
        <>
            <nav>
                <button onClick={logOut}>Log out</button>
            </nav>
            <main>
            <h1>Hello {user.username},</h1>
            <h2>We are happy to see you again :D</h2>
            </main>
        </>
    )
}

export default Profile;