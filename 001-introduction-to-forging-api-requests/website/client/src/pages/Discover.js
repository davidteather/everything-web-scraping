
import { useState, useEffect } from "react";
import Header from "../components/Header"
import { getProfiles } from "../services/DiscoveryService"



const Discover = () => {
    const [profiles, setProfiles] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [requestInProgress, setRequestInProgress] = useState(false)
    const [isMoreData, setIsMoreData] = useState(true)

    
    

    useEffect(() => {
        setRequestInProgress(true)
        
        if (isMoreData) {
            getProfiles(currentPage).then((data) => {
                setProfiles(p => p.concat(data.profiles))
                if (data.profiles.length === 0) {
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
                <h1 className="text-center" style={{'margin': '2rem'}}>Discover Page</h1>
                {
                    profiles.map((profile, i) => {
                        return (
                            <div key={profile.username} className="row row-cols-3" style={{'marginBottom': '2rem', justifyContent: 'center'}}>
                                <div className="col rounded-circle text-center my-auto" style={{'backgroundColor': profile.profile_color, width: '5rem', padding: 0, fontSize: '4rem'}}>{profile.name[0]}</div>
                                <div className="col my-auto">
                                    <b style={{'fontSize': '1.8rem'}}>{profile.name}</b>
                                    <div>Is working as a <b>{profile.job}</b> at <b>{profile.company}</b></div>
                                </div>
                                <div className="col my-auto" style={{'width': '7rem'}}>
                                    <button type="button" className="btn btn-primary"><a className="unstyle_link" href={"mailto: " + profile.email}>Email</a></button>
                                </div>
                            </div>
                            
                        )
                    })
                }
            </div>
            
        </>
    )
    
    
}

export default Discover