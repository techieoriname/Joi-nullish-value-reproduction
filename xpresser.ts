import { init } from "xpresser";
import config from "./config";

// Initialize Xpresser
const $ = init(config, { exposeDollarSign: false });

// Initialize Typescript
$.initializeTypescript(__filename);


// Export Xpresser
export { $ };
