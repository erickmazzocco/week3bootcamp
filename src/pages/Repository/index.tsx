import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom'
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface RepositoryParams {
  repository: string;

}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
        Voltar
      </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars3.githubusercontent.com/u/26230705?s=400&u=fdbc57fbb036367252d14a6554203e922f9a3eb7&v=4" alt="Érick Mazzocco" />
          <div>
            <strong>rocketseat/unform</strong>
            <p>descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Starts</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="testeste">
          <div>
            <strong>asdasd</strong>
            <p>assadd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>

      <Issues>
        <Link to="testeste">
          <div>
            <strong>asdasd</strong>
            <p>assadd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>

      <Issues>
        <Link to="testeste">
          <div>
            <strong>asdasd</strong>
            <p>assadd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>

      <Issues>
        <Link to="testeste">
          <div>
            <strong>asdasd</strong>
            <p>assadd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  )
};

export default Repository;
