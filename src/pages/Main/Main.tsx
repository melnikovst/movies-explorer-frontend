import { useRef } from 'react';
import AboutProject from '../../components/Main/AboutProject/AboutProject';
import Promo from '../../components/Main/Promo/Promo';
import NavTab from '../../components/Main/NavTab/NavTab';
import Techs from '../../components/Main/Techs/Techs';
import Student from '../../components/Main/Student/Student';

const Main = () => {
  const navigateToProject = useRef<HTMLElement>(null);
  const navigateToStack = useRef<HTMLElement>(null);
  const navigateToStudent = useRef<HTMLElement>(null);

  return (
    <>
      <Promo />
      <main>
        <NavTab
          navigateToStudent={navigateToStudent}
          navigateToStack={navigateToStack}
          navigateToProject={navigateToProject}
        />
        <AboutProject navigateToProject={navigateToProject} />
        <Techs navigateToStack={navigateToStack} />
        <Student navigateToStudent={navigateToStudent} />
      </main>
    </>
  );
};

export default Main;
