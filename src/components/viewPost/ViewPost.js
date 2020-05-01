import React from 'react'
import {connect} from 'react-redux'
import Comment from './Comment'


class ViewPost extends React.Component {
    render() {
        return (
                <div>
                    <h3>{this.props.data.selectedPost.title}</h3>
                    <p>{this.props.data.selectedPost.body}</p>
                    <div className="ui inverted divider"></div>
                    <div className="ui comments">
                        <Comment />
                    </div>
                </div>
            )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(ViewPost);