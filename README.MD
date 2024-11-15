# MAD MUSIC

Aplicação com CRUD básico para a plataforma fictícia MAD Music, onde as músicas cadastradas podem ser adicionadas a uma playlist criada por um usuário.

## Installation

Clone o [repositório](https://github.com/VitorOliveira-dev/mad_music.git) para obter os arquivos.

Crie um cluster no MongoDB seguindo a [documentação](https://www.mongodb.com/pt-br/docs/manual/).

Crie um arquivo .env na raíz do projeto com a configuração abaixo:

```env
MONGODB_URI=<URI DO DRIVER DE CONEXÃO COM MONGOOSE>
PORT=3000
```

Navegue até a pasta raíz do projeto e instale os pacotes necessários
```bash
npm install
```

## Usage

Execute o projeto

```bash
npm run dev
```

A aplicação indicará o funcionamento na porta definida no arquivo. env

Importe a collection do Postman localizada na raíz do projeto ou utilize outra ferramenta de sua preferência.

## Documentation

Acesse a documentação no seu navegador em 
```
http://localhost:<PORT>/api-docs/ 
```

