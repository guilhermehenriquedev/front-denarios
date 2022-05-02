import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Link from 'next/link';
import styles from '@/styles/main.module.scss'
import AuthContext from '@/context/AuthContext'

export default function SignInPage() {
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signin, error } = useContext(AuthContext)

  useEffect(() => error && toast.error(error))

  const handleSubmit = (e) => {
    e.preventDefault();
    signin({email, password});
  }
  return (
    <>
      <div className={styles.auth}>

        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type="text"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='password'>Senha</label>
            <input
              type="password"
              value={password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="Entrar" />
        </form>
        <Link href="/auth/signup">
          <p>Cadastre</p>
        </Link>
      </div>
    </>
  )
}