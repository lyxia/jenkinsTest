import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

// 按路由拆分代码
import Loadable from 'react-loadable';
const MyLoadingComponent = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};
const AsyncHome = Loadable({
    loader: () => import('./Home'),
    loading: MyLoadingComponent
});

const AsyncAbout = Loadable({
    loader: () => import('./About'),
    loading: MyLoadingComponent
});

const AsyncTopics = Loadable({
    loader: () => import('./Topics'),
    loading: MyLoadingComponent
});

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={AsyncHome}/>
            <Route path="/about" component={AsyncAbout}/>
            <Route path="/topics" component={AsyncTopics}/>
        </div>
    </Router>
)
export default BasicExample