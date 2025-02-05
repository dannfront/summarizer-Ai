import { marked } from 'marked';
import MarkdownToHtmlRepository from '../domain/repositories/markdownToHtml.repository';

class MarkdownToHtml implements MarkdownToHtmlRepository {
    markedIns = marked
    constructor() {
        this.markedIns.use({
            async: true
        })
    }
    async converted(markdown: string): Promise<string> {
        try {

            const html = await this.markedIns.parse(markdown)
            return html
        } catch (error) {
            throw new Error("error converted markdown to html")
        }
    }

}

export default MarkdownToHtml