import {useRef, useState} from 'react';

import HeaderComponent from '../components/Header/Component';
import MainComponent from '../components/Main';
import FooterComponent from '../components/Footer/Component';

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);
  const linkRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const careerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const moveScroll = (ref: string) => {
    if (ref === 'about') aboutRef.current?.scrollIntoView({behavior: 'smooth'});
    if (ref === 'skill') skillRef.current?.scrollIntoView({behavior: 'smooth'});
    if (ref === 'link') linkRef.current?.scrollIntoView({behavior: 'smooth'});
    if (ref === 'project')
      projectRef.current?.scrollIntoView({behavior: 'smooth'});
    if (ref === 'career')
      careerRef.current?.scrollIntoView({behavior: 'smooth'});

    setOpen(false);
  };

  const toggleFunc = () => {
    setOpen((state) => !state);
  };

  return (
    <div>
      <HeaderComponent
        moveScroll={moveScroll}
        open={open}
        toggleFunc={toggleFunc}
      />
      <MainComponent
        aboutRef={aboutRef}
        skillRef={skillRef}
        linkRef={linkRef}
        projectRef={projectRef}
        careerRef={careerRef}
        moveScroll={moveScroll}
      />
      <FooterComponent />
    </div>
  );
}
