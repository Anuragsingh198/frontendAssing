import React, { useState } from 'react';
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom'; 
export const LeaderBoard = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', rank: 1, points: 1500, earnings: '$200', icon: 'https://via.placeholder.com/50' },
        { id: 2, name: 'Jane Smith', rank: 2, points: 1200, earnings: '$150', icon: 'https://via.placeholder.com/50' },
        { id: 3, name: 'Alice Johnson', rank: 3, points: 1000, earnings: '$100', icon: 'https://via.placeholder.com/50' },
        { id: 4, name: 'Bob Brown', rank: 4, points: 800, earnings: '$75', icon: 'https://via.placeholder.com/50' },
        { id: 5, name: 'Charlie Green', rank: 5, points: 600, earnings: '$50', icon: 'https://via.placeholder.com/50' },
        { id: 6, name: 'David White', rank: 6, points: 400, earnings: '$25', icon: 'https://via.placeholder.com/50' },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
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

    return (
        <>
            <div className='mx-auto mt-10 w-[70%] flex flex-col'>
                <div className='bg-blue-900 flex justify-between items-center p-2 w-[70%] mx-auto'>
                    <div className="flex flex-col items-start text-[1rem] space-y-0">
                        <p>3987 Today</p>
                        <p>2378.5 Rs.</p>
                    </div>

                    <div className='flex justify-between items-center text-black min-w-[150px] ml-3'>
                        <p> <Link to='/leaderboard'>LeaderBoard</Link></p>
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
                        {currentUsers.map((user) => (
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
    );
};
