import { NextFunction, Request, Response } from "express";
import SummarizeVideoUseCase from "../../domain/usecases/SummarizeVideoUseCase";


class SummarizerController {
    constructor(private readonly useCase: SummarizeVideoUseCase) { }


    getTranscription = async (req: Request, res: Response, next: NextFunction) => {
        const link = req.body.link
        this.useCase.getTransciption(link).then(async transcription => {
            return res.json({
                status: "succes",
                transcription
            })
        }).catch(error => res.status(500).json({
            status: "failed",
            error: error.message
        }))

    }
}


export default SummarizerController

