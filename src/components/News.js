import Footer from "./Footer";
import Navigation from "./Navigation";

const { default: NewsSec } = require("./NewsSec")

const News = () => {
    return ( 
        <section id="news">
            <main id="group">
                <h2>THE GROUP NEWS <span id="T">T</span><span id="G">G</span> <span id="N">N</span></h2>
            <header id="werbung">
                <div>
                <h1>HERE YOU CAN PALCE YOUR AD:</h1>
                </div>
                
                


            </header>
            </main>
            
            <main id="complet">
            <Navigation />
            <article  >
            <NewsSec/>
            </article>
            </main>
           
            <Footer />
        </section>
     );
}
 
export default News;