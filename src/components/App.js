import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import RandomProductInDb from './RandomProductInDb';
import ContentRowMovies from './ContentRowMovies';
import SearchProducts from './SearchProducts';
import {Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
     
      	<div id="wrapper">
        <SideBar />
        <Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/CategoriesInDb">
                <CategoriesInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>
            <Route path="/SearchProducts">
                <SearchProducts />
            </Route>
            <Switch>
                <Route exact path="/">
                </Route>
                <Route  exact path="/CategoriesInDb">
                    <CategoriesInDb />
                </Route>
                <Route  exact path="/LastMovieInDb">
                    <RandomProductInDb />
                </Route>
                <Route  exact path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
               
            </Switch>
  
        </div>
    </React.Fragment>
  );
}

export default App;
