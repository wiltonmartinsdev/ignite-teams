import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Title } from "./styles";

// Com TouchableOpacityProps iremos está importando somente a tipagem do TouchableOpacity.
type Props = TouchableOpacityProps & {
	title: string;
};

export function GroupCard({ title, ...rest }: Props) {
	return (
		<Container {...rest}>
			<Icon />

			<Title>{title}</Title>
		</Container>
	);
}
