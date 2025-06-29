function Time(){
    let currTime = new Date();
    return (<p>This is the current time: {currTime.toLocaleDateString()} - {currTime.toLocaleTimeString()}</p>)
}

export default Time;