import React from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/';

function CadastroVideo(){
    return (
        <div>
        <PageDefault>
        <h1>Cadastro vídeo</h1>
        <Link to="/cadastro/categoria">
            Cadastrar Vídeo
        </Link>
        </PageDefault>
        </div>
    );
}
export default CadastroVideo;