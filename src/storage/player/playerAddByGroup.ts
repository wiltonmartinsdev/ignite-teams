import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/app";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { playersGetByGroup } from "./playersGetByGroup";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function playerAddByGroup(
	newPlayer: PlayerStorageDTO,
	group: string
) {
	try {
		const storedPlayers = await playersGetByGroup(group);

		const playerAlreadyExists = storedPlayers.filter(
			(player) => player.name === newPlayer.name
		);

		if (playerAlreadyExists.length > 0) {
			throw new AppError(
				"Essa pessoa já está adicionada em um time aqui."
			);
		}

		const storage = JSON.stringify([...storedPlayers, newPlayer]);

		/*
        Nessa função iremos montar a chave de armazenamento com duas informações, com o nome da coleção e depois de forma dinâmica o nome do grupo, dessa forma podemos criar um array com os jogadores, como especificado abaixo

        @ignite-teams:player-rocket:[]
        @ignite-teams:player-amigos:[]
        @ignite-teams:player-ignite:[]
                
        */
		await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
	} catch (error) {
		throw error;
	}
}
