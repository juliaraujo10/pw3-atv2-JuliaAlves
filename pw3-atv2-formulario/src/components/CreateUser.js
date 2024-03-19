import React, { useState } from 'react';
import axios from 'axios';

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

        let user = JSON.stringify({name: name, cpf: cpf, rg: rg, telefone: telefone, telresponsavel: telresponsavel, email: email, datanasc: datanasc});
        console.log(user);

        //AXIOS AQUI!
        axios.post('https://reqres.in/api/users', user)
            .then((response) => {
                console.log(response);
                // alert(response)
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }

    function applyCPFFormat(value) {
        return value
            .replace(/\D/g, '') 
            .replace(/(\d{3})(\d)/, '$1.$2') 
            .replace(/(\d{3})(\d)/, '$1.$2') 
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
    }

    function applyRGFormat(value) {
        return value
            .replace(/\D/g, '') 
            .replace(/(\d{2})(\d)/, '$1.$2') 
            .replace(/(\d{3})(\d)/, '$1.$2') 
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    function applyTelefoneFormat(value) {
        return value
            .replace(/\D/g, '') 
            .slice(0, 11) 
            .replace(/^(\d{2})(\d)/g, '($1) $2') 
            .replace(/(\d{5})(\d)/, '$1-$2'); 
    }

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    return (
        <form onSubmit={createUser} className='form'>
            <h1>FORMULÁRIO ALUNO</h1>

            <input
                type='text'
                placeholder='DIGITE AQUI SEU NOME'
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <input
                type="text"
                maxLength='14'
                placeholder='DIGITE AQUI SEU CPF'
                value={applyCPFFormat(cpf)}
                onChange={(event) => setCPF(event.target.value)}
            />

            <input
                type='text'
                maxLength='12' 
                placeholder='DIGITE SEU RG'
                value={applyRGFormat(rg)}
                onChange={(event) => setRG(event.target.value)}
            />

            <input
                type='text'
                maxLength='16' 
                placeholder='DIGITE SEU TELEFONE (COM DDD)'
                value={applyTelefoneFormat(telefone)}
                onChange={(event) => setTelefone(event.target.value)}
            />


            <input
                type='text'
                maxLength='16' 
                placeholder='DIGITE O TELEFONE DO RESPONSÁVEL (COM DDD)'
                value={applyTelefoneFormat(telresponsavel)}
                onChange={(event) => setTelResponsavel(event.target.value)}
            />

            <input
                type='text'
                placeholder='DIGITE AQUI SEU EMAIL'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            {email && !validateEmail(email) && <p style={{color: 'red'}}>Formato de e-mail inválido</p>}

            <input
                type='date'
                placeholder='DIGITE AQUI SUA DATA DE NASCIMENTO'
                value={datanasc}
                onChange={(event) => setDataNasc(event.target.value)}
            />
            <button type='submit'>CADASTRAR</button>
        </form>
    );
}

export default CreateUser;
