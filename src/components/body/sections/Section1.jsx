import React from 'react';
import styles from '../../../pages/home/Home.module.css';

import TechIcon from '../../techIcon/TechIcon';
import jsIcon from '../../../assets/images/iconJavascript.png';
import pyIcon from '../../../assets/images/iconPython.png';
import TsIcon from '../../../assets/images/iconTypescript.png';
import ReactIcon from '../../../assets/images/iconReact.png';
import CIcon from '../../../assets/images/iconC++.png';
import JavaIcon from '../../../assets/images/iconJava.png';
import GoIcon from '../../../assets/images/iconGoland.png';
import KotlinIcon from '../../../assets/images/iconKotlin.png';
import PHPIcon from '../../../assets/images/iconPHP.png';
import RustIcon from '../../../assets/images/iconRust.png';
import RubyIcon from '../../../assets/images/iconRuby.png';
import SwiftIcon from '../../../assets/images/iconSwift.png';
import VSCodeIcon from '../../../assets/images/iconVSCode.png';
import IntellijIcon from '../../../assets/images/iconIntelliJ.png';
import AndroidStudioIcon from '../../../assets/images/iconAndroidStudio.png';
import HTMLIcon from '../../../assets/images/iconHTML.png';
import CSSIcon from '../../../assets/images/iconCSS.png';
import BootstrapIcon from '../../../assets/images/iconBootstrap.png';
import TailwindIcon from '../../../assets/images/iconTailwind.png';
import MaterialUIIcon from '../../../assets/images/iconMaterialUI.png';
import SASSIcon from '../../../assets/images/iconSass.png';
import StyledComponentsIcon from '../../../assets/images/iconStyComp.png';
import NextIcon from '../../../assets/images/iconNext.png';
import VueIcon from '../../../assets/images/iconVue.png';
import AngularIcon from '../../../assets/images/iconAng.png';
import NodeIcon from '../../../assets/images/iconNode.png';

function Section1() {
  return (
    <section className={styles.section1}>
      <h2>Linguagens e Tecnologias</h2>
      <div className={styles.techContainer}>
        <TechIcon src={jsIcon} alt="JavaScript Logo" name="JavaScript" link="/javascript" />
        <TechIcon src={pyIcon} alt="Python Logo" name="Python" link="/python" />
        <TechIcon src={TsIcon} alt="TypeScript Logo" name="TypeScript" link="/typescript" />
        <TechIcon src={ReactIcon} alt="React Logo" name="React" link="/react" />
        <TechIcon src={CIcon} alt="C++ Logo" name="C++" link="/c++" />
        <TechIcon src={JavaIcon} alt="Java Logo" name="Java" link="/java" />
        <TechIcon src={RubyIcon} alt="Ruby Logo" name="Ruby" link="/ruby" />
        <TechIcon src={KotlinIcon} alt="Kotlin Logo" name="Kotlin" link="/kotlin" />
        <TechIcon src={PHPIcon} alt="PHP Logo" name="PHP" link="/php" />
        <TechIcon src={RustIcon} alt="Rust Logo" name="Rust" link="/rust" />
        <TechIcon src={SwiftIcon} alt="Swift Logo" name="Swift" link="/swift" />
        <TechIcon src={GoIcon} alt="Go Logo" name="Go" link="/go" />
        <TechIcon src={VSCodeIcon} alt="VSCode Logo" name="VSCode" link="/vscode" />
        <TechIcon src={IntellijIcon} alt="IntelliJ Logo" name="IntelliJ" link="/intellij" />
        <TechIcon src={AndroidStudioIcon} alt="Android Studio Logo" name="Android Studio" link="/android-studio" />
        <TechIcon src={HTMLIcon} alt="HTML Logo" name="HTML" link="/html" />
        <TechIcon src={CSSIcon} alt="CSS Logo" name="CSS" link="/css" />
        <TechIcon src={BootstrapIcon} alt="Bootstrap Logo" name="Bootstrap" link="/bootstrap" />
        <TechIcon src={TailwindIcon} alt="Tailwind Logo" name="Tailwind" link="/tailwind" />
        <TechIcon src={MaterialUIIcon} alt="Material UI Logo" name="Material UI" link="/material-ui" />
        <TechIcon src={SASSIcon} alt="SASS Logo" name="SASS" link="/sass" />
        <TechIcon src={StyledComponentsIcon} alt="Styled Components Logo" name="Styled Components" link="/styled-components" />
        <TechIcon src={NextIcon} alt="Next.js Logo" name="Next.js" link="/nextjs" />
        <TechIcon src={VueIcon} alt="Vue.js Logo" name="Vue.js" link="/vuejs" />
        <TechIcon src={AngularIcon} alt="Angular Logo" name="Angular" link="/angular" />
        <TechIcon src={NodeIcon} alt="Node.js Logo" name="Node.js" link="/nodejs" />

        {/* Aqui você pode adicionar mais tecnologias */}
      </div>
    </section>
  );
}

export default Section1;
