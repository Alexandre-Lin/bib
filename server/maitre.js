const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Parse webpage restaurant
 * @param  {String} data - html response
 * @return {Object} restaurant
 */
const parse = data => {
    const $ = cheerio.load(data);

    let path = $('body > div.main-content-wrapper > section.main-content > section.section > div.container-fluid > div.section-inner > div > div.fond-pages > article > div.row > div > div.ep-container >div.ep-content > div.ep-content-inner > div.ep-content-left > div.ep-content-left-inner > div.ep-section');
    let infos = path.find('div.ep-infos-txt').text().trim();
    infos = infos.split('  ').join('').split('\n').filter(function (element) {
        return element != '';
    });
    let name = infos[0];
    let owner = infos[1];
    let location = infos[2];
    return {name, location, owner};
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
 * Get all restaurants
 * @return {Array} restaurants
 */
module.exports.get = () => {
    return [];
};
