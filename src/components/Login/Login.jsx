import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const {login} = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState();

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await login(user.email, user.password)
            navigate("/")
        } catch (error) {
            if (error.code === "auth/user-not-found") {
                setError("Usuario no encontrado")
            } if (error.code === "auth/wrong-password") {
                setError("Contraseña incorrecta")
            } else {
                console.log(error.code);
                setError(error.code)
            }
        }
    }

    return (
        <>
        <div>
    {error && <p className="p-cart text-center mt-3">{error}</p>}
        <div className="loginContainer">

    <form onSubmit={handleSubmit} className="formulario">
            <label htmlFor="email" className="mb-2">Email</label>
            <input className="mb-4" type="email" name="email" placeholder="tuemail@company.com" onChange={handleChange}/>

            <label htmlFor="password" className="mb-2">Contraseña</label>
            <input className="mb-5" type="password" name="password" id="password" placeholder="******" onChange={handleChange}/>

            <button className="btn btn-dark">Iniciar sesión</button>
            <Link className="text-decoration-none mt-3 color-link" to={"/register"}>¿No tenés cuenta?</Link>
        </form>

        </div>
</div>

        </>
    );
}

export default Login;
