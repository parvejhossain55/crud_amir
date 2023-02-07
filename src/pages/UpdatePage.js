import React from 'react';
import { useParams } from 'react-router';
import UpdateForm from '../components/update/UpdateForm';

const UpdatePage = () => {
    const params = useParams();
    return (
        <div>
            <UpdateForm id={params['id']} />
        </div>
    );
};

export default UpdatePage;