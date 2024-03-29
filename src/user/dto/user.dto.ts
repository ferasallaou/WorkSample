import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const validateUser = [
    body('firstName').notEmpty().isString(),
    body('lastName').notEmpty().isString(),
    body('email').notEmpty().isEmail(),
    body('password').notEmpty().isLength({ min: 8 }),
    body('age').notEmpty().isNumeric(),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ success: false, error: formatValidationError(errors.array()) });
        }
        next();
    },
];

function formatValidationError(errors: any[]) {
    return errors.reduce((prev, current) => {
        prev.push(current.path);
        return prev;
    }, []);
}
