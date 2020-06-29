import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import axios from 'axios';
import { getCookie } from '../auth/helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Organize = ({ history }) => {
    const [values, setValues] = useState({
        buttonText: 'Submit'
    });

    const token = getCookie('token');

    const { buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/groups`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: { }
        })
            .then(response => {
                console.log('Create group success', response);
                toast.success('Create group success');
            })
            .catch(error => {
                console.log('Create group error', error.response.data.error);
                toast.error(error.response.data.error);
            });
    };

    const updateForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Group Name</label>
                <input defaultValue='' type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Focus</label>
                <input value='' type="text" className="form-control" />
            </div>

            <div>
                <button className="btn btn-primary" onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
        </form>
    );

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                <h1 className="pt-5 text-center">Organize</h1>
                <p className="lead text-center">Create a new mastermind group</p>
                {updateForm()}
            </div>
        </Layout>
    );
};

export default Organize;

