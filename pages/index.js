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
            "A mensagem do site verdadeira pra você é: Você é muito especial para mim!",
          )
        }
      >
        Se você for meu pai, clique aqui!
      </button>
    </>
  );
}

export default Home;
