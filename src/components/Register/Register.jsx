import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const {signUp} = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
            try {
                await signUp(user.email, user.password);
                navigate("/")
            } catch (error) {
                if (error.code === "auth/invalid-email") {
                    setError("Email inválido, pruebe con uno distinto");
                } else if (error.code === "auth/weak-password") {
                  setError("Ingrese como mínimo 6 dígitos")  
                } else if (error.code === "auth/email-already-in-use") {
                    setError("El email que ingresaste ya está en uso")
                } else {
                    setError(error.code)
                }
        }
    }
    return (
<div>
    {error && <p className="p-cart text-center mt-3">{error}</p>}
<div className="loginContainer">

<form onSubmit={handleSubmit} className="formulario">
            <label className="mb-2" htmlFor="email">Ingrese un email</label>
            <input className="mb-4" type="email" name="email" placeholder="tuemail@company.com" onChange={(e) => setUser({ ...user, email: e.target.value })}/>

            <label className="mb-2" htmlFor="password">Ingrese una contraseña</label>
            <input className="mb-4" type="password" name="password" id="password" placeholder="******" onChange={(e) => setUser({ ...user, password: e.target.value })}/>

            <button className="btn btn-dark">Registrarse</button>
            <Link to={"/login"} className="text-decoration-none mt-3">Ya tengo una cuenta</Link>
        </form>
</div>
</div>
    );
}

export default Register;
