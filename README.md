<a id="readme-top"></a>

<!-- ESCUDOS DO PROJETO -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- LOGOTIPO DO PROJETO -->
<br />
<div align="center">
  <a href="https://github.com/alissonpef/alissonpef.github.io">
    <img src="src/assets/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Portfólio Pessoal</h3>

  <p align="center">
    Meu portfólio pessoal e currículo online dinâmico integrado ao GitHub!
    <br />
    <a href="https://alissonpef.github.io"><strong>Visite o site »</strong></a>
    <br />
    <br />
    <a href="https://github.com/alissonpef/alissonpef.github.io/issues/new?labels=bug&template=bug-report.md">Reportar Bug</a>
    &middot;
    <a href="https://github.com/alissonpef/alissonpef.github.io/issues/new?labels=enhancement&template=feature-request.md">Solicitar Recurso</a>
  </p>
</div>

<!-- ÍNDICE -->
<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre O Projeto</a>
      <ul>
        <li><a href="#construído-com">Construído Com</a></li>
      </ul>
    </li>
    <li>
      <a href="#começando">Começando</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#contribuindo">Contribuindo</a></li>
    <li><a href="#licença">Licença</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<!-- SOBRE O PROJETO -->

## Sobre O Projeto

Este é o meu portfólio pessoal e site de currículo construído para centralizar meu perfil profissional. Ele consome dados dinamicamente da API do GitHub para apresentar meus repositórios mais relevantes, além de exibir minhas experiências profissionais e acadêmicas, certificações e publicações em uma interface moderna e responsiva de forma totalmente automatizada.

Principais recursos:

- **Integração Dinâmica com GitHub**: Carregamento automático de repositórios públicos, dados de perfil e estatísticas.
- **Layout Responsivo & Customizável**: Temas baseados em DaisyUI e Tailwind CSS com suporte a troca de temas dinâmica.
- **Otimização PWA**: Suporte a Progressive Web App para funcionamento offline e instalação.

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

### Construído Com

- [![React][React.js]][React-url]
- [![TypeScript][TypeScript.js]][TypeScript-url]
- [![TailwindCSS][Tailwind.css]][Tailwind-url]
- [![DaisyUI][DaisyUI.badge]][DaisyUI-url]
- [![Vite][Vite.js]][Vite-url]

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

<!-- COMEÇANDO -->

## Começando

Para rodar e testar o portfólio localmente, siga os passos abaixo.

### Pré-requisitos

Certifique-se de ter o Node.js instalado (versão >= 20.0.0 recomendado).

- npm
  ```sh
  npm install npm@latest -g
  ```

### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/alissonpef/alissonpef.github.io.git
   ```
2. Instale as dependências
   ```sh
   npm install
   ```
3. Personalize suas informações no arquivo `gitprofile.config.ts` na raiz do projeto.
4. Execute o servidor de desenvolvimento local
   ```sh
   npm run dev
   ```
5. Para gerar o build de produção
   ```sh
   npm run build
   ```

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

<!-- EXEMPLOS DE USO -->

## Uso

O projeto foi configurado de forma a simplificar ao máximo a manutenção de informações. Basta alterar as configurações estruturadas no arquivo `gitprofile.config.ts` para que o design reaja e renderize suas informações atualizadas.

Exemplo de estrutura de configuração (`gitprofile.config.ts`):

```typescript
const config = {
  github: {
    username: 'alissonpef',
  },
  themeConfig: {
    defaultTheme: 'lofi',
    respectPrefersColorScheme: true,
    // ...
  },
};
```

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

<!-- CONTRIBUINDO -->

## Contribuindo

Contribuições tornam a comunidade open source um lugar maravilhoso para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

Se você tiver alguma sugestão de melhoria, sinta-se à vontade para clonar o repositório, criar um branch e abrir um Pull Request:

1. Faça o Fork do Projeto
2. Crie sua Branch de Funcionalidade (`git checkout -b feature/NovaFuncionalidade`)
3. Confirme suas mudanças (`git commit -m 'Adiciona NovaFuncionalidade'`)
4. Faça o Push para a Branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

<!-- LICENÇA -->

## Licença

Distribuído sob a Licença MIT. Veja `LICENSE` para mais informações.

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

<!-- CONTATO -->

## Contato

Alisson Pereira Ferreira - alissonpef@gmail.com - [LinkedIn](https://www.linkedin.com/in/alisson-pereira-ferreira/)

Link do Projeto: [https://github.com/alissonpef/alissonpef.github.io](https://github.com/alissonpef/alissonpef.github.io)

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

---

Agradecimentos ao projeto original [gitprofile](https://github.com/arifszn/gitprofile) criado por [arifszn](https://github.com/arifszn).

Made with ❤️ by **Alisson Pereira**.

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/alissonpef/alissonpef.github.io.svg?style=for-the-badge
[contributors-url]: https://github.com/alissonpef/alissonpef.github.io/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/alissonpef/alissonpef.github.io.svg?style=for-the-badge
[forks-url]: https://github.com/alissonpef/alissonpef.github.io/network/members
[stars-shield]: https://img.shields.io/github/stars/alissonpef/alissonpef.github.io.svg?style=for-the-badge
[stars-url]: https://github.com/alissonpef/alissonpef.github.io/stargazers
[issues-shield]: https://img.shields.io/github/issues/alissonpef/alissonpef.github.io.svg?style=for-the-badge
[issues-url]: https://github.com/alissonpef/alissonpef.github.io/issues
[license-shield]: https://img.shields.io/github/license/alissonpef/alissonpef.github.io.svg?style=for-the-badge
[license-url]: https://github.com/alissonpef/alissonpef.github.io/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/alisson-pereira-ferreira/
[product-screenshot]: https://raw.githubusercontent.com/alissonpef/alissonpef.github.io/main/src/assets/logo.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript.js]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Tailwind.css]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[DaisyUI.badge]: https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white
[DaisyUI-url]: https://daisyui.com/
[Vite.js]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vite.dev/
