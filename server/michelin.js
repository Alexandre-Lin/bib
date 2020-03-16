const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Parse webpage restaurant
 * @param  {String} data - html response
 * @return {Object} restaurant
 */
const parse = data => {
  const $ = cheerio.load(data);
  let names;
  let locations;
  let kitchens_styles;
  let image_urls;
  $( 'body > main >section > div.row > div.col-lg-12 > div.row' ).each(function() {
    let temp_name = $(this).find('div.col-md-6 > div.card__menu > div.card__menu-content > h5.card__menu-content--title > a').text().trim();
    let temp_location=$(this).find('div.col-md-6 > div.card__menu > div.card__menu-footer > div.card__menu-footer--location').text().trim();
    let temp_kitchen_style=$(this).find('div.col-md-6 > div.card__menu > div.card__menu-footer > div.card__menu-footer--price').text().trim();
    let temp_image_url=$(this).find('div.col-md-6 > div.card__menu > div.card__menu-image > a > noscript').text().trim();
    names=temp_name;
    locations=temp_location;
    kitchens_styles=temp_kitchen_style;
    image_urls=temp_image_url;
  });
  names = names.split('  ').join('').split('\n').filter(function (element) {
    return element != '';
  });
  locations = locations.split('  ').join('').split('\n').filter(function (element) {
    return element != '';
  });
  kitchens_styles = kitchens_styles.split('  ').join('').split('\n').filter(function (element) {
    return element != '';
  });
  image_urls = image_urls.split('"').filter(function(element) {
    return element.length > 15;
  });
  return {names,locations,kitchens_styles,image_urls};
};

/**
 * Scrape a given restaurant url
 * @param  {String}  url
 * @return {Object} restaurant
 */
module.exports.scrapeRestaurant = async url => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return parse(data);
  }

  console.error(status);

  return null;
};

/**
 * Get all France located Bib Gourmand restaurants
 * @return {Array} restaurants
 */
module.exports.get = () => {
  return [];
};
