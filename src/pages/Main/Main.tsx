import { useRef } from 'react';
import AboutProject from '../../components/AboutProject/AboutProject';
import Promo from '../../components/Header/Promo';
import NavTab from '../../components/NavTab/NavTab';

const Main = () => {
  const navigateToProject = useRef<HTMLElement | null>(null);
  const navigateToStack = useRef<HTMLElement>(null);
  const navigateToStudent = useRef<HTMLElement>(null);

  return (
    <>
      <Promo navigateToProject={navigateToProject} />
      <main>
        <NavTab
          navigateToStudent={navigateToStudent}
          navigateToStack={navigateToStack}
          navigateToProject={navigateToProject}
        />
        <AboutProject />
      </main>
    </>
  );
};

export default Main;
