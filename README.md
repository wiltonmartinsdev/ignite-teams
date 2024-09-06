## Ignite Teams

Ignite Teams é uma aplicação mobile desenvolvida com o objetivo de ajudar a organizar pessoas que se reúnem para jogar em turmas, por exemplo, tem aquelas pessoas que se reúnem com a turma do trabalho para jogar no final de semana, tem pessoas que se reúnem durante a semana para jogar com uma turma de amigos e assim por diante.


## 🎨 Stacks utilizadas

- **React Native** - Uma biblioteca de código aberto que permite o desenvolvimento de aplicativos móveis para iOS e Android usando JavaScript e React. Com React Native, é possível criar aplicações nativas com a mesma base de código.
- **Expo** - Um conjunto de ferramentas e serviços que simplifica o desenvolvimento de aplicativos React Native, permitindo a prototipagem rápida, testes em dispositivos físicos e fácil integração com diversas bibliotecas nativas.
- **Styled-Component** - Biblioteca para estilização de componentes em React Native usando styled-components.
- **React Navigation** - Biblioteca para navegação entre telas na aplicação.

## 🛠️ Pré-requisitos

-   Node.js instalado na máquina - versão 20.17.0-LTS ou superior .
-   NPM (Node Package Manager) para instalar as dependências necessárias do projeto.

## 🛠️ Instalação

- Clone o repositório, com o comando abaixo, no seu terminal:
   - Utizando HTTPS `https://github.com/wiltonmartinsdev/ignite-teams.git` ou
   - Utilizando SSH: `git@github.com:wiltonmartinsdev/ignite-teams.git`.
- Acesse o diretório do projeto: `cd ignite-teams`.
- Certifique-se de ter o Node.js e o NPM instalados em sua máquina e depois digite no terminal o comando abaixo para instalar todas as dependências necessárias do projeto.

      npm install
    
## 🚀 Execução da Aplicação

-   Após instalar todas as dependências necessárias do projeto, agora poderá executá-lo da seguinte maneira:
-   Digite no terminal o comando abaixo:

          npm run android ou ios

          Após esse comando podemos testar a aplicação.
    
## ✨ Funcionalidades

- **Criar novas turmas:** Adicione quantas turmas desejar, como grupos de amigos, times do trabalho, etc.
- **Criar novos participantes:** Adicione participantes a uma turma existente para gerenciar a equipe ou grupo.
- **Validação de nomes:** A aplicação valida se já existe uma turma ou participante com o mesmo nome para evitar duplicidades.
- **Gerenciar participantes:** Em cada turma, você pode adicionar e remover participantes conforme necessário. Os participantes podem ser removidos de forma individual.
- **Deletar turmas:** Permite deletar turmas inteiras, com uma confirmação de exclusão para evitar remoções acidentais.

## 📊 Status do Projeto

-  A aplicação encontra-se finalizada, mas, podendo ser implementada novas funcionalidades no futuro.


## 📄 Licença

![GitHub License](https://img.shields.io/github/license/wiltonmartinsdev/next-note)


## 📚 Aprendizados

Durante o desenvolvimento da aplicação Ignite Teams, aprendi e refinei diversos conhecimentos relacionados ao desenvolvimento mobile, gerenciamento de estados, navegação e boas práticas de desenvolvimento. Alguns dos principais aprendizados incluem:

**1 - Gerenciamento de Estado com Hooks:** 
- Utilizei useState, useEffect, useCallback e useFocusEffect para controlar o estado e lidar com efeitos colaterais, como chamadas assíncronas e navegação entre telas. O useFocusEffect foi particularmente útil para garantir que certas ações, como a atualização das turmas, fossem executadas sempre que a tela entrasse em foco.
- A implementação de lógica para buscar e armazenar dados no local storage reforçou a importância do uso eficiente de hooks e a necessidade de gerenciar o estado de carregamento (isLoading).

**2 - Navegação entre Telas com React Navigation** 
- Aprendi a configurar a navegação entre telas usando React Navigation, lidando com a passagem de parâmetros de forma eficiente entre as telas de turmas e participantes.
- Também implementei estratégias de navegação como a confirmação de exclusão de turmas e o retorno para telas anteriores após realizar ações.

**3 - Armazenamento Local com AsyncStorage** 
- Através do uso do AsyncStorage, consegui armazenar de forma persistente os dados das turmas e participantes no dispositivo, garantindo que as informações permanecessem salvas mesmo após o fechamento do app.
- Trabalhei também com a leitura e escrita de dados de forma assíncrona, reforçando os conceitos de promessas e gerenciamento de dados localmente no dispositivo.


**4 - Estilização com Styled-component** 
- A aplicação de styled-components foi uma ótima oportunidade para criar componentes com estilos encapsulados, facilitando a manutenção e reutilização de estilos de maneira eficiente. A estilização condicional também me permitiu criar layouts dinâmicos e responsivos.

**5 - Validação e Boas Práticas** 
- Implementei validações para garantir que não fosse possível cadastrar turmas e participantes com nomes duplicados, melhorando a experiência do usuário e reforçando a importância de prever cenários que podem gerar inconsistências.
- Além disso, adotei boas práticas de código, como modularização e organização da estrutura do projeto, seguindo padrões que melhoram a legibilidade e escalabilidade da aplicação.

**6 - Componentização** 
- Reforcei o conceito de componentização ao dividir a aplicação em componentes reutilizáveis como Header, GroupCard, Button, e ListEmpty. Isso facilitou a manutenção e possibilitou a criação de uma base de código mais limpa e organizada.

**7 - Experiência com Expo** 
- Utilizei o Expo para configurar rapidamente o ambiente de desenvolvimento e testar a aplicação em diferentes dispositivos sem precisar de uma configuração complexa e isso facilitou o fluxo de desenvolvimento.

Esses aprendizados foram valiosos para consolidar meus conhecimentos em React Native e preparar o terreno para projetos mais complexos no futuro.
