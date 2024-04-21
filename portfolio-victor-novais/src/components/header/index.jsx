import "./index.css"

export default function header() {
    return (
        <div className="header-container">
            <div className="header">
                <div>
                    <h1 className="h1"> Victor <span class="purple-text">Novais</span></h1>
                </div>

                <div className="menu-header">
                    <h2>sobre</h2>
                    <h2>projetos</h2>
                    <h2>Habilidades</h2>
                </div>

                <div className="contact-button">
                    <button>Contato</button>
                </div>
            </div>
        </div>
    )

}