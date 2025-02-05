import * as env from "env-var"
import "dotenv/config"
const envs = {
    OPENAI_API_KEY: env.get("OPENAI_API_KEY").required().asString()
}

export default envs