import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./layout/Header";
import Footer from "./layout/Footer";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div class="container">
                    <h1 class="sr-only">Maple, cooking made easy</h1>
                    <div class="card mt-4 p-4">
                        <h2>What is Maple?</h2>
                        <p>Maple is your new go-to place for all things food related. Think comfort food, think health kicks, think birthday snacks, anything you're craving, Maple will have it. </p>
                        <p>Even better, there's no need for the faff of writing shopping lists. Simply save the ingredients of your favourite recipes and we'll add them to your Maple shopping list for you, making those trips to the supermarket so much easier.</p>
                    </div>
                    <div class="card ml-auto p-4 text-right">
                        <h2>Why do I need Maple?</h2>
                        <p>It gets to 6pm, you've just got home from work and you're hungry. You want something easy and don't know where to start. You think "I should've thought about this earlier", but how could you? You were at work!!!</p>
                        <p>This is where you think about your friend Mark, who uses Maple to plan meals for him and his family. They never seem to face the problems you do, and that's because Mark saves his family's favourite recipes to Maple. The convenient shopping list then ensures he never forgets ingredents.</p>
                        <p>But you might think, "I know our favourite Lasanga recipe off by heart, I know how to make a Shephards Pie!" But with Maple, you have the chance to find new recipes and different, exciting ways of cooking. Never fail to impress your dinner guests, always keep your little ones happy and enjoy every moment in the kitchen.</p>
                    </div>
                    <div class="card p-4">
                        <h2>Where do I begin?</h2>
                        <p>Maple is currently in development. We are working hard to provide the best web experience possible so that all your food needs are fulfilled with ease and utmost satisfaction.</p>
                        <p>If this entices you, fill out the contact form below and be the first one to know when we are up and running.</p>
                    </div>
                </div>
                <div class="contact-form">

                </div>
                <Footer />
            </React.Fragment>
        );
    };
}

ReactDOM.render(<App/>, document.getElementById('app'));
