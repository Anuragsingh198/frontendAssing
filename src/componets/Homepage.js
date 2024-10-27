import React, { useEffect, useState } from 'react';
import { CiUser } from "react-icons/ci";
import Login from './Authentication/Login';
import { Link } from 'react-router-dom'; 
import Signup from './Authentication/SignUp';
import { LeaderBoard } from './Leaderboeard';
import { useValue } from '../Context/ContextProvider';
import { getAllUsers } from '../Context/Action'
const HomePage = () => {
    const {state :{leaderBoard} , dispatch} = useValue()
    const [currentPage, setCurrentPage] = useState(1);
    const [users , setUsers] = useState([]);
    const usersPerPage = 3;

    // Handle incrementing points for a user
    const incrementPoints = (userId) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === userId ? { ...user, points: user.points + 1 } : user
            )
        );
    };

    // Calculate the index of the first user to display
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    useEffect(()=>{
        dispatch(getAllUsers());
        setUsers(leaderBoard);
    } ,[users , leaderBoard , dispatch])
  return (
   <>
   <div className='flex justify-left items-center mx-2 bg-purple-900 h-[60px] '>
    <div className='flex  justify-evenly   items-center  text-white w-[300px] ' >

                    <p>
                        <Link to="/login">Login</Link>
                    </p>
                    <p>
                        <Link to="/register">Register</Link>
                    </p>
                    <p>
                        <Link to="/">Home</Link>
                    </p>
                    <p>
                        <Link to="/leaderboard">LeaderBoard</Link>
                    </p>
    </div>
   </div>

            <div className='mx-auto mt-10 w-[70%] flex flex-col'>
                <div className='bg-blue-900 flex justify-between items-center p-2 w-[70%] mx-auto'>
                    <div className="flex flex-col items-start text-[1rem] space-y-0">
                        <p>3987 Today</p>
                        <p>2378.5 Rs.</p>
                    </div>

                    <div className='flex justify-between items-center text-black min-w-[150px] ml-3'>
                        <p>LeaderBoard</p>
                        <span><CiUser /></span>
                    </div>
                </div>

                <div className='flex mt-4 justify-center'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-9 mx-2 border border-blue-700 rounded-3xl">
                        Daily
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 border border-blue-700 rounded-3xl">
                        Weekly
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 border border-blue-700 rounded-3xl">
                        Monthly
                    </button>
                </div>

                <div className='top3 flex justify-center items-center'>
                    <div className='border-2 border-black h-[150px] w-[150px] m-4 flex flex-col justify-center items-center'>
                        <p>Sachin</p>
                        <p>89</p>
                        <p>678rs</p>
                    </div>
                    <div className='border-2 border-black h-[150px] w-[150px] m-4 flex flex-col justify-center items-center'>
                        <p>Sachin</p>
                        <p>89</p>
                        <p>678rs</p>
                    </div>
                    <div className='border-2 border-black h-[150px] w-[150px] m-4 flex flex-col justify-center items-center'>
                        <p>Sachin</p>
                        <p>89</p>
                        <p>678rs</p>
                    </div>
                </div>

                <div className="p-4 w-[70%] mx-auto">
                    <div className="space-y-4">
                        {currentUsers && currentUsers.map((user) => (
                            <div
                                key={user.id}
                                className="flex items-center justify-between p-4 border rounded-lg shadow-md bg-white cursor-pointer"
                                onClick={() => incrementPoints(user.id)} // Increment points on click
                            >
                                <div className="flex items-center mx-2">
                                    <span><CiUser /></span>
                                    <div>
                                        <p className="font-semibold">{user.name}</p>
                                        <p className="text-sm text-gray-500">Rank: {user.rank}</p>
                                    </div>
                                </div>
                                <p className="font-semibold">Points: {user.points}</p>
                                <p className="text-gray-500">Earnings: {user.earnings}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center mt-4">
                    {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                            className={`mx-1 px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
   </>
  )
}

export default HomePage  