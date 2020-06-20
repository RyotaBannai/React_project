import React from "react";
import { Todos } from '../organisms/Todos'

interface Props {

}

export const Main: React.FC<Props> = () => {
    return (<div>
            <Todos message={'Todo List'}/>
        </div>
    )
};