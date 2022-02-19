import react from "react";
import {Spinner, LockBody, ReleaseBody, Picture} from "./style/loading"

function Loading({ src, ...restProps }) {
   
    return ( 
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={ `/images/users/${src}.png`}/> 
        </Spinner>
     );
}

Loading.ReleaseBody = function LoadingReleaseBody(){
    return <ReleaseBody />
}

export default Loading;