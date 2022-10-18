const MemberInput = props => {
    const [input, setInput] = React.useState("")

    const setMembers = async () => {
        let memberList = input.split("\n").map(s => s.trim())
        if (input === "") {
            memberList = []
        }
        props.setMembers(memberList)
    }

    return (
        <div className="members">
            <p>Members</p>
            <textarea id="membersInput" name="" cols="43"rows="10" placeholder=" Enter member name followed by new line..." 
                onChange={e => setInput(e.target.value)}/>
            <br />
            <button className="button-styles" id="assignMembersButton" type="button" value = "Submit"
                onClick={() => setMembers()} >Assign Members</button>
            <button id="reset" className="button-styles">Clear</button>
        </div>
    )
}

const GroupInput = props => {
    const [input, setInput] = React.useState("")

    const setGroups = () => {
        let groupList = input.split("\n").map(s => s.trim())
        if (input === "") {
            groupList = []
        }
        props.setGroups(groupList)
    }

    return (
        <div className="groups">
            <p>Group Names</p>
            <textarea id="groupInput" name="" cols="43"rows="10" placeholder=" Enter team name followed by new line..." 
                onChange={e => setInput(e.target.value)}/>
            <br />
            <button className="button-styles" id="createTeamsButton" type="button" value = "Submit"
                onClick={() => setGroups()}>Create Teams</button>
        </div>
    )
}