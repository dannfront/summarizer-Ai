
abstract class MarkdownToHtmlRepository {
    constructor() {

    }

    abstract converted(markdown: string): Promise<string>
}

export default MarkdownToHtmlRepository