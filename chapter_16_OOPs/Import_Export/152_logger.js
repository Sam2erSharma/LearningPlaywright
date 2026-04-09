import log from "../logger.js";
//since we are importing default export which only contains one export, we can simply write log instead of {log}
//import { log } from "./logger.js"; //use this if you want to import without default
log("Hello");
//Output: [LOG] 1 Hello

//----------------
/*Named/Object Export vs Default Export
      Feature        | 	     Named Export            | 	     Default Export
1. Number of exports | 	Unlimited                    | 	Only One
2. Import syntax     | 	import{name} from            | import andName from
3. Import name       | 	Must match exact name        | 	Can be anything
4. Use case          | 	Utilities, constants,helpers | 	Main class or function of a file
5. Rename            | 	import{name as alias} from   | Name it anything


*/