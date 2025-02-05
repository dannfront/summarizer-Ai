
abstract class SummaryService {
    constructor() { }

    abstract generateSummary(textSumarizer: string): Promise<string>
}

export default SummaryService