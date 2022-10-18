const MemberInput = props => {
    const [input, setInput] = React.useState("")

    const setMembersToInput = newMembers => {
        let memberList = newMembers.split("\n").map(s => s.trim()).filter(s => s !== "")
        if (input === "") {
            memberList = []
        }
        props.setMembers(memberList)
    }

    const setMembers = () => setMembersToInput(input)

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
                onClick={setMembers} >Assign Members</button>
            <button id="reset" className="button-styles"
                onClick={clear}>Clear</button>
        </div>
    )
}

const GroupInput = props => {
    const [input, setInput] = React.useState("")

    const setGroupNames = () => {
        let groupList = input.split("\n").map(s => s.trim()).filter(s => s !== "")
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