//1- No nosso dia a dia, o uso de senhas é algo comum, pois usamos muitos sistemas ou aplicativos diferentes.
//Como recomendação de segurança, é necessário que para cada aplicativo que usamos, seja gerada uma senha segura.
//Usando a técnica de arrays, gere 5 senhas que contenham pelo menos 10 caracteres, contendo pelo menos 5 letras,
//sendo 2 maiúsculas e 2 minúsculas, 2 números e um caractere especial (ponto, hashtag, barra, ponto de interrogação,
//arroba). Use a tabela ASCII como base para gerar caracteres aleatórios.



function gerarSenhas(quantidade: number): string[] {
  const senhas: string[] = [];

  // Funções auxiliares para gerar caracteres aleatórios a partir de intervalos ASCII
  const obterCaractereAleatorio = (min: number, max: number): string =>
      String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min);

  const obterMaiusculaAleatoria = (): string => obterCaractereAleatorio(65, 90); // A-Z
  const obterMinusculaAleatoria = (): string => obterCaractereAleatorio(97, 122); // a-z
  const obterDigitoAleatorio = (): string => obterCaractereAleatorio(48, 57); // 0-9
  const obterEspecialAleatorio = (): string => {
      const especiais = ['.', '#', '/', '?', '@'];
      return especiais[Math.floor(Math.random() * especiais.length)];
  };

  for (let i = 0; i < quantidade; i++) {
      const arraySenha: string[] = [];

      // Adicionar os caracteres obrigatórios
      arraySenha.push(obterMaiusculaAleatoria());
      arraySenha.push(obterMaiusculaAleatoria());
      arraySenha.push(obterMinusculaAleatoria());
      arraySenha.push(obterMinusculaAleatoria());
      arraySenha.push(obterDigitoAleatorio());
      arraySenha.push(obterDigitoAleatorio());
      arraySenha.push(obterEspecialAleatorio());

      // Preencher o restante com caracteres aleatórios (letras, dígitos ou especiais)
      while (arraySenha.length < 10) {
          const escolhaAleatoria = Math.floor(Math.random() * 4);
          if (escolhaAleatoria === 0) arraySenha.push(obterMaiusculaAleatoria());
          else if (escolhaAleatoria === 1) arraySenha.push(obterMinusculaAleatoria());
          else if (escolhaAleatoria === 2) arraySenha.push(obterDigitoAleatorio());
          else arraySenha.push(obterEspecialAleatorio());
      }

      // Embaralhar o array para randomizar as posições dos caracteres
      for (let j = arraySenha.length - 1; j > 0; j--) {
          const k = Math.floor(Math.random() * (j + 1));
          [arraySenha[j], arraySenha[k]] = [arraySenha[k], arraySenha[j]];
      }

      // Juntar o array para formar a senha e adicionar à lista
      senhas.push(arraySenha.join(''));
  }

  return senhas;
}

// Gerar 5 senhas e exibi-las
const senhasGeradas = gerarSenhas(5);
senhasGeradas.forEach((senha, indice) => {
  console.log(`Senha ${indice + 1}: ${senha}`);
});
