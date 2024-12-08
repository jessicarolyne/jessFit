# FitControl App
Este repositório contém o código-fonte de um aplicativo de gerenciamento de treinos, desenvolvido com um backend em Laravel (PHP) e um frontend em React Native. O aplicativo permite aos usuários:
- Registrar e gerenciar suas listas de treinos.
- Controlar o tempo de cada treino (inserido manualmente na versão inicial).
- Registrar tipos de treinos e metas.
- Futuramente, integrar com dispositivos como Mi Band para sincronizar automaticamente dados de tempo e desempenho.

## Tecnologias Utilizadas
### Backend
- **Laravel (PHP)**: Framework utilizado para criar uma API RESTful que fornece os dados e funcionalidades necessárias para o aplicativo.
- Banco de Dados: **MySQL** (ou outro sistema relacional de sua escolha).
- Autenticação: **Laravel Sanctum** ou **JWT**.

### Frontend
- **React Native**: Utilizado para o desenvolvimento do aplicativo mobile para Android e iOS.
- Gerenciamento de Estado: **Redux** ou **Context API**.
- Interface de Usuário: Componentes estilizados utilizando **Styled-Components** ou **React Native Paper**.

## Funcionalidades do Projeto
### Módulos Atuais
- Cadastro de treinos e exercícios.
- Registro manual do tempo de treino.
- Classificação de tipos de treino (ex.: aeróbico, força, mobilidade).

### Funcionalidades Futuras
- Integração com dispositivos wearables (ex.: Mi Band).
- Sugestão de ajustes de treino com base em histórico.
- Controle de metas de performance.

## Estrutura do Repositório
- **/backend**: Contém o código do backend desenvolvido em Laravel.
  - **/app**: Configurações principais do Laravel.
  - **/routes**: Arquivos de rotas para as APIs.
  - **/database**: Migrations e seeds para criação e população do banco de dados.
- **/frontend**: Contém o código do frontend em React Native.
  - **/src**: Componentes, telas e contextos do aplicativo.
  - **/assets**: Ícones e recursos visuais.
 
## Requisitos
- **Backend**:
  - PHP >= 8.0
  - Composer
  - MySQL
- **Frontend**:
  - Node.js >= 18.0
  - Yarn ou NPM
  - Emulador ou dispositivo físico para testes (Android/iOS)

## Como Rodar o Projeto
### Backend
1. Clone o repositório e acesse o diretório /backend.
2. Instale as dependências:
   ```composer install```
3. Configure o arquivo `.env` com as credenciais do banco de dados.
4. Execute as migrações:
   ```php artisan migrate```
5. Inicie o servidor:
   ```php artisan serve```

## Frontend
1. Acesse o diretório /frontend.
2. Instale as dependências:
   ```
   npm install
    # ou
    yarn
   ```
3. Execute o aplicativo:
   ```
    npx react-native run-android
    # ou
    npx react-native run-ios
   ```

## Contribuição
Contribuições são bem-vindas! Por favor, siga os passos abaixo:
1. Realize um fork do repositório.
2. Crie um branch para sua feature/bugfix:
   `git checkout -b minha-feature`
3. Envie suas modificações:
   ```
    git commit -m "Adiciona nova funcionalidade"
    git push origin minha-feature
   ```
4. Abra um Pull Request.

## Licença
Este projeto está licenciado sob a [Licença MIT](https://opensource.org/license/MIT).
