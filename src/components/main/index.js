import React from 'react'
import Member from './Member'
import Post from './Post'

const Main = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <Member />
                </div>
                <div className="column eight wide">
                    <Post />
                </div>
            </div>
        </div>
    )
}

export default Main;