import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {createPost} from '../../actions'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';


class CreatePost extends React.Component {

    renderField({input, label}) {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.createPost(this.props.form.createPost.values.title, this.props.form.createPost.values.body, this.props.data.selectedMember.id)
        console.log(this.props.form.createPost.values)
    }

    render() {
        return (
            <div>
                <h3>Create a Post</h3>
                <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderField} label="Enter title"/>
                    <Field name="body" component={this.renderField} label="Enter body"/>
                    <div className="inline field">
                        <Link to="/">
                            <label>Go back to Menu</label>
                        </Link>
                    </div>
                    <button className="ui button primary">Post</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
     return state
}

CreatePost = connect(
    mapStateToProps,{createPost}
)(CreatePost);

export default reduxForm({
    form: 'createPost'
})(CreatePost);
