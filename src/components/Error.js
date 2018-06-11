import React from 'react';
import { Alert } from 'reactstrap';

function Error({ error }) {
    return(
        <Alert color="warning">
            <strong>Warning!</strong> { error }
        </Alert>
    )

}

export default Error;