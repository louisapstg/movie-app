// import { Provider } from "react-redux";
import { Home } from "./pages";
// import store from "./stores/index";

const App = () => {
	return (
		// <Provider store={store}>
		// </Provider>
		<div className="w-full overflow-hidden">
			<Home />
		</div>
	);
};

export default App;
