function Student(){
    return(
        <div className="Student">
            <p>Name: {Props.name}</p>
            <p>Age: {Props.age}</p>
            <p>Student: {props.isStudent}</p>
        </div>
    );
}

export default Student