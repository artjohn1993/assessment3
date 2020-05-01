import React from 'react'
import {connect} from 'react-redux'
import faker from 'faker'
import {fetchComment} from '../../actions'

class Comment extends React.Component {

    componentDidMount() {
        this.props.fetchComment(this.props.data.selectedPost.id)
    }

    renderComment = () => {
        if(this.props.data.comments != null) {
            const renderedComment = this.props.data.comments.map((item)=> {
                return (<div className="comment" key={item.id}>
                            <a className="avatar">
                                <img src={faker.image.avatar()}/>
                            </a>
                            <div className="content">
                                <a className="author">{item.name}</a>
                                <div className="text">
                                    {item.body}
                                </div>
                            </div>
                        </div>)
            })

            return renderedComment
        } else {
            return (
                <div className="ui message">
                    <p>No Comment</p>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderComment()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return state
}

export default connect(mapStateToProps,{fetchComment})(Comment)