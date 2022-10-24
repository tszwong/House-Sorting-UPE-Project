/*
component for a single group; includes template and dynamically rendered member list
*/

const Group = props => {
    const [name, members] = props.info

    return (
        <div className="col-sm" id={name}>
            <h3 className="team-title">{name}</h3>
            <p className="members-title">Members</p>
            <br />
            <div className="members-display">
                {members.map((member, i) => {return (
                    <h5 id={i}>{member}</h5>
                )})}
            </div>
        </div>
    )
}

/*
container for groups, dynamically renders up to ROWSIZE groups
*/
const Row = props => {
    return (
        <div id="output" className="row">
            {props.groups.map((group, i) => {return (
                <Group info={group} key={i} />
            )})}
        </div>
    )
}

/*
container for rows of teams, creates and renders rows based on groups state
*/
const OutputRows = props => {

    const ROWSIZE = 4  // can change if we want more/less elements per row

    // turns array into array of rows of size ROWSIZE; if uneven division, last row will be shorter
    const splitIntoRows = groups => {
        const result = []
        for (let i = 0; i < groups.length; i += ROWSIZE) {
            result.push(groups.slice(i, i+ROWSIZE))
        }
        return result
    }

    return (
        <div className="container">
            {splitIntoRows(props.groups).map((groups, i)=> {return (
                <Row groups={groups} key={i} />
            )})}
        </div>
    )
}