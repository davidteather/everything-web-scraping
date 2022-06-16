import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import heart from '../images/heart.png'

class Post extends Component {
    render() {
        return (
            <div key={this.props.post.id} className="row" style={{'marginBottom': '2rem', 'marginTop': '2rem', justifyContent: 'center'}}>
                <div className="mx-auto" style={{'width': '50rem', padding: '20px', 'backgroundColor': '#f8f8ff'}}>
                    <img className="img-fluid" alt={this.props.post.caption} src={this.props.post.image_url}></img>
                    <div className="row row-cols-3">
                        <div className="col-12">
                            <img src={heart} style={{'width': '1rem'}} alt="Heart icon" /> {this.props.post.likes_count} Likes
                            <br />
                            <Link to={'/profile/' + this.props.post.author_username}><b>@{this.props.post.author_username}</b></Link>: {this.props.post.caption}
                        </div>
                    </div>
                    Find it on <a className="unstyled_link" href={this.props.post.image_unsplash_url} rel="noreferrer" target="_blank">Unsplash</a>
                </div>
            </div>
        );
    }
}

export default Post;