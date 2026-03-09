function Home() {
  return (
    <>
      <h1>Bem vindo ao meu primeiro site com um dominio registrado!</h1>
      <p>
        Se você for um dos meus amigos, quem leu é gay! (Regras do MEU SITE
        HAHAHAHA)
      </p>
      <button
        onClick={() =>
          alert(
            "Se você abriu isso, lamento informar mas além de curioso você é corno.",
          )
        }
      >
        NÃO CLIQUE NESSE BOTÃO
      </button>
    </>
  );
}

export default Home;
