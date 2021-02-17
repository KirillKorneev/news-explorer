import React from 'react';
import './CardList.css';
import { NewsCard } from '../NewsCard/NewsCard.js';
import * as infoTransform from '../../utils/infoTransformer.js';

function CardList(props) {

  return (
    <ul className="elements">
      {
        props.cards.slice(0, props.count).map((card) => 
          /*console.log(card)
          console.log(card.urlToImage);
          console.log(infoTransform.dataTransform(card.publishedAt));
          console.log(infoTransform.titleTransform(card.title));
          console.log(infoTransform.textTransform(card.content));
          console.log(card.source.name);
          console.log(card.url);*/
          <NewsCard 
            photo = {card.urlToImage}
            data = {infoTransform.dataTransform(card.publishedAt)}
            title = {infoTransform.titleTransform(card.title)}
            text = {infoTransform.textTransform(card.content)}
            source = {card.source.name}
            link = {card.url}
            key = {card.url}
            //*keyWord = {card.keyWord}*/
            isMain = {true}
            isLogin = {props.isLogin}
          />
        
        )
      }
    </ul>
  );
}

export { CardList };