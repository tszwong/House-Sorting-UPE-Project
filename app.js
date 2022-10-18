const App = () => {

  const [members, setMembers] = React.useState([])
  const [groups, setGroups] = React.useState([])
  const [groupObj, setGroupObj] = React.useState({})

  const createGroups = () => {
    // create object to track results
    const result = {}
    groups.forEach((group, i) => {
      result[group] = []
    })

    if (Object.keys(result).length === 0) {
      setGroupObj(result)
      return
    }

    // assign members to groups
    const maxGroupLength = Math.trunc(members.length / groups.length)
    members.forEach((member, i) => {
      let validGroups = Object.entries(result).filter(x => x[1].length < maxGroupLength)
      if (validGroups.length === 0) {
        validGroups = Object.entries(result).filter(x => x[1].length < maxGroupLength + 1)
      }
      const validGroupNum = Math.floor(Math.random() * validGroups.length)
      const assignedGroup = validGroups[validGroupNum][0]
      result[assignedGroup].push(member)
    })

    setGroupObj(result)
  }

  React.useEffect(createGroups, [members])

  return (
    <div>
      <img id="main-upe-logo" src="upelogo.jpeg" />
      <h2 className="all-caps">SORTING HAT</h2>
      <div className="contents">
        <MemberInput setMembers={setMembers} createGroups={createGroups} />
        <GroupInput setGroups={setGroups} />
      </div>

      <h2 className="all-caps" id="results">Results</h2>
      <hr />

      <OutputRows members={members} groups={groups} />
    </div>
  )
}

const domContainer = document.getElementById('react-container');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);