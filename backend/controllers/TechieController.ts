import { ControllerClass } from "xpresser";
import { Http } from "xpresser/types/http";
import Techie from "../models/Techie";

/**
 * TechieController
 */
class TechieController extends ControllerClass {
    /**
     * Example controller action.
     * @param {Http} http
     */
    async action(http: Http) {
        await new Techie()
            .set({
                name: null
            })
            .save();

        return http.send({
            route: http.route
        });
    }
}

export = TechieController;
