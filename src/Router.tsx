import { lazy, Suspense, ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Spinner } from './components';

const Characters = lazy(() => import('./pages/characters'));
const Episodes = lazy(() => import('./pages/episodes'));

const Routes = (): ReactElement => (
  <BrowserRouter>
    <Suspense
      fallback={<Spinner style={{ top: '300px', display: 'inline-block' }} />}
    >
      <Switch>
        <Route path="/" exact component={Characters} />
        <Route path="/characters" exact component={Characters} />
        <Route path="/episodes" exact component={Episodes} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
