import express, { Router } from "express";
import SummarizerController from "./summarizer.controller";
import OpenAIService from "../../infrastructure/OpenAi/openAI.service";
import envs from "../../config/envs.config";
import YoutubeTranscriptService from "../../infrastructure/youtube-transcript/youtubeServiceRepository";
import SummarizeVideoUseCaseImpl from "../../infrastructure/usesCases/SummarizeVideo.use-case";
import validateLinkMiddleware from "../middlewares/validateLink.midleware";
import schemaLink from "../../config/zod.config";

class RouterSumarizer {
    constructor() { }


    static get Router(): Router {
        const app = Router()
        const clientAiService = new OpenAIService(envs.OPENAI_API_KEY)
        const videoService = new YoutubeTranscriptService()
        const useCases = new SummarizeVideoUseCaseImpl(videoService, clientAiService)
        const controller = new SummarizerController(useCases)

        app.post("/api/summary", validateLinkMiddleware(schemaLink), controller.getTranscription)


        return app


    }
}

export default RouterSumarizer