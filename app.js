const App = () => {

  const [members, setMembers] = React.useState([])
  const [groups, setGroups] = React.useState([])

  return (
    <div>
      <img id="main-upe-logo" src="upelogo.jpeg" />
      <h2 className="all-caps">SORTING HAT</h2>
      <div className="contents">
        <MemberInput setMembers={setMembers} />
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