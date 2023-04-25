import { useEffect, useState } from "react";
import styles from "../styles/styles.module.css";

const steps = {
  start: {
    text: "<strong>Filipe Deschamps:</strong> Ei, você! Tá a fim de uns comandos git diferenciados e delicinhas?",
    options: [
      {
        label: "Aceitar",
        nextStep: "accepted",
      },
      {
        label: "Recusar",
        nextStep: "refused",
      },
    ],
  },
  accepted: {
    text: "<strong>Filipe Deschamps</strong> passa-te o <strong>git push --force</strong>.<br /><br /><strong>Filipe Deschamps:</strong> Mas... espera! Que barulho é esse?",
    delay: 3000,
    nextStep: "police-arrived",
  },
  "police-arrived": {
    text: "<strong>???:</strong> Parados aí! Mãos para o alto! Vocês estão presos! Vocês acharam que eu era <strong>Epilif Deschamps</strong>, mas na verdade eu sou <strong>Pelifi Teló</strong>, da polícia do Git, e estou aqui para ajudar a combater a distribuição de comandos ilegais do Git!",
    delay: 10000,
    nextStep: "escape-or-not",
  },
  "escape-or-not": {
    text: "<strong>Filipe Deschamps:</strong> Aí deu ruim!<br /><br />Nesse momento, o que você faz?",
    options: [
      {
        label: "Não resistir à prisão",
        nextStep: "stay-quiet",
      },
      {
        label: "Resistir e fugir da polícia",
        nextStep: "escape",
      },
    ],
  },
  "stay-quiet": {
    text: "<strong>Pelifi Teló:</strong> Isso mesmo! Quietinho aí, pois é para isso que a polícia do Git está aqui, para combater a distribuição de comandos ilegais do Git.<br /><br />E, então, os dois foram presos e a polícia do Git ajudou a combater a distribuição de comandos ilegais do Git. Fim.",
  },
  escape: {
    text: 'Para não ser preso, você usa o comando <strong>git commit --amend -m "voltar ao início"</strong> e em seguida o <strong>git push --force</strong>, a fim de voltar no tempo.<br /><br /><strong>Pelifi Teló:</strong> Não! Não faça isso! Ai, se eu te pegoooooooooooooooo...<br /><br />Você some de repente, pois voltou ao início de tudo.',
    delay: 10000,
    nextStep: "start",
  },
  refused: {
    text: "<strong>Filipe Deschamps:</strong> Pô, cara! Pega aí! Me commito com a delicinha disso aqui.",
    options: [
      {
        label: "Aceitar",
        nextStep: "accepted",
      },
      {
        label: "Recusar",
        nextStep: "refused-again",
      },
    ],
  },
  "refused-again": {
    text: "<strong>Filipe Deschamps:</strong> Ué, que barulho é esse...?",
    delay: 3000,
    nextStep: "deschamps-arrived",
  },
  "deschamps-arrived": {
    text: "<strong>???:</strong> Parado aí! Mãos para o alto! Você está preso! Achou que eu era <strong>Epilif Deschamps</strong>, mas na verdade eu sou <strong>Pelifi Teló</strong>, da polícia do Git, e estou aqui para ajudar a combater a distribuição de comandos ilegais do Git!",
    delay: 7000,
    nextStep: "deschamps-arrested",
  },
  "deschamps-arrested": {
    text: "<strong>Pelifi Teló:</strong> Muito obrigado por recusar o comando, cidadão! Graças a você, conseguimos prendê-lo no flagra. A polícia do Git está aqui para ajudar a combater a distribuição de comandos ilegais do Git. Caso encontre mais pessoas distribuindo comandos ilegais, chame a polícia do Git, pois estaremos sempre a postos para ajudar a combater a distribuição de comandos ilegais do Git.<br /><br />E, assim, Filipe Deschamps foi preso por distribuir comandos Git ilegais. Fim.",
  },
};

function Home() {
  const [step, setStep] = useState("start");

  useEffect(() => {
    if (steps[step].delay) {
      setTimeout(() => {
        setStep(steps[step].nextStep);
      }, steps[step].delay);
    }
  }, [step]);

  return (
    <div className={styles.container}>
      <p dangerouslySetInnerHTML={{ __html: steps[step].text }} />

      <div>
        {steps[step].options?.map((option, index) => (
          <button key={index} onClick={() => setStep(option.nextStep)}>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
