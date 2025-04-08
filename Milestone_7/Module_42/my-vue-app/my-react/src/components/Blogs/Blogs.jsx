import React, { useEffect, useState } from 'react';
import DisBlog from './DisBlog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/jhankarpHero/bottles-data/refs/heads/main/bottles.json")
            .then(res => res.json())
            .then(data=>setBlogs(data))
    },[])
    // console.log(blogs);
    
    return (
        <>
            <h2 className="text-4xl text-center font-bold m-5">Total Card: { blogs.length }</h2>
            <div className="grid grid-cols-3">
                {
                    blogs.map((blog) => (
                        <DisBlog key={blog.id} blog={blog} />
                    ))
                }
            </div>
        </>
    );
};

export default Blogs;