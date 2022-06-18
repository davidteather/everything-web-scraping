import { useState, useEffect } from "react";
import Header from "../components/Header"
import Post from "../components/Post";
import { getProfileFeed } from "../services/FeedService";
import { useParams } from 'react-router-dom'

const ProfileFeed = () => {
    const [posts, setPosts] = useState([])
    const [userExists, setUserExists] = useState(true)
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
                    if (data.error === "USER_DOES_NOT_EXIST") {
                        setUserExists(false)
                    }
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

    if (userExists) {
        return (
            <>
                <Header />
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
    } else {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="text-center" style={{marginTop: '1rem'}}>
                        <h2>
                            user @{username} doesn't exist
                        </h2>
                    </div>
                </div>
            </>
        )
    }
}

export default ProfileFeed