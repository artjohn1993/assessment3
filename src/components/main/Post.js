import React from 'react';
import ItemPost from './ItemPost';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class Post extends React.Component {
    
    getTotalPost = () => {
        if(this.props.data.post != null) {
            return this.props.data.post.length
        }
        else {
            return 0
        }
    }

    renderPost = () => {
        if(this.props.data.selectedMember != null) {
            return (
                <div>
                    <h2>{this.props.data.selectedMember.name} #{this.getTotalPost()} Post</h2>
                    <Link to="/create-post"><button className="ui button primary fluid">Create New Post</button></Link>
                    
                    <ItemPost />
                </div>
            )
        }
        else {
            return (
                <div className="ui floating message" style={{marginTop:'60px'}}>
                        <p>Please select a user first</p>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                { this.renderPost() }
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Post);