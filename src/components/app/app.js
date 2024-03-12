import React, {Component} from "react";
import './app.scss';
import Header from '../header/header';
import Hero from '../hero/hero';
import ErrorBoundary from "../error-boundary/error-boundary";
import CardList from '../../components/cards-list/cards-list';
import FormPost from '../../components/form-post/form-post';

export default class App extends Component {

    render() {
        return (
            <ErrorBoundary>
                <div>
                    <Header/>
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

