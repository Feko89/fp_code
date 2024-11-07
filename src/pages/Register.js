import React from "react";
import './Register.css'; 

const Register = () => (
    <>
    <div class="section-1">
        <div class="pozadie-login">
            <div class="Nadpis-login">Registrácia</div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputName" class="form-label">Meno</label>
                    <input type="Name" class="form-control" id="exampleInputName" aria-describedby="nameHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputSurname" class="form-label">Priezvisko</label>
                    <input type="Surname" class="form-control" id="exampleInputName" aria-describedby="surnameHelp"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email adresa</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Heslo</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword2" class="form-label">Potvrď Heslo</label>
                    <input type="password" class="form-control" id="exampleInputPassword2"/>
                  </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                  <div class="reg">
                  <label class="form-check-label" for="exampleCheck1">Zaškrtni!</label>
                  <a class="registruj" href="registruj">Máš účet prihlás sa!!</a>
                </div>
                </div>
                <button type="submit" class="btn btn-primary">Potvrď</button>
              </form>
        </div>
    </div>
    </>);
export default Register;

