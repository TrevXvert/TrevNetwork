import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router';
import store from "./redux/redux-store"
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
   <BrowserRouter basename={process.env.PUBLIC_URL}>

      <Provider store={store}>
         <App />
      </Provider>

   </BrowserRouter>
);





