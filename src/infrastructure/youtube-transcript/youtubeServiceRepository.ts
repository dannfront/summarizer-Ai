import { YoutubeTranscript } from "youtube-transcript";
import { YotubeTranscriptInterface } from "../../domain/entitis/youtube-transcript";
import VideoRepository from "../../domain/repositories/videoRepository";

class YoutubeVideoRepository implements VideoRepository {

    //?client
    constructor() { }
    async getTranscription(link = "https://www.youtube.com/watch?v=JI_THVXPToQ"): Promise<string | null> {
        try {
            console.log(link);

            const test = (await YoutubeTranscript.fetchTranscript(link)) as YotubeTranscriptInterface[]
            const textSumarizer = test.map(text => text.text).join("\n")
            return textSumarizer
        } catch (error) {
            console.log("youtuberepo", error);

            throw new Error("Error getting transcript")
        }
    }
    saveTranscription(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}

export default YoutubeVideoRepository