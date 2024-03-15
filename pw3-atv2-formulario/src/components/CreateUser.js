import { useState } from 'react';
import axios from 'axios';
import { cpfMask } from './Mask';

function CreateUser() {

    const [name, setName] = useState("");
    const [cpf, setCPF] = useState("");
    const [rg, setRG] = useState("");
    const [telefone, setTelefone] = useState("");
    const [telresponsavel, setTelResponsavel] = useState("");
    const [email, setEmail] = useState("");
    const [datanasc, setDataNasc] = useState("");

    function createUser(event) {

        event.preventDefault();

        let user = JSON.stringify({name:name, cpf:cpf, rg:rg, telefone:telefone, telresponsavel:telresponsavel, email:email, datanasc:datanasc});
        console.log(user); 

        //AXIOS AQUI!
        axios.post('https://reqres.in/api/users', user)
            .then((response)=> {
                console.log(response);
                // alert(response)
            })
            .catch((error)=> {
                console.log(error);
                alert(error)
            });

            this.state = { documentId: '' }
            this.handlechange = this.handlechange.bind(this);
        }


    return (
    <form onSubmit={createUser} className='form'>
            <h1>FORMULÁRIO ALUNO</h1>

            <input
                type='text'
                placeholder='DIGITE AQUI SEU NOME'
                value={name}
                onChange={(event) =>{setName(event.target.value)}}
            />

            <input
                type="text" 
                maxLength='14'
			    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
                placeholder='DIGITE AQUI SEU CPF'
                value={cpf}
                onChange={(event) =>{setCPF (event.target.value)}}
            />
            
            <input
                type='text'
                placeholder='DIGITE SEU RG'
                value={rg}
                onChange={(event) =>{setRG(event.target.value)}}
            />

            <input
                type='text'
                placeholder='DIGITE SEU TELEFONE'
                value={telefone}
                onChange={(event) =>{setTelefone(event.target.value)}}
            />

            
            <input
                type='number'
                placeholder='DIGITE O TELEFONE DO RESPONSAVEL'
                value={telresponsavel}
                onChange={(event) =>{setTelResponsavel(event.target.value)}}
            />

            <input
                type='text'
                placeholder='DIGITE AQUI SEU EMAIL'
                value={email}
                onChange={(event) =>{setEmail(event.target.value)}}
            />

            <input
                type='date'
                placeholder='DIGITE AQUI SUA DATA DE NASCIMENTO'
                value={datanasc}
                onChange={(event) =>{setDataNasc(event.target.value)}}
            />
            <button type='submit'>CADASTRAR</button>
    </form>
)};

export default CreateUser;