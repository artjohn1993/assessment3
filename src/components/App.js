import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './main'
import CreatePost from './post/CreatePost';
import ViewPost from './viewPost/ViewPost';

const App = () => {
    return (
        <div className='ui container'>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Main} />
                    <Route path="/create-post" exact component={CreatePost} />
                    <Route path="/view-post" exact component={ViewPost} />
                </div>
            </BrowserRouter>
        </div>
        )
}

export default App;