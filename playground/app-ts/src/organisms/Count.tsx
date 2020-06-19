import React from "react";
import Button from 'react-bootstrap/Button';

const Display = () => {
    return (
        <div></div>
    );
};

interface Props {

}

export const Count: React.FC<Props> = () => {
    return (<div>
            <Display />
            <Button> button </Button>
        </div>
    )
};