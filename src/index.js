import ReactDOM from 'react-dom';
import routesConfig from './routes/routes';

const routes = routesConfig();

import './assets/styles/toolkit.css';

ReactDOM.render(
  routes,
  document.getElementById('root')
);
