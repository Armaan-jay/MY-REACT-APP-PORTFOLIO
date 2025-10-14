import profilepic from './assets/react.svg'

function Card(){
    return (
        <div className="card">
            <img className="profilepic" src={profilepic} alt="profile picture" ></img>
            <h2 className="card-title">React JS</h2>
            <p className="card-text">it is a framework used in prepare multiple sites</p>
        </div>
    );
}

export default Card