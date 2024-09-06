import theme from "@theme/index";

import "styled-components/native";

declare module "styled-components" {
	type ThemeType = typeof theme;

	export interface DefaultTheme extends ThemeType {}
}
