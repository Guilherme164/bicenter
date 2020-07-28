import React from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/';

function CadastroCategoria(){
    return (
        <div>
        <PageDefault>
        <h1>Cadastro vídeo</h1>
        <Link to="/">
            Ir Para Home
        </Link>
        </PageDefault>
        </div>
    );
}
export default CadastroCategoria;