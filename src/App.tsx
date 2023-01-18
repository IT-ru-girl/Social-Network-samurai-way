import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route,} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {ActionType, StoreType,} from './redux/state';


type AppType = {
    store: StoreType
    dispatch : (action: ActionType)=> void
}

function App(props: AppType) {

    const state = props.store.getState();


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                {/*<Route path="/dialogs" component={Dialogs}/>*/}
                {/*<Route path="/profile" component={Profile}/>*/}
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <Dialogs posts={state.profilePage.posts} dialogs={state.dialogsPage.dialogs}
                                                  messages={state.dialogsPage.messages}
                                                  // addMessage={props.store.addMessage.bind(props.store)

                                                  dispatch ={props.dispatch}
                           />}/>

                    <Route path="/profile/" render={() => <Profile postMessage={state.profilePage.newPostText}
                                                                   posts={state.profilePage.posts}
                                                                   // addPostCallback={props.store.addPost.bind(props.store)}
                                                            dispatch ={props.dispatch}
                                                                   />}/>

                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    {/*<Dialogs/>*/}
                    {/*<Profile/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
