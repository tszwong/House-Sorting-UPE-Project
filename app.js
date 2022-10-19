/*
root component, rendered directly to index.html
*/
const App = () => {

  const [members, setMembers] = React.useState([])
  const [groupNames, setGroupNames] = React.useState([])  // strings containing group names
  const [groups, setGroups] = React.useState([])  // contains 2-element arrays: [groupName, [members]]

  // Defines the groups variable based on current state of members and groupNames
  const createGroups = () => {
    // create object to track results
    const result = {}
    groupNames.forEach((group, i) => {
      result[group] = []
    })

    if (Object.keys(result).length === 0) {
      setGroups([])
      return
    }

    // assign members to groups
    const maxGroupLength = Math.trunc(members.length / groupNames.length)
    members.forEach((member, i) => {
      // find groups with slots remaining
      let validGroups = Object.entries(result).filter(x => x[1].length < maxGroupLength)
      if (validGroups.length === 0) {
        validGroups = Object.entries(result).filter(x => x[1].length < maxGroupLength + 1)
      }
      // assign member to random valid group
      const validGroupNum = Math.floor(Math.random() * validGroups.length)
      const assignedGroup = validGroups[validGroupNum][0]
      result[assignedGroup].push(member)
    })

    setGroups(Object.entries(result))
  }

  // run createGroups on state change
  React.useEffect(createGroups, [members, groupNames])

  // VSCode throws errors from here on for me, but everything is fine
  return (
    <div>
      <img id="main-upe-logo" src="assets/upelogo.png">
      <h2 className="all-caps">SORTING HAT</h2>
      <div className="contents">
        <MemberInput setMembers={setMembers} createGroups={createGroups} />
        <GroupInput setGroupNames={setGroupNames} />
      </div>

      <h2 className="all-caps" id="results">Results</h2>
      <hr />

      <OutputRows groups={groups} />
    </div>
  )
}


// render App to #react-container
const domContainer = document.getElementById('react-container');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
