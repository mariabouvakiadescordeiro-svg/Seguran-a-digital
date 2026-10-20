
:root {
    --fundo: #0b1020;
    --cartao: #141b2d;
    --campo: #0d1425;
    --borda: #29344b;
    --texto: #f1f5f9;
    --texto-secundario: #94a3b8;
    --roxo: #8b5cf6;
    --roxo-claro: #a78bfa;
    --vermelho: #fb5268;
    --amarelo: #fbbf24;
    --verde: #34d399;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    min-height: 100vh;
    padding: 40px 18px;
    font-family: Inter, "Segoe UI", Arial, sans-serif;
    color: var(--texto);
    background:
        radial-gradient(ellipse at top, #24204b 0%, transparent 48%),
        var(--fundo);
}

.container {
    width: 100%;
    max-width: 590px;
    margin: 0 auto;
}

.cabecalho {
    text-align: center;
    margin-bottom: 30px;
}

.icone {
    display: grid;
    place-items: center;
    width: 56px;
    height: 56px;
    margin: 0 auto 18px;
    border-radius: 18px;
    color: white;
    font-size: 30px;
    background: linear-gradient(135deg, #8b5cf6, #6366f1);
    box-shadow: 0 8px 30px #8b5cf633;
}

.subtitulo {
    color: var(--roxo-claro);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 3px;
}

h1 {
    margin: 10px 0;
    font-size: clamp(29px, 6vw, 40px);
    letter-spacing: -1.5px;
}

h1 span {
    color: var(--roxo-claro);
}

.descricao {
    margin: 0;
    color: var(--texto-secundario);
    line-height: 1.6;
    font-size: 14px;
}

.cartao {
    padding: 28px;
    background: var(--cartao);
    border: 1px solid var(--borda);
    border-radius: 22px;
    box-shadow: 0 24px 70px #00000035;
}

.titulo-secao,
.linha-titulo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
}

h2 {
    margin: 0;
    font-size: 15px;
    font-weight: 700;
}

.etiqueta {
    color: var(--roxo-claro);
    background: #8b5cf61a;
    padding: 6px 9px;
    border-radius: 7px;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 1px;
}

.campo-senha {
    display: flex;
    gap: 10px;
    margin-top: 16px;
    padding: 8px;
    background: var(--campo);
    border: 1px solid var(--borda);
    border-radius: 12px;
}

#campo-senha {
    min-width: 0;
    width: 100%;
    padding: 10px 6px;
    border: 0;
    outline: none;
    background: transparent;
    color: var(--verde);
    font-family: Consolas, monospace;
    font-size: 16px;
    letter-spacing: 1px;
}

.botao-copiar {
    padding: 10px 15px;
    border: 0;
    border-radius: 8px;
    background: #8b5cf622;
    color: var(--roxo-claro);
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
}

.botao-copiar:hover {
    background: #8b5cf644;
}

.mensagem {
    min-height: 15px;
    margin: 7px 0 0;
    color: var(--verde);
    font-size: 12px;
}

.divisor {
    height: 1px;
    margin: 24px 0;
    background: var(--borda);
}

.contador {
    display: grid;
    place-items: center;
    min-width: 42px;
    height: 36px;
    padding: 0 10px;
    border: 1px solid #8b5cf655;
    border-radius: 9px;
    background: #8b5cf61a;
    color: var(--roxo-claro);
    font-size: 17px;
    font-weight: 800;
}

.controle-tamanho {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 20px;
}

.parametro-senha__botao {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border: 1px solid var(--borda);
    border-radius: 10px;
    background: #202a40;
    color: var(--texto);
    font-size: 23px;
    cursor: pointer;
    transition: 0.2s;
}

.parametro-senha__botao:hover:not(:disabled) {
    background: var(--roxo);
    border-color: var(--roxo);
}

.parametro-senha__botao:disabled {
    opacity: 0.35;
    cursor: not-allowed;
}

#tamanho {
    width: 100%;
    accent-color: var(--roxo);
    cursor: pointer;
}

.limites {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    color: var(--texto-secundario);
    font-size: 11px;
}

.ajuda {
    margin: 8px 0 18px;
    color: var(--texto-secundario);
    font-size: 13px;
}

.opcoes {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
}

.opcao {
    display: flex;
    align-items: center;
    gap: 11px;
    min-width: 0;
    padding: 14px 12px;
    border: 1px solid var(--borda);
    border-radius: 12px;
    background: #0d1425;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
}

.opcao:has(.checkbox:checked) {
    border-color: #8b5cf688;
    background: #8b5cf610;
}

.checkbox {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
}

.caixa-visual {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    width: 19px;
    height: 19px;
    border: 1px solid #526079;
    border-radius: 6px;
}

.checkbox:checked + .caixa-visual {
    border-color: var(--roxo);
    background: var(--roxo);
}

.checkbox:checked + .caixa-visual::after {
    content: "✓";
    color: white;
    font-size: 13px;
    font-weight: 800;
}

.checkbox:focus-visible + .caixa-visual {
    outline: 2px solid white;
    outline-offset: 3px;
}

.opcao-texto {
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 0;
}

.opcao-texto strong {
    font-size: 12px;
}

.opcao-texto small {
    color: var(--texto-secundario);
    font-size: 11px;
    letter-spacing: 1px;
}

.nivel-forca {
    font-size: 12px;
    font-weight: 800;
    color: var(--verde);
}

.barra {
    width: 100%;
    height: 8px;
    margin-top: 18px;
    overflow: hidden;
    border-radius: 20px;
    background: #283249;
}

.barra-preenchimento {
    width: 0;
    height: 100%;
    border-radius: inherit;
    transition: width 0.3s, background-color 0.3s;
}

.parametro-senha-textos {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    color: var(--texto-secundario);
    font-size: 11px;
}

.entropia {
    margin: 17px 0 0;
    padding: 13px;
    border-radius: 10px;
    background: #0d1425;
    color: var(--texto-secundario);
    font-size: 12px;
    line-height: 1.6;
}

.botao-gerar {
    width: 100%;
    margin-top: 24px;
    padding: 15px;
    border: 0;
    border-radius: 12px;
    background: linear-gradient(135deg, #8b5cf6, #6366f1);
    color: white;
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;
    transition: transform 0.2s, filter 0.2s;
}

.botao-gerar:hover {
    transform: translateY(-2px);
    filter: brightness(1.12);
}

button:focus-visible,
input:focus-visible {
    outline-offset: 3px;
}

footer {
    margin-top: 24px;
    text-align: center;
    color: var(--texto-secundario);
    font-size: 12px;
}

footer span {
    color: var(--roxo-claro);
}

@media (max-width: 480px) {
    body {
        padding: 28px 14px;
    }

    .cartao {
        padding: 21px 17px;
        border-radius: 18px;
    }

    .opcoes {
        grid-template-columns: 1fr;
    }

    .opcao {
        padding: 13px;
    }

    #campo-senha {
        font-size: 13px;
        letter-spacing: 0;
    }

    .botao-copiar {
        padding: 10px;
        font-size: 12px;
    }
}
