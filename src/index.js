import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/index.js';
import CadastroVideo from './pages/cadastro/Video';
//
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/Categoria';

//criar component notfound 404

ReactDOM.render(
  <BrowserRouter>
    {/* browserRouter representa a rota do browser(entradas) switch seria o if da rota, e o route a rota pro component */}
    <Switch>
    {/*comando exact para forçar a url correta por exemplo
        <Route path="/" component={Home} exact/>
    */}
    <Route path="/" component={Home} exact/>
    <Route path="/cadastro/video" component={CadastroVideo} exact/>
    <Route path="/cadastro/categoria" component={CadastroCategoria}/>
    
    {/*se não colocar o path vira rota alternativa, tipo o 404*/}
    <Route component={Home}/>
    
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
