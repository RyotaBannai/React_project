import React from "react";
import Article from "../components/Article";

export default class Featured extends React.Component {
    render() {
        function Counter(initial_count = 0) {
            let _uuid = initial_count;
            Object.defineProperty(this,"uuid", {
                get: function() { return ++_uuid; },
            })
        }

        let counter = new Counter();

        const ArticlesInfo = [{
                id: counter.uuid,
                title: 'The Civil Rights Act of 2020',
                content: 'There are images of police officers joining protesters in dancing the Cupid shuffle, taking knees and hugging little girls.',
            }, {
                id: counter.uuid,
                title: 'Aggressive Tactics by National Guard, Ordered to Appease Trump, Wounded the Military, Too',
                content: 'Some members of the D.C. Guard — comprising more than 60 percent people of color — have not told family they were part of the crackdown.',

            }, {
                id: counter.uuid,
                title: 'Burundi’s outgoing president dies, possibly of covid-19',
                content: 'IN FOOTBALL, WROTE Jean-Paul Sartre, everything is complicated by the presence of the other team. Pierre Nkurunziza had ways of simplifying things.',

            }];
        let Articles = [];
        for(const {id, title, content} of ArticlesInfo){
            Articles.push(<Article key={id} title={title} content={content} />)
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