import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../Context/Action';
import { useValue } from '../../Context/ContextProvider';

const Login = () => {
    const  {state:{user} , dispatch}=  useValue();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        userLogin({username , password});
        navigate('/')
        console.log('Login:', { username, password });
    };

  const navigateHandler =()=>{
            navigate('/register')
          }
          useEffect(()=>{
            console(user);
          },[user])
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 m-auto w-[400px] h-[400px]">
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
                    <h2 className="text-lg font-semibold mb-4">Login</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                    <div  onClick={navigateHandler}> dont have an account ? Sign Up</div>
                </form>
            </div>
        </div>
    );
};

export default Login;
