import Head from "next/head";
import { Inter } from "@next/font/google";
import StartBar from "components/StartBar/StartBar";
import "xp.css/dist/XP.css";
import styles from "../styles/Home.module.css";
import DesktopIcon from "components/DesktopIcon/DesktopIcon";
import mycomputer from "../../assets/mycomputer.png";
import bin from "../../assets/recycling_bin.png";
import pdf from "../../assets/pdf.png";
import github from "../../assets/github.png";
import cmd from "../../assets/cmd.png";
import solitare from "../../assets/solitaire.png";
import linkedin from "../../assets/linkedin.png";
import WinForm from "components/WinForm/WinForm";
import { useCallback, useState } from "react";
import { Tab } from "src/types";
export default function Home() {
  const [TabsID, setTabsID] = useState([] as number[]);

  const handleRunApp = (appID: number) => {
    setTabsID((prevTabs) => [...prevTabs, appID]);
  };

  const iconClicked = () => {
    console.log("Icon Clicked!");
  };
  const handleOpenGitHub = () => {
    window.open("https://github.com/firwer", "_blank", "noreferrer");
  };

  const handleOpenLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/poh-wei-pin-7b9061183/",
      "_blank",
      "noreferrer"
    );
  };

  const handleOpenResume = () => {
    window.open("/resume.pdf");
  };

  return (
    <>
      <Head>
        <title>Wei Pin's Personal Website - Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <DesktopIcon
          appID={1}
          doubleClick={iconClicked}
          title="My Computer"
          img={mycomputer}
        />
        <DesktopIcon
          appID={2}
          doubleClick={iconClicked}
          title="Recycling Bin"
          img={bin}
        />
        <DesktopIcon
          appID={3}
          doubleClick={handleOpenResume}
          title="My Resume"
          img={pdf}
        />
        <DesktopIcon
          appID={4}
          doubleClick={handleOpenLinkedin}
          title="My LinkedIn"
          img={linkedin}
        />
        <DesktopIcon
          appID={5}
          doubleClick={handleOpenGitHub}
          title="My Github"
          img={github}
        />
        <DesktopIcon
          appID={6}
          doubleClick={() => handleRunApp(6)}
          title="My Work"
          img={cmd}
        />

        <DesktopIcon
          appID={7}
          doubleClick={iconClicked}
          title="My Hobbies"
          img={solitare}
        />
        <WinForm title={"My Work"} width={"500"}>
          Hi
        </WinForm>
        <StartBar tabList={TabsID} />
      </main>
    </>
  );
}
