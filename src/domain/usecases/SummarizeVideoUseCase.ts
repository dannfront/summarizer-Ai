

abstract class SummarizeVideoUseCase {
    abstract getTransciption(link: string): Promise<string>
}



export default SummarizeVideoUseCase