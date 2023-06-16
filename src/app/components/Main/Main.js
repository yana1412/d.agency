'use client'

import { useEffect, useState } from 'react'

import { getPosts } from '../../api'

import ArticleItem from '../ArticleItem/ArticleItem'

import './style.scss'

export default function Main() {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)

                const data = await getPosts()

                setPosts(data)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])

    return (
        <div className='main'>
            <div className="container">
                {isLoading ? <div className='loading'>Loading...</div> : <div className='main__wrapper'>
                    {posts.map((el) => (
                        <ArticleItem key={el.id} imgUrl={el.acf.image} title={el.acf.title} text={el.acf.description} link={el.id} />
                    ))
                    }
                </div>}
            </div>
        </div>
    )
}