import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <span>Meu Portfólio</span>
        <ul>
          <li>Github</li>
          <li>Linkedin</li>
          <ul>Certificados</ul>
            <li>Certificado Inglês</li>
            <li>Certficado Javascript Completo</li>
            <li>Certificado <abbr>html</abbr>, <abbr>css</abbr> e Javascript</li>
          <li>Contate-me</li>
        </ul>
      </header>
      <section>
        <div>
          <h1>Olá, meu nome é Kaio!</h1>
          <h4>Desenvolvedor Front-end</h4>
        </div>
      </section>
      <section>
        <div>
            <p>
              Meu nome é Kaio Alves Lopes, tenho 19 anos e sou de São Lourenço do Sul (<abbr>RS</abbr>), mas atualmente moro em Florianópolis (<abbr>SC</abbr>).
            </p>
            <p>
              Tenho experiência em Javascript, CSS, HTML, Typescript e quero aprender outras ferramentas e linguagens.
            </p>
            <p>
              Meu foco atualmente é conseguir um emprego na área de programação, mas especificamente em front-end, porém, quero aprender a atuar na área de back-end também, e assim poder atuar como full stack.
            </p>
        </div>
      </section>
      <section>
        <div>
          <h2>Alguns de meus projetos</h2>
          <div>
            <h3>
              GranoCoffe
            </h3>
            <p>
              Landing page ficticio.
            </p>
          </div>
          <div>
            <h3>
              Memory Game
            </h3>
            <p>
              Jogo da memória feito em Typescript.
            </p>
          </div>
          <div>
            <h3>
              Tabela de Notas
            </h3>
            <p>
              Tabela de notas feita em HTML, CSS e Javascript. Padrão MVC.
            </p>
          </div>
          <div>
            <h3>
              To Do List
            </h3>
            <p>
              Lista de tarefas simples com localStorage.
            </p>
          </div>
          <div>
            <h3>
              Calculadora
            </h3>
            <p>
              Calculadora simples para exercitar o <abbr>html</abbr>, <abbr>css</abbr> e Javascript.
            </p>
          </div>
          <div>
            <h3>
              Conversor
            </h3>
            <p>
              Conversor de medidas feito em typescript
            </p>
          </div>
          <div>
            <h3>
              Wordlol
            </h3>
            <p>
              Jogo de personagens de um game feito com React.js e Firebase.
            </p>
          </div>
        </div>
      </section>
      <footer>
        <a href="https://www.instagram.com/kaio_al1/">Meu Instagram</a>
        <a href="https://www.facebook.com/kaio.alveslopes/">Meu Facebook</a>
        <a href="mailto:kaio.loopes18@gmail.com">Email</a>
        <a href="https://api.whatsapp.com/send?phone=5551986537075">Whatsapp</a>
      </footer>
    </div>
  );
}

export default App;
