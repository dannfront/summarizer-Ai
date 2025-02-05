abstract class VideoRepository {
    constructor() { }

    abstract getTranscription(link: string): Promise<string | null>

    abstract saveTranscription(): Promise<void>

}

export default VideoRepository