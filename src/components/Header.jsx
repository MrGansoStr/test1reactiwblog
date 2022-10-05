import Fimg from '../img/finesiimg.jpg'

export const Header = () => {
  return (
    <>
      <header className="container-xxl" >
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img className="rounded" src={Fimg} alt="Logo" width="70px"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item font-weight-bold">
                  <a className="nav-link active text-black font-weight-bold" aria-current="page" href="/"><b>Home</b></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blog">Blog</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Temas
                  </a>

                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Estadistica Basica</a></li>
                    <li><a className="dropdown-item" href="/">Programación</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/">JavaScript</a></li>
                  </ul>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/">Calculadora Estadistica</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Estadistica" aria-label="Search"/>
                <button className="btn btn-outline-success col-5" type="submit">Buscar Tema</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}