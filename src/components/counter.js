import React, { useState } from 'react';
import Text from '../components/button';
import Button from '../components/button';
import "./index.css"
const Counter = ({InitialCounter=0}) => {
    let [counter, setCounter] = useState(InitialCounter);
    return (<>
        <Text className={"Text-counter"} value={"Counter App"}
            style={{  fontWeight: "bold", border: "none", padding: "15px" }} />
        <br />
        <Text className={"Text-counter"} value={`Value of Counter :  ${counter}`}
            style={{ backgournd: "lightgrey" }} />
        <br />
        <Button className={"btn-inc"} value={"Increment"} onClick={() => setCounter(counter + 1)} />
        <Button className={"btn-dec"} value={"Decrement"} onClick={() => setCounter(counter - 1)} />
    </>
    )
}
export default Counter;