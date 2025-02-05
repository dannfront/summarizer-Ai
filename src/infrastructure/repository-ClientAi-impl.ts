// import { error } from "console";
// import VideoRepository from "../domain/repositories/videoRepository";
// import SummaryService from "../domain/services/summary.service";
// import SummarizeVideoUseCase from "../domain/usecases/SummarizeVideoUseCase";


// class UseCaseImpl implements SummarizeVideoUseCase {
//     constructor(
//         public readonly videoRepository: VideoRepository,
//         public readonly summaryService: SummaryService

//     ) { }

//     async getTransciption(link: string): Promise<string> {
//         try {
//             const transcripcion = await this.videoRepository.getTranscription(link)
//             if (!transcripcion) throw error
//             const summaryTranscription = await this.summaryService.generateSummary(transcripcion)
//             return summaryTranscription
//         } catch (error) {
//             return error.message
//         }
//     }

// }
