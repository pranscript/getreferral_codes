const urlModel = require('../models/URL');
const config = require('../configs/constants');
const mongoose = require('mongoose');
const validUrl = require('valid-url');
//const shortCode = require('../middlewares/uniqueUrlCode');
const nanoid = require('nanoid');
const cache = require('./cache/redis');

module.exports = (router) =>{

    router.get('/api/:code', async (req, res) => {
        const item = await urlModel.findOneAndUpdate({ urlCode: req.params.code },{$inc : {redirects : 1}},{returnOriginal: false});
        if (item) {
          return res.redirect(item.originalUrl);
        } else {
          return res.redirect(config.errorURL);
        }
      });


    router.post('/api/shortit', async (req, res) => {   

        const  originalURL = req.body;
        if (validUrl.isUri(originalURL)) {
            try { 
                const urlCode = nanoid(10);
                const shortUrl = "https://urlbits.com" + '/' + urlCode;
                const newData = { 
                    originalUrl:originalURL, 
                    shortUrl:shortUrl, 
                    urlCode:urlCode,
                    redirects:0,
                    createdAt: new Date(),
                    updatedAt: new Date()
                };

                const item = new urlModel(newData);
                await item.save();
                // Add the item to cache
                //cache.addToCache('originalUrl', originalURL, newData);
                res.status(200).json(newData);
            
            } catch (err) {
            res.status(401).json('Error in Saving');
            }
        } else {
            return res.status(401).json('Invalid Original Url.');
        }
    });

    return router;
}