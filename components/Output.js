const Group = props => {
    return (
        <div className="col-sm" id="team-1">
            <h3 class="team-title">Team 1</h3>
            <p class="members-title">Members</p>
            <br />
            <div class="members-display">
                <h5>Example</h5><h5>Example</h5><h5>Example</h5><h5>Example</h5><h5>Example</h5>
            </div>
        </div>
    )
}

const Row = props => {
    return (
        <div id="output" className="row">
            
        </div>
    )
}

const OutputRows = props => {
    return (
        <div className="container">
            <p>{props.groups}</p>
        </div>
    )
}