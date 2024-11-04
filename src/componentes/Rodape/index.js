import "./Rodape.css"

const Rodape =() =>{
    return(
    <div className="rodape">
            <section>
            <ul>
                <li>
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src="/imagens/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/imagens/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Caique.<br/>
                Projeto criado por Alura
            </p>
        </section>
    </div>
    )
}

export default Rodape