import { NextFunction, Request, Response } from "express";
import { z, ZodError } from "zod";

export default function validateLinkMiddleware(schema: z.ZodObject<any, any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {

            schema.parse(req.body)
            next()

        } catch (error) {
            if (error instanceof ZodError) {
                res.status(404).json({
                    status: "failed",
                    error: error.errors.map(error => error.message)
                })
            }

            const customErrorerror = error as Error
            res.status(500).json({
                status: "failed",
                error: customErrorerror.message
            })

        }
    }
}