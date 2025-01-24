// Função para calcular o saldo e determinar o nível
function calcularRank(vitorias, derrotas) {
    // Calcula o saldo
    let saldoVitorias = vitorias - derrotas;

    // Determina o nível baseado no número de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Exibe a mensagem
    console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`);

    // Retorna os resultados
    return { saldoVitorias, nivel };
}

// Exemplo de uso
calcularRank(85, 30);