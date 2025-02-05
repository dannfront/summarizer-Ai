import OpenAI from "openai";
import SummaryService from "../../domain/services/summary.service";


class OpenAIService implements SummaryService {
    private client
    private promt = `Resume la siguiente transcripción de un video en un texto claro, conciso y bien estructurado. Destaca los momentos más importantes, como:

    Ideas o argumentos centrales.
    
    Datos, estadísticas o ejemplos relevantes.
    
    Conclusiones o llamados a la acción.
    
    Eventos o giros clave si es un contenido narrativo (ejemplo: tutorial, historia, análisis)`

    constructor(apiKey: string) {
        this.client = new OpenAI({
            apiKey
        })
    }

    async generateSummary(textSumarizer: string): Promise<string> {
        try {

            const response = await this.client.chat.completions.create({
                messages: [
                    { role: 'user', content: this.promt },
                    { role: "system", content: textSumarizer }
                ],
                model: 'gpt-4o-mini'
            });
            return response?.choices[0].message.content ?? ""

        } catch (error) {
            console.log(error);
            throw new Error("error generating summary")
        }

    }
}


export default OpenAIService