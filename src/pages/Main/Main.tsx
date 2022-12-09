import { useRef } from 'react';
import AboutProject from '../../components/AboutProject/AboutProject';
import Promo from '../../components/Promo/Promo';
import NavTab from '../../components/NavTab/NavTab';
import Techs from '../../components/Techs/Techs';
import Student from '../../components/Student/Student';

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
        <Techs navigateToStack={navigateToStack} />
        <Student />
      </main>
    </>
  );
};

export default Main;
