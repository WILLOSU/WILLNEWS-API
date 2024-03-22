import "dotenv/config";
import app from "./app.js";

const port = process.env.PORT || 3001; //ou porta ou porta 3000
app.listen(port, () => console.log(`Server running on port: ${port}`));


// operador ou || se não tiver nada em process.env.PORT coloca 3000;