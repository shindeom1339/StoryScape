import React, { useEffect, useState } from 'react'
import appWriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import { Link } from 'react-router-dom'

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        appWriteService.getPosts([]).then((posts) => {
            if (posts) setPosts(posts.documents)
        })
    }, [])

    return (
        <div className='w-full py-8'>
            <Container>
                {/* <div className="flex flex-wrap gap-2 gap-y-4 duration-500 justify-center"> */}
                <div className='grid grid-cols-1 gap-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 duration-500 justify-center'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
