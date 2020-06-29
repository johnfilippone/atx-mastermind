import React from 'react';
import Layout from './core/Layout';
import { Helmet } from 'react-helmet';

const App = () => {
    const head = () => (
        <Helmet>
            <meta charSet="utf-8" />
            <title>Mastermind Mesh</title>
            <link rel="canonical" href="https://mastermindmesh.com" />
        </Helmet>
    );
    return (
        <Layout>
            {head()}
            <div className="col-md-6 offset-md-3 text-center">
                <h1 className="p-5">Welcome to MastermindMesh.com</h1>
                <h3>Where motivated individuals come to find and organize mastermind groups.</h3>
                <hr />
                <p className="lead">
                    A mastermind is a group of individuals who meet regularly to help eachother succeed usually in a specific industry, interest, or activity.
                </p>
            </div>
        </Layout>
    );
};

export default App;
