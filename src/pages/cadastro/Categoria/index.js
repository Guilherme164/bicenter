import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      // chave: nome, descricao, etc
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(inf_evento) {
    setValue(inf_evento.target.getAttribute('name'), inf_evento.target.value);
  }

  useEffect(() =>{
    console.log("oi");
    
    const URL= 'http://localhost:3004/categoria';
    
    fetch(URL).then( async (respostaDoServidor)=> {
      //transforma em json
      const resposta = await respostaDoServidor.json();
      
      //desctruct do objeto com o setcategorias
      setCategorias([
      ...resposta,

      ]);
    });   
  },[]);



  return (
    <div>
      <PageDefault>

        <h1>
          Cadastro vídeo:
          {values.nome}
        </h1>

        <form onSubmit={function handleSubmit(infosdoevento) {
          infosdoevento.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);
          setValues({});
        }}
        >

          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />
         
          <FormField
          label="Descrição: "
          type="textarea"
          name="descricao"
          value={ values.descricao }
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />          
          <Button>Cadastrar</Button>
        </form>

        {categorias.length===0 && (
        <div>
          Loading...
        </div>
        )}
        <ul>
          {categorias.map((categoria, indice) => (
            /* concatena o indice que sempre vai ser os segundo parametro da map com a categoria */
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          ))}
        </ul>

        <Link to="/">
          Ir Para Home
        </Link>
      </PageDefault>
    </div>
  );
}
export default CadastroCategoria;
