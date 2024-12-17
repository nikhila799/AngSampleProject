import './App.css';

function App() {
  return (
   <form>
    <h1>Login Page</h1>
    <div className="ui divider"></div>
    <div className="ui form">
    <div className="field">
      <label>username</label>
      <input type="" name="username" placeholder="Username"/>
    </div>
    <div className="field">
        <label>Emailid</label>
        <input type="" name="Email"  placeholder="Emailid"/>
      </div>
    <div className="field">
      <label>password</label>
      <input type="" name="password" placeholder="Placeholder"/>
    </div>
    <button className="ui-button">Submit</button>
    </div>
   </form> 
  )
}

export default App;
