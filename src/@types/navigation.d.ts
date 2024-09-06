export declare global {
	namespace ReactNavigation {
		interface RootParamList {
			groups: undefined;
			new: undefined;

			// Devemos evitar passar muitos objetos complexos como parâmetros das rotas, é uma boa prática passar objetos mais simples.
			players: {
				group: string;
			};
		}
	}
}
