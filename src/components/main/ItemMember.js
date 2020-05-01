import React from 'react'
import {connect} from 'react-redux';
import {fetchMember, selectedMember, fetchPost} from '../../actions'

class ItemMember extends React.Component {
    
    componentDidMount() {
        this.props.fetchMember()
    }

    selectedMember = (information) => {
        this.props.selectedMember(information)
        this.props.fetchPost(information.id)
    }

    renderedMember = () => {
        if(this.props.data.member == null) {
            return <div></div>
        }
        else {
            const renderedMember = this.props.data.member.map((item) => {
                return (
                    <div className="ui cards" style={{margin:'10px',width:'100%!important'}} key={item.id}>
                        <div className="card card-custom" onClick={()=>{this.selectedMember(item)}}>
                            <div className="content" >
                            <div className="header">
                                {item.name}
                            </div>
                            <div className="description">
                                {item.company.name}
                            </div>
                        </div>
                        </div>
                    </div>
                )
            })

        return renderedMember;
        }
    }

    render() {
        return (
            <div>{this.renderedMember()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps,{
    fetchMember,
    selectedMember,
    fetchPost
})(ItemMember);