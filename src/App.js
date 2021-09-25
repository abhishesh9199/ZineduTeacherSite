import React from "react";
import "./App.css";
import "./Doubts.css";
import "./ChangePassword.css";
import "./MyProfile.css";
import "./MySchedulePastClass.css";
import "./MyScheduleUpComingClasses.css";
import "./Notes.css";
import "./Page-Layout.css";
import "./MyProfile.css";
import "./MySchedulePastClass.css";
import Myprofile from "./MyProfile";
import UpComingClasses from "./UpcomingClass/UpComingClasses";
import MySchedulePastClass from "./MySchedulePastClass";
import MyScheduleUpComingClasses from "./MyScheduleUpComingClasses";
import Doubts from "./Doubts";
import Notes from "./Notes";
import Home from "./Homepage/Home";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ChangePassword from "./ChangePassword";
const App = () =>{
return (
    <div>
    {/* <Home/> */}
 <Myprofile/>
{/* <ChangePassword/> */}
{/* <UpComingClasses/> */}
{/* <MySchedulePastClass/> */}
{/* <MyScheduleUpComingClasses/> */}
{/* <Doubts/> */}
{/* <Notes/> */}
{/* <Router>
<Switch>
<Route exact path='/' component={Home} />
    <Route exact path='/MyScheduleUpComingClasses' component={MyScheduleUpComingClasses} />
    <Route exact path='/' component={MySchedulePastClass} />
    <Route exact path='/' component={Doubts} />
    <Route exact path ="/" component ={Notes} />

    </Switch>
    </Router> */}
    </div>
    )
}
export default App;