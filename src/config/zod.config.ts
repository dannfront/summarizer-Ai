import { z } from "zod"

const schemaLink = z.object({
    link: z.string({ required_error: "link is required", invalid_type_error: "Name must be a string" })
        .url({ message: "invalid URL" })
        .regex(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/, { message: "Invalid link" })
})


export default schemaLink