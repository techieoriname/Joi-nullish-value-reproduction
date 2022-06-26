import { is, XMongoSchema, XMongoModel, joi } from "xpress-mongo";
import { UseCollection } from "@xpresser/xpress-mongo";

/**
 * Interface for Model's `this.data`.
 * Optional if accessing data using model helper functions
 */
export interface TechieDataType {
    updatedAt?: Date;
    createdAt: Date;
}

/**
 * Techie Model
 * Collection: `techies`
 */
class Techie extends XMongoModel {
    // Set Model Schema
    static schema: XMongoSchema = {
        name: joi.string().required().allow(null),
        updatedAt: is.Date(),
        createdAt: is.Date().required()
    };

    public data!: TechieDataType;
}

/**
 * Map Model to Collection: `techies`
 * .native() will be made available for use.
 */
UseCollection(Techie, "techies");

export default Techie;
