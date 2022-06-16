import { useState, useEffect } from "react";
import Header from "../components/Header"
import Post from "../components/Post";
import { getProfileFeed } from "../services/FeedService";
import { useParams } from 'react-router-dom'

const ProfileFeed = () => {
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [requestInProgress, setRequestInProgress] = useState(false)
    const [isMoreData, setIsMoreData] = useState(true)
    const { username } = useParams()

    useEffect(() => {
        setRequestInProgress(true)
        
        if (isMoreData) {
            getProfileFeed(username, currentPage).then((data) => {
                setPosts(p => p.concat(data.posts))
                if (data.posts.length === 0) {
                    setIsMoreData(false)
                }
            }).finally(() => {
                setRequestInProgress(false)
            });
        }

        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            if (!requestInProgress) {
                setCurrentPage(p => p+1)
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [currentPage, isMoreData]);

    return (
        <>
            <Header></Header>
            <div className="container">
                {
                    posts.map((post, i) => {
                        return (
                            <Post post={post}></Post>
                            
                        )
                    })
                }
            </div>
        </>
    )
    
}

export default ProfileFeed