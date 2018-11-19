import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Content from './Content';
import AddContent from './AddContent';

const ContentRouter = () => (
    <div>
      <Switch>
        <Route exact path='/' component={Content}/>
        <Route path='/addcontent' component={AddContent}/>
      </Switch>
    </div>
  )
  
  export default ContentRouter;
  