import { BrowserRouter, Router, Switch } from 'react-router-dom';
import './App.css';
import { history } from './libs/history';
import HomeIndex from './pages/HomeIndex/HomeIndex';
import Login from './pages/Login/Login';
import ModalNewTask from './pages/Modal/ModalNewTask';
import ModalSreach from './pages/Modal/ModalSreach';
import ProjectManagement from './pages/ProjectManagement/ProjectManagement';
import ProjectSetting from './pages/ProjectSetting/ProjectSetting';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';


function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        {/* <UserTemplate exact path="/login" Component={Login} /> */}
        <HomeTemplate exact path="/homeindex" Component={HomeIndex} />
        <HomeTemplate exact path="/project" Component={ProjectSetting} />
        <HomeTemplate exact path="/projectmanagement" Component={ProjectManagement} />
        <HomeTemplate exact path="/modalsreach" Component={ModalSreach} />
        <HomeTemplate exact path="/" Component={HomeIndex} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
