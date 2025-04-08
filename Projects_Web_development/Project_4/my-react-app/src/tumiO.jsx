import { useState } from "react"

export default function TumiO() {
    
    const [times, setTimes] = useState(0);
    const sixes = () => {
        const newTimes = times + 1;
        setTimes(newTimes);
    };
    return (
        <>
            <button onClick={sixes}>click-2</button>
            <li>hello: {times}</li>
        </>
    );
};