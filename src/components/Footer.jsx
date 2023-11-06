import { footerLinks } from "../constants";

const Footer = () => {
	return (
		<section className="bg-gradient-to-b from-soft-gray to-black p-6 md:p-16">
			<div className="text-white">
				Filmagnet is an online movie streaming platform that offers pirated content that is
				not released. It has a huge collection of latest movies and films that still not
				available on the market and YouTube. You can watch and download all contents free of
				costs, but they are illegal, so you have to take some precautions. It is not
				available in all countries so you can use VPN and choose a location with access to
				Filmagnet. Here, we will discuss the Filmagnet.
			</div>
			<div>
				<ul>
					<li className="text-center mt-4">
						{footerLinks.map((item) => (
							<a
								key={item.id}
								className={`text-white hover:font-bold text-sm hover:text-base transition-all border-r-2 border-r-highlight px-5 ${
									item.id === footerLinks.length ? "border-r-0" : ""
								}`}
								href="#"
							>
								{item.title}
							</a>
						))}
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Footer;
