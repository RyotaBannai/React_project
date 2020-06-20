import React from "react";
import { Count001 } from '../organisms/Count001'

interface Props {

}

export const Main: React.FC<Props> = () => {
    return (<div>
            <Count001 message={'Todo List'}/>
        </div>
    )
};