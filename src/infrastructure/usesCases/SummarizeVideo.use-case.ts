
import MarkdownToHtmlRepository from "../../domain/repositories/markdownToHtml.repository";
import VideoRepository from "../../domain/repositories/videoRepository";
import SummaryService from "../../domain/services/summary.service";
import SummarizeVideoUseCase from "../../domain/usecases/SummarizeVideoUseCase";


class SummarizeVideoUseCaseImpl implements SummarizeVideoUseCase {

    constructor(
        private readonly transcriber: VideoRepository,
        private readonly summaryGenerator: SummaryService,
    ) {

    }
    async getTransciption(link: string): Promise<string> {
        try {
            const transcription = await this.transcriber.getTranscription(link)
            if (!transcription) throw new Error("transcription not found")
            const summary = await this.summaryGenerator.generateSummary(transcription)
            return summary
        } catch (error) {
            console.log("summarizer", error);

            throw new Error("Failed to get transcription and summary")
        }
    }
}

export default SummarizeVideoUseCaseImpl
