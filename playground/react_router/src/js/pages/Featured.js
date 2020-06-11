import React from "react";
import Article from "../components/Article";

export default class Featured extends React.Component {
    es6Function = (value) => { // 2019 Update with react 16+ and ES6
        console.log(value)
    }

    deleteArticle() {
        console.log('wanna delete...');
    }

    render() {
        function Counter(initial_count = 0) {
            let _uuid = initial_count;
            Object.defineProperty(this,"uuid", {
                get: function() { return ++_uuid; },
            })
        }

        let counter = new Counter();



        const ArticlesInfo = [{
                key: counter.uuid,
                title: 'The Civil Rights Act of 2020',
                content: 'There are images of police officers joining protesters in dancing the Cupid shuffle, taking knees and hugging little girls.',
            }, {
                key: counter.uuid,
                title: 'Aggressive Tactics by National Guard, Ordered to Appease Trump, Wounded the Military, Too',
                content: 'Some members of the D.C. Guard — comprising more than 60 percent people of color — have not told family they were part of the crackdown.',

            }, {
                key: counter.uuid,
                title: 'Burundi’s outgoing president dies, possibly of covid-19',
                content: 'IN FOOTBALL, WROTE Jean-Paul Sartre, everything is complicated by the presence of the other team. Pierre Nkurunziza had ways of simplifying things.',

            }];
        let Articles = [];
        for(const Props of ArticlesInfo){
            Articles.push(<Article {...Props} deleteArticle={this.deleteArticle}/>)
        }
        return <div>
            <h1>Featured</h1>
            <div className="row">
                <div className="col-lg-12">
                    <div className="well text-center">
                        Ad spot goes here
                    </div>
                </div>
            </div>
            <div className="row">{Articles}</div>
        </div>
    }
}