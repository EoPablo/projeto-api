import {Request, Response} from "express";
import * as Service from "../services/players-service";
import { noContent } from "../utils/http-helper";
import { StatisticsPlayerModel } from "../models/statistics-model";

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await Service.getPlayerService(); // função dentro do utils
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerByID = async (req: Request, res:Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await Service.getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
     const bodyValue = req.body;
     const httpResponse = await Service.createPlayerService(bodyValue);
     if(httpResponse){
         res.status(httpResponse?.statusCode).json(httpResponse?.body)
     } else {
        const response = await noContent();
        res.status(response.statusCode).json(response.body)
     };
};

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id) // Pegar o id, como ele ver em formato de string, mudei para INT.
    const httpResponse = await Service.deletePlayerService(id); // Meu service
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyValue: StatisticsPlayerModel = req.body;
    const httpResponse = await Service.updatePlayerService(id, bodyValue);
    res.status(httpResponse.statusCode).json(httpResponse.body);

};