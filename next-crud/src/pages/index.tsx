import { useEffect, useState } from 'react'
import ColecaoCliente from '../backend/db/ColecaoCliente'
import Botao from '../components/Botão'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import ClienteRepositorio from '../core/ClienteRepositorio'
import useClientes from '../hooks/useClientes'

export default function Home() {

  // const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  // const [clientes, setClientes] = useState<Cliente[]>([])
  // const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  // const repo: ClienteRepositorio = new ColecaoCliente()
 
  // useEffect(obterTodos, [])

  // function obterTodos() {
  //   repo.obterTodos().then(clientes => {
  //     setClientes(clientes)
  //     setVisivel('tabela')
  //   })
  // }

  // function clienteSelecionado(cliente: Cliente) {
  //   setCliente(cliente)
  //   setVisivel('form')
  // }

  // async function clienteExcluido(cliente: Cliente) {
  //   await repo.excluir(cliente)
  //   obterTodos()
  // }

  // function novoCliente() {
  //   setCliente(Cliente.vazio())
  //   setVisivel('form')
  // }

  // async function salvarCliente(cliente: Cliente) {
  //   await repo.salvar(cliente)
  //   obterTodos()
  // }

  const {
    selecionarCliente, 
    excluirCliente,     
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    tabelaVisivel,
    exibirTabela
} = useClientes()

  return (
    <div  className={
      `
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
      `
    }>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
            <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4 "
                onClick={novoCliente}
              > Novo Cliente </Botao>
            </div>
            <Tabela clientes={clientes} 
              clienteSelecionado={selecionarCliente} 
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario 
            cliente={cliente}
            cancelado={exibirTabela}
            clienteMudou={salvarCliente}
          />
        )}

      </Layout>
    </div>
  )
}
