import { PlayerModel } from "../models/player-model";
import * as PlayersRepositories from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";
import { deleteOnePlayer, insertPlayer } from "../repositories/players-repository";
import { StatisticsPlayerModel } from "../models/statistics-model";

export const getPlayerService = async () => {
    const data = await PlayersRepositories.findAllPlayers();
    let response = null;

    if(data){
         response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }
    
    return response;
};

export const getPlayerByIdService = async (id: number) => {
    // Pedir pro repositório de dados.
    const data = await PlayersRepositories.findPlayerById(id);
    let response = null;

    if(data){
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
};

export const createPlayerService = async (player: PlayerModel) => {
    let response = null
    // Verificar se está vazio
    if(player){
        response = await insertPlayer(player);
        response = await HttpResponse.create();
    } else {
        response = await HttpResponse.badRequest();
    }

    return response;
};

export const deletePlayerService = async (id: number) => {
    let response = null;
    const isDeleted =  await deleteOnePlayer(id);
    if(isDeleted){
        response = await HttpResponse.ok({message: "deleted"})
    } else {
        response = await HttpResponse.badRequest();
    }
    return response;
};

export const updatePlayerService = async (id: number, statistics: StatisticsPlayerModel) => {
    const data = await PlayersRepositories.findAndModifyPlayer(id, statistics);
    let response = null;
    if(Object.keys(data).length === 0){
        response = await HttpResponse.badRequest();
    } else {
        response = await HttpResponse.ok(data);
    }
    
    return response;
}