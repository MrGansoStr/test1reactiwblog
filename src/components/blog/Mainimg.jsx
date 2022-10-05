import BGmain from '../../img/BGmain.jpg'
export const Mainimg = () => {
	return (
		<div className="row bg-opacity-25" style={{ position: "relative", display: "inline-block" }}>
			<div className="" >
				<img src={BGmain} className="img-fluid" alt="Backgound de Mesa v:" style={{ opacity: "0.5", backgroundColor: "brown" }} />
				<div className="text-black align-items-center justify-content-center" style={{ position: "absolute", top: "15%", left: "15%", bottom: "15%", right: "15%" }}>
					<div className="align-items-center justify-content-center text-center font-weight-bold">
						<h3 class="text-black ">Blog de <strogn>C++</strogn></h3>
						<p class="text-black-75">C++ es un lenguaje de programación que proviene de la extensión del lenguaje C para que pudiese manipular objetos.</p>
						<a class="btn btn-primary btn-xl" href="#introduccion">Comenzar</a>
					</div>
				</div>
			</div>
		</div>
	)
}