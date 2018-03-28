# Notes

Teste Frontend https://gist.github.com/darlanmendonca/c99527fc29e0a9e2c7a4e1b3b4c5c1ae

### Prerequisitos

Este projeto foi desenvolvido utilizando o Framework Next.js, standard para padronizar o código e jest para os tests


### Instalação

Instale os pré-requisitos com os seguintes comandos

```
npm install next -global
npm install standard --global
npm install jest --global

```

Instale as dependências

```
npm i
```



## Rodando os Testes

Os testes são executados pela biblioteca Jest, segue o comando para executar todos os testes

```
npm run test
```


### And coding style tests

Este projeto esta utilizando styled-jsx para prover estilos isolados no escopo do componente.

```
export default ({ title, date }) => {
  return <div>
    <div className="title">
      {title}
    </div>
    <div className="date">
      {date} 
    </div>
    <style jsx>{`
      .title {
        font-size: 15px;
        margin-bottom: 3px;
        color: #000;
      }

      .date {
        font-size: 12px;
        color: #C7C8CA;
      }

    `}</style>
  </div>
}

```

## Executar

Para desenvolver utilize o comando abaixo para 'subir' a aplicação em modo development

```
npm run dev
```

## Construído com

* [Next.js](https://github.com/zeit/next.js/) - The web framework used
* [Jest](https://facebook.github.io/jest/) - Javascript Testing
* [Standard](https://github.com/standard/standard) - Standard Code Style


## Authors

* **Danilo Miranda** - *Initial work* - [DaniloMiranda](https://github.com/danilomiranda)


