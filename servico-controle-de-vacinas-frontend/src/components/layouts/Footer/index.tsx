import './styles.css'

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="container">

                    <div className="grid-8 footer_historia">
                        <h3>Nossa História</h3>
                        <p>Estudantes de Engenharia de Computação da Univesp, buscando auxiliar a comunidade da cidade de Salto/SP a se manter informada sobre aspectos de saúde, sempre com suas vacinas em dia e previnir desperdícios de recursos públicos, foi o que nos motivou a criar essa página.</p>
                    </div>

                    <div className="grid-4 footer_contato">
                        <h3>Contato da Sec. de Saúde</h3>
                        <ul>
                            <li>- 11 4602.8515</li>
                            <li>- sec.saude@salto.sp.gov.br</li>
                            <li>- Salto - SP</li>
                        </ul>
                    </div>

                    <div className="grid-4 footer_redes">
                        <h3>Agradecimentos</h3>
                        <ul>
                            <li><p>Gostariamos de agradecer nossa tutora, Lélia Santiago Custódio da Silva, por todo o suporte e orientação durante a realização desse projeto.</p></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="copy">
                <div className="container">
                    <p className="grid-16">UniVacinas 2023 - Alguns direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer