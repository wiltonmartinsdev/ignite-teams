import {
	useFonts,
	Roboto_400Regular,
	Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import { Routes } from "src/routes";
import { ThemeProvider } from "styled-components";

import { Loading } from "@components/Loading";
import theme from "@theme/index";

export default function App() {
	// O fontsLoaded armazena o estado do carregamento da fonte.
	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_700Bold,
	});

	return (
		<ThemeProvider theme={theme}>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
			{fontsLoaded ? <Routes /> : <Loading />}
		</ThemeProvider>
	);
}
