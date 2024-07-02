# Tu Dramas API

Tu Dramas é uma API para uma plataforma online de visualização de doramas. Esta documentação descreve os endpoints disponíveis para autenticação de usuários, gerenciamento de doramas e comentários.

## Instalação
npm install => Instalação das Dependências
node app.js => Executar o servidor
**Precisa ter o Node e NPM instalados**

## Índice

- [Usuários](#usuários)
  - [Registrar](#registrar)
  - [Login](#login)
- [Dramas](#dramas)
  - [Criar Drama](#criar-drama)
  - [Obter Todos os Dramas](#obter-todos-os-dramas)
  - [Obter Drama por ID](#obter-drama-por-id)
  - [Atualizar Drama por ID](#atualizar-drama-por-id)
  - [Deletar Drama por ID](#deletar-drama-por-id)
- [Comentários](#comentários)
  - [Criar Comentário](#criar-comentário)
  - [Obter Todos os Comentários](#obter-todos-os-comentários)
  - [Obter Comentário por ID](#obter-comentário-por-id)
  - [Atualizar Comentário por ID](#atualizar-comentário-por-id)
  - [Deletar Comentário por ID](#deletar-comentário-por-id)

## Usuários

### Registrar

**POST /usuario/register**

Registra um novo usuário.

**Request Body:**
```json
{
 "name": "string",
 "email": "string",
 "idade": "string, (formato: date)",
 "password": "string"
}
```
**Responses:**

- **200**: Usuário registrado com sucesso.
- **400**: Erro na requisição.

### Login

**POST /usuario/login**

Faz login de um usuário.

**Request Body:**
```json
{
 "email": "string",
 "password": "string"
}
```
**Responses:**

- **200**: Login realizado com sucesso.
- **400**: Erro na requisição.

## Dramas

### Criar Drama

**POST /dramas**

Cria um novo drama.

**Request Body:**
```json
{
 "name": "string",
 "origem": "string",
 "genero": "string",
 "imagem": "string",
 "link": "string"
}
```
**Responses:**

- **200**: Drama criado com sucesso.
- **400**: Erro na requisição.

### Obter Todos os Dramas

**GET /dramas**

Retorna uma lista de dramas.

**Responses:**

- **200**: Lista de dramas.
- **500**: Erro no servidor.

### Obter Drama por ID

**GET /dramas/{id}**

Retorna um drama pelo ID.

**Parameters:**

- `id`: integer (ID do drama)

**Responses:**

- **200**: Drama encontrado.
- **404**: Drama não encontrado.

### Atualizar Drama por ID

**PUT /dramas/{id}**

Atualiza um drama pelo ID.

**Parameters:**

- `id`: integer (ID do drama)

**Request Body:**
```json
{
 "name": "string",
 "origem": "string",
 "genero": "string",
 "imagem": "string",
 "link": "string"
}
```
**Responses:**

- **200**: Drama atualizado com sucesso.
- **400**: Erro na requisição.
- **404**: Drama não encontrado.

### Deletar Drama por ID

**DELETE /dramas/{id}**

Deleta um drama pelo ID.

**Parameters:**

- `id`: integer (ID do drama)

**Responses:**

- **200**: Drama deletado com sucesso.
- **404**: Drama não encontrado.

## Comentários

### Criar Comentário

**POST /comentarios**

Cria um novo comentário.

**Request Body:**
```json
{
 "name": "string",
 "comentario": "string",
 "dramaId": "integer"
}
```
**Responses:**

- **200**: Comentário criado com sucesso.
- **400**: Erro na requisição.

### Obter Todos os Comentários

**GET /comentarios**

Retorna uma lista de comentários.

**Responses:**

- **200**: Lista de comentários.
- **500**: Erro no servidor.

### Obter Comentário por ID

**GET /comentarios/{id}**

Retorna um comentário pelo ID.

**Parameters:**

- `id`: integer (ID do comentário)

**Responses:**

- **200**: Comentário encontrado.
- **404**: Comentário não encontrado.

### Atualizar Comentário por ID

**PUT /comentarios/{id}**

Atualiza um comentário pelo ID.

**Parameters:**

- `id`: integer (ID do comentário)

**Request Body:**
```json
{
 "name": "string",
 "comentario": "string",
 "dramaId": "integer"
}
```
**Responses:**

- **200**: Comentário atualizado com sucesso.
- **400**: Erro na requisição.
- **404**: Comentário não encontrado.

### Deletar Comentário por ID

**DELETE /comentarios/{id}**

Deleta um comentário pelo ID.

**Parameters:**

- `id`: integer (ID do comentário)

**Responses:**

- **200**: Comentário deletado com sucesso.
- **404**: Comentário não encontrado.