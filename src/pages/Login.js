import React from "react";
import { Link } from 'react-router-dom';

import './Login.css'; 

const Login = () => (
    <div class="section-1">
        <div class="pozadie-login">
            <div class="Nadpis-login">Prihlás sa</div>
            <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email adresa</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Heslo</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                  <div class="reg">
                  <label class="form-check-label" for="exampleCheck1">Zaškrtni!</label>
                  <Link class="registruj" to="/register">Nemáš účet zaregistruj sa!!</Link>
                </div>
                </div>
                <button type="submit" class="btn btn-primary">Potvrď</button>
              </form>
        </div>
    </div>);
export default Login;

