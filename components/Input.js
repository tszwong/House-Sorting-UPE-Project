/*
Component that takes in input for members, passes up to root
*/
const MemberInput = props => {
    const [input, setInput] = React.useState("")  // current state of textfield

    // converts parameter to list; assigns to state in root
    const setMembersToInput = newMembers => {
        let memberList = newMembers.split("\n").map(s => s.trim()).filter(s => s !== "")
        if (input === "") {
            memberList = []
        }
        props.setMembers(memberList)
    }

    // clears textfield, passes change to states
    const clear = () => {
        document.getElementById("membersInput").value = ""
        setInput("")
        setMembersToInput("")
    }

    return (
        <div className="members">
            <p>Members</p>
            <textarea id="membersInput" name="" cols="43"rows="10" placeholder=" Enter member name followed by new line..." 
                onChange={e => setInput(e.target.value)}/>
            <br />
            <button className="button-styles" id="assignMembersButton" type="button" value = "Submit"
                onClick={() => setMembersToInput(input)} >Assign Members</button>
            <button id="reset" className="button-styles"
                onClick={clear}>Clear</button>
        </div>
    )
}

/*
Component that takes in input for groups, passes up to root
*/
const GroupInput = props => {
    const [input, setInput] = React.useState("")  // current state of textfield

    // converts input to list; assigns to state in root
    const setGroupNames = () => {
        let groupList = input.split("\n").map(s => s.trim()).filter(s => s !== "")
        if (input === "") {
            groupList = []
        }
        props.setGroupNames(groupList)
    }

    return (
        <div className="groups">
            <p>Group Names</p>
            <textarea id="groupInput" name="" cols="43"rows="10" placeholder=" Enter team name followed by new line..." 
                onChange={e => setInput(e.target.value)}/>
            <br />
            <button className="button-styles" id="createTeamsButton" type="button" value = "Submit"
                onClick={setGroupNames}>Create Teams</button>
        </div>
    )
}