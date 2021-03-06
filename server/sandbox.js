/* eslint-disable no-console, no-process-exit */
const michelin = require('./michelin');
const maitre = require('./maitre.js');

/**
 * @param searchLink
 * @returns {Promise<{names: *, image_urls: *, locations: *, kitchens_styles: *}>}
 */
// 15 pages at all
async function sandbox() {
    let searchLink = 'https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/'
    let searchLink_path;
    let names = new Array();
    let locations = new Array();
    let kitchens_styles = new Array();
    let image_urls = new Array();
    for (let i = 1; i < 16; i++) {
        searchLink_path = searchLink + i.toString();

        try {
            console.log(`🕵️‍♀️  browsing ${searchLink_path} source`);

            const restaurant = await michelin.scrapeRestaurant(searchLink_path);
            names = names.concat(restaurant.names);
            locations = locations.concat(restaurant.locations);
            kitchens_styles = kitchens_styles.concat(restaurant.kitchens_styles);
            image_urls = image_urls.concat(restaurant.image_urls);
            console.log('done');
        } catch (e) {
            console.error(e);
        }
    }
    console.log({names, locations, kitchens_styles, image_urls});
    return {names, locations, kitchens_styles, image_urls};
}

// 6156 restaurants at all
async function sandbox2() {
    let searchLink = 'https://www.maitresrestaurateurs.fr/profil/';
    let searchLink_path;
    let names = new Array();
    let locations = new Array();
    let owners = new Array();
    for (let i = 1; i < 6156; i++) {
        searchLink_path = searchLink + i.toString();
        try {
            console.log(`🕵️‍♀️  browsing ${searchLink_path} source`);

            const maitres = await maitre.scrapeRestaurant(searchLink_path);
            names = names.concat(maitres.name);
            locations = locations.concat(maitres.location);
            owners = owners.concat(maitres.owner);
            console.log('done');
        } catch (e) {
            console.error(e);
        }
    }
    console.log(names, locations, owners);
    return {names, locations, owners};
}


const [, , searchLink] = process.argv;


fs = require('fs');
sandbox().then(res => {
    fs.writeFile("michelin.json", JSON.stringify(res), err => {

        // Checking for errors
        if (err) throw err;

        console.log("Done writing for bib"); // Success
    });
});
sandbox2().then(res => {
    fs.writeFile("maitre.json",JSON.stringify(res),err=>{
        if (err) throw err;
        console.log("Done writing for maitre");
    })
});

