import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
const BlogList = () => {
    const[blog,setBlog]=useState([])
    useEffect(()=>{
      axios.get(`http://localhost:8000/listblog/`)
      .then(res=>setBlog(res.data))
      .catch(err=>console.log(err))

    },[])

    const deleteBlog = async (id) =>{
        const token = localStorage.getItem('access')
        const response = await axios.delete(`http://localhost:8000/deleteblog/${id}`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        setBlog(blog.filter((item)=> item.id !== id))
        toast.success('Blog deleted succesfully')
    }
  return (
    <>
    
    
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Author
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Image
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {blog.map((b,i)=>(
                <>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={i}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {b.title}
                </th>
                <td className="px-6 py-4">
                    {b.author}
                </td>
                <td className="px-6 py-4">
                    {b.description}
                </td>
                <td className="px-6 py-4">
                    {b.category}
                </td>
                <td className="px-6 py-4">
                    <img src={b.image} alt={b.title} className='w-[100px] h-[100px]' />
                </td>
                <td className="px-6 py-4">
                    <Link to="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>&nbsp;
                    <Link to="#"
                    onClick={()=>deleteBlog(b.id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</Link>
                </td>
            </tr>
                </>
            ))}
          
           
        </tbody>
    </table>
</div>

    </>
  )
}

export default BlogList