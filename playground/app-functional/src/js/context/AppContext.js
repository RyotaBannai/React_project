import React from "react";

function Counter (initial_count = 0) {
    let _uuid = initial_count;
    Object.defineProperty(this,"uuid", {
        get: function() { return ++_uuid; },
    })
}
const counter = new Counter();

const articles = [{
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
function deleteArticle(article_id) {
    console.log('wanna delete...');
    this.setState((state, props) => ({
        articles: state.articles.filter(article => article.key !== article_id),
    }));
}
function appState(_this = this){
    return ({
        articles: articles,
        deleteArticle: deleteArticle.bind(_this),
    });
}
const AppContext = React.createContext(appState());
export{
    AppContext,
    appState,
}