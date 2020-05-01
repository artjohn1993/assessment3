import React from 'react'
import {connect} from 'react-redux'
import '../../css/style.css'
import {selectedPost, deletePost} from '../../actions'
import { Link } from 'react-router-dom'

class ItemPost extends React.Component {

    renderItemPost = () => {
        if(this.props.data.post != null) {
            const result = this.props.data.post.map((item) => {
                return (
                    <div className="ui cards" style={{margin:'10px',width:'100%!important'}} key={item.id}>
                        <div className="card card-custom">
                            <div className="content" >
                            <div className="header">
                                {item.title}
                            </div>
                            <div className="description">
                                {item.body}
                            </div>
                            <div className="extra content" style={{marginTop:'10px'}}>
                                <div className="ui two buttons" >
                                    <Link className="ui basic green button" onClick={()=>{ this.props.selectedPost(item)}} to="/view-post">
                                        View
                                    </Link>
                                    <button className="ui basic red button" onClick={()=>{ this.props.deletePost(item)}}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                )
            })

            return <div>{result}</div>
        }
        else {
            return (
                <div className="ui segment">
                    <br></br><br></br>
                    <div className="ui active inverted dimmer">
                        <div className="ui text loader">Loading</div>
                    </div>
                    <p></p>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderItemPost()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return state
}

export default connect(mapStateToProps,{
    selectedPost,
    deletePost
})(ItemPost);