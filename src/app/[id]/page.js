'use client'

import { useEffect, useState } from 'react'

import { getPosts } from '../api'

import ArticleItem from '../components/ArticleItem/ArticleItem'

export default function Page({ params }) {
  const [post, setPost] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)

        const data = await getPosts()

        setPost(data.filter(item => item.id === Number(params.id)))
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div style={{ color: 'red' }}>My Post: {params.id}</div>
      {isLoading ? <div className='loading'>Loading...</div> : post.map((el) => (
        <ArticleItem key={el.id} imgUrl={el.acf.image} title={el.acf.title} text={el.acf.description} />
      ))
      }
    </>
  )
}
