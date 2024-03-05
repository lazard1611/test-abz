import React, {Component} from "react";
import './app.scss';
import Header from '../header/header';
import Hero from '../hero/hero';
import ErrorBoundary from "../error-boundary/error-boundary";

import TestServices from '../../services/test-services';
import CardList from '../../components/cards-list/cards-list';
import FormPost from '../../components/form-post/form-post';


export default class App extends Component {

    state = {
        showRandomPlanet: true,
        // swapiService: new SwapiService(),
        hasError: false,
    }

    render() {
        const testServices = new TestServices();
        testServices.getAllCardResource().then((body) => {
            console.log(body);
        })

        return (
            <ErrorBoundary>
                <div>
                    <Header onServiceChange={this.onServiceChange}/>
                    <div className="base">
                        <main className="wrapper">
                            <Hero/>
                            <CardList/>
                            <FormPost/>
                        </main>
                    </div>
                </div>
            </ErrorBoundary>
        )
    }
}

