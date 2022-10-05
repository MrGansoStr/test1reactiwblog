
import { Mainimg } from './Mainimg'
import { Introduction } from './Partes/Introduction'
import { Videotutorials } from './Videotutorials'
export const Lpageblog = () => {
  return (
    <>
      <Mainimg/>
      <br/>
      <br/>
      <div className="container-xl border" style={{ width: "97%"}}>
        <div className="row" style={{ Width: "100%" }}>
          <div className="col-8  border">
            <br />
            <Introduction/>
            <Videotutorials/>
          </div>
          <div className="col-4 border">
            <ul className="text-left" style={{ listStyle: "none", paddingLeft: "3px" }}>
              <br />
              <a className="list-group-item" href="/blog">Primer Link</a>
              <a className="list-group-item" href="/blog">Segundo Link</a>
              <a className="list-group-item" href="/blog">Tercer Link</a>
            </ul>
            <hr/>
            <ul className="text-left" style={{ listStyle: "none", paddingLeft: "3px" }}>
              Videos:
              <a className="list-group-item" href="/blog">Otro link</a>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}