import React from 'react';
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import reverse from 'lodash/reverse';
import moment from 'moment';
import news from '../sample_news';

const makeNewsBody = (n) => {
  if (n.image) return (
    <div className="news-item">
      <p>{n.body}</p>
      <img alt={n.alt} src={n.image} />
    </div>
  ); else return (
    <div className="news-item">
      <p>{n.body}</p>
    </div>
  );
}
const makeNews = (newses) => {
  return map(reverse(sortBy(newses, (n) => n.date)), (n) => (
    <li className="news-li">
      <p>{moment(n.date).format('dddd MMMM Do YYYY')}</p>
      <h1>{n.title}</h1>
      {makeNewsBody(n)}
    </li>
  ));
};

const News = () => (
  <div className="news-page">
    <ul>
      {makeNews(news)}
    </ul>
  </div>
);

export default News;
